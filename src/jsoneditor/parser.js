export class Parser {
    static parse(str) {
        let c = 0; //cursor
        let result;
        const parseObj = () => {
            let node = {};
            let inQuotes = false;
            let key = "";
            let inKey = false;
            let value = "";
            let inValue = false;
            let tag = "";
            let inTag = false;
            let prevChar = '';
            let afterCol = false;
            let type = null;
            let afterClosing = false;

            const reset = () => {
                inQuotes = false;
                key = "";
                inKey = false;
                value = "";
                inValue = false;
                tag = "";
                inTag = false;
                prevChar = '';
                afterCol = false;
                type = null;
            }

            while (c < str.length) {
                // if (key === "age") {
                //     debugger;
                // }
                let char = str[c]
                if (str[c] === '"' && !inTag) {
                    if (!inKey && key && !afterCol) {
                        throw new Error(`Invalid syntax at ${c} - char '${str[c]}'`)
                    }
                    inQuotes = !inQuotes;
                    if (prevChar === '\\') {
                        if (inKey) {
                            key += str[c]
                        } else
                        if (inValue) {
                            value += str[c]
                        }
                    }
                    if (value) {
                        inValue = false; //if value finish collecting value
                    } else if (key) {
                        if (inKey) {
                            inKey = false //if inKey finish collecting key
                        } else {
                            inValue = true; //if no inKey and key exists start collecting value
                            type = "string";
                        }
                    } else { // if no key
                        inKey = true
                    }
                } else
                if (!inQuotes && !inTag) {
                    if (str[c] === '`') {
                        if (key) {
                            inTag = true
                        } else {
                            throw new Error(`Invalid syntax at ${c} - char '${str[c]}'`)
                        }

                    } else
                    if (str[c] === '}') { // object closet move cursor return to prev
                        if (key) {
                            afterClosing = true
                            if (!type) {
                                type = detectType(value)
                            }
                            createPair(node, key, value, tag, type);
                        } else {
                            throw new Error(`Invalid syntax at ${c} - char '${str[c]}'`)
                        }
                        return node;
                    } else if (str[c] === '{') {
                        ++c;
                        value = parseObj();
                        type = "object";
                    } else if (str[c] === '[') {
                        ++c;
                        value = parseArray();
                        type = "array";
                    } else if (str[c] === ':') {
                        afterCol = true;
                    } else if (str[c] === ',') {
                        if (!type) {
                            type = detectType(value)
                        }
                        createPair(node, key, value, tag, type);
                        reset()
                    } else if (str[c] === '`') {
                        inTag != inTag
                    } else {
                        if (/\S/g.test(str[c])) {
                            if (inValue) {
                                value += str[c]
                            } else if (key && !inValue && afterCol && !value) {
                                inValue = true
                                value += str[c]
                            } else {
                                throw new Error(`Invalid syntax at ${c} - char '${str[c]}'`)
                            }
                        } else {
                            if (inValue) {
                                inValue = false;
                            }
                        }
                    }
                } else
                if (inTag) {
                    if (str[c] === '`') {
                        inTag = false
                    } else {
                        tag += str[c]
                    }
                } else { // if in qoutes
                    if (str[c] === '\\') {
                        prevChar = '\\';
                    } else {
                        prevChar = '';
                    }
                    if (inKey) {
                        key += str[c]
                    } else if (inValue) {
                        value += str[c]
                    } else {
                        throw new Error(`Invalid syntax at ${c} - char '${str[c]}'`)
                    }
                }
                c++;
            }

            if (afterClosing) {
                if (key) {
                    createPair(node, key, value, tag, type);
                    reset()
                }
                return node;
            } else {
                throw new Error("Invalid JSON")
            }
        }

        const detectType = (val) => {
            if (val === "") {
                throw new Error(`Invalid syntax.`);
            } else if (!isNaN(+val)) {
                return "number"
            } else if (val === "true" || val === "false") {
                return "boolean"
            } else {
                return "string"
            }
        }

        const createPair = (node, ky, val, tag, type) => {
            switch (type) {
                case "number":
                    node[ky] = {
                        value: +val,
                        tag: tag
                    }
                    break;
                case "boolean":
                    node[ky] = {
                        value: val === "true" ? true : false,
                        tag: tag
                    }
                    break;
                default:
                    node[ky] = {
                        value: val,
                        tag: tag
                    }
            }
        }

        const createValue = (node, val, tag, type) => {
            switch (type) {
                case "number":
                    node.push({
                        value: +val,
                        tag: tag
                    })
                    break;
                case "boolean":
                    node.push({
                        value: val === "true" ? true : false,
                        tag: tag
                    })
                    break;
                default:
                    node.push({
                        value: val,
                        tag: tag
                    })
            }
        }

        const parseArray = () => {
            let node = [];
            let inQuotes = false;
            let value = "";
            let inValue = false;
            let tag = "";
            let inTag = false;
            let prevChar = '';
            let afterCol = false;
            let type = null;
            let afterClosing = false;

            const reset = () => {
                inQuotes = false;
                value = "";
                inValue = false;
                tag = "";
                inTag = false;
                prevChar = '';
                afterCol = false;
                type = null;
            }

            while (c < str.length) {
                let char = str[c];
                if (str[c] === '"' && !inTag) {
                    if (prevChar === '\\') {
                        if (inValue) {
                            value += str[c]
                        }
                    }
                    if (value) {
                        if (!inQuotes) {
                            throw new Error(`Invalid syntax at ${c} - char '${str[c]}'`)
                        }
                        inValue = false;
                    } else {
                        inValue = true;
                        type = "string";
                    }
                    inQuotes = !inQuotes;
                } else
                if (!inQuotes && !inTag) {
                    if (str[c] === '`') {
                        if (value !== "" || type === "string") {
                            inTag = true
                        } else {
                            throw new Error(`Invalid syntax at ${c} - char '${str[c]}'`)
                        }

                    } else
                    if (str[c] === ']') { // object closet move cursor return to prev
                        if (value !== "" || type === "string") {
                            afterClosing = true
                            if (!type) {
                                type = detectType(value)
                            }
                            createValue(node, value, tag, type);
                        } else {
                            throw new Error(`Invalid syntax at ${c} - char '${str[c]}'`)
                        }
                        return node;
                    } else if (str[c] === '[') {
                        ++c;
                        value = parseArray();
                        type = "array";
                    } else if (str[c] === '{') {
                        if (value) {
                            throw new Error(`Invalid syntax at ${c} - char '${str[c]}'`)
                        }
                        ++c;
                        value = parseObj();
                        type = "object";
                    } else if (str[c] === ',') {
                        if (!type) {
                            type = detectType(value)
                        }
                        createValue(node, value, tag, type);
                        reset()
                    } else if (str[c] === '`') {
                        inTag != inTag
                    } else {
                        if (/\S/g.test(str[c])) {
                            if (!inValue && !value) {
                                inValue = true
                            } else {
                                throw new Error(`Invalid syntax at ${c} - char '${str[c]}'`)
                            }
                            value += str[c]
                        } else {
                            if (inValue) {
                                inValue = false;
                            }
                        }
                    }
                } else
                if (inTag) {
                    if (str[c] === '`') {
                        inTag = false
                    } else {
                        tag += str[c]
                    }
                } else { // if in qoutes
                    if (str[c] === '\\') {
                        prevChar = '\\';
                    } else {
                        prevChar = '';
                    }
                    if (inValue) {
                        value += str[c]
                    }
                }
                c++;
            }

            if (afterClosing) {
                createValue(node, value, tag, type);
                reset()
                return node;
            } else {
                throw new Error("Invalid JSON")
            }
        }

        if (str[0] === '{') {
            ++c;
            return parseObj()
        } else if (str[0] === '[') {
            ++c;
            return parseArray()
        } else {
            throw new Error(`Invalid syntax at 0 - char '${str[0]}'`)
        }
    }
}
