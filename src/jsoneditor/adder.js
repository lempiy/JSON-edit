import { Node } from './node';

export class Adder {
    hostElement;
    bodyElement;
    inputContainer;
    selectType;
    applyElement;
    _hidder;
    currentNode;
    applyButton;
    selectTypeInput;
    optionsStruct;
    _currOption;
    _disabledOption;
    defaultoption;
    elementMap;

    constructor(elementMap) {
        this.optionsStruct = {
            number: "number",
            string: "string",
            boolean: "boolean",
            array: "array",
            object: "object",
        }
        this.elementMap = elementMap
        this.defaultoption = this.optionsStruct.string
        this._createPannel()
        this._createHidder()
        this.attachEvents()
    }

    _createHidder() {
        this._hidder = document.createElement("div");
        this._hidder.classList.add("hidden");
        this._hidder.appendChild(this.hostElement);
        document.body.appendChild(this._hidder);
    }

    attachEvents() {
        this.hostElement.addEventListener('change', event => {
            if (event.target.tagName === "SELECT") {
                this.currOption = event.target.value
            }
        })
        this.hostElement.addEventListener('click', event => {
            if (event.target === this.applyButton) {
                this.apply()
            }
        })
    }

    detachEvents() {
        this.hostElement.removeEventListener('change')
        this.hostElement.removeEventListener('click')
    }

    show(node) {
        this.currentNode = node;
        if (this.currentNode.children.length) {
            const first = this.currentNode.children[0]
            this._setAndDisableOption(first.type, true)
        } else {
            this._setAndDisableOption(this.defaultoption, false)
        }
        this.keyElement.textContent = this.currentNode.children.length + ":";
        node.element.appendChild(this.hostElement)
    }

    hide() {
        this.currentNode = null;
        this._setAndDisableOption(this.defaultoption, false)
        this._hidder.appendChild(this.hostElement)
    }

    _setAndDisableOption(option, isDisabled) {
        this.currOption = option;
        this.selectTypeInput.value = option;
        this.disabledOption = isDisabled;
    }

    get disabledOption() {
        return this.selectTypeInput.disabled;
    }

    set disabledOption(isDisabled) {
        this.selectTypeInput.disabled = isDisabled;
    }

    get currOption() {
        return this._currOption;
    }

    set currOption(newOption) {
        switch(newOption) {
            case "number":
                this._setNumberType()
                break;
            case "null":
            case "string":
                this._setTextType()
                break;
            case "boolean":
                this._setBoolType()
                break;
            case "object":
                this._setObjectType()
                break;
            case "array":
                this._setArrayType()
                break;
        }
        this._currOption = newOption;
    }

    _setNumberType() {
        this.inputContainer.innerHTML = 
        `
            <input type="number" name="added"/>
        `
    }

    _setTextType() {
        this.inputContainer.innerHTML = 
        `
            <input type="text" name="added"/>
        `
    }

    _setBoolType() {
        this.inputContainer.innerHTML = 
        `
            <input type="checkbox" name="added"/>
        `
    }
    

    _setObjectType() {
        this.inputContainer.innerHTML = 
        `
            <div class="height-100">{...}</div>
        `
    }

    _setArrayType() {
        this.inputContainer.innerHTML = 
        `
            <div class="height-100">[]</div>
        `
    }

    _applyPrimitive() {
        const input = this.inputContainer.querySelector("[name='added']")
        const newEl = document.createElement("li")
        newEl.setAttribute('data-type', this.currOption)
        newEl.innerHTML = 
        `<span spellcheck="false" class="json-key">${this.currentNode.children.length}:</span><span class="json-value">
            <span contenteditable="true" class="act-value">${input.value}</span>
        </span>
        <div class="remove-value" title="Delete">⛌</div></li>`
        const data = {
            element: newEl,
            children: null,
            data: this.currentNode.source,
            key: this.currentNode.children.length,
            parent: this.currentNode,
            type: this.currOption
        }
        this.currentNode.source.push(this._getCorrectPrimitive(input.value))
        this.currentNode.children.push(data)
        this.elementMap.set(newEl, data)
        this.currentNode.element.appendChild(newEl)
        this.hide()  
    }

    _applyComplex() {
        if (this.currOption === "object") {
            return this._applyObject()
        }
    }

    _applyObject() {
        if (this.currentNode.children.length) {
            const first = this.currentNode.children[0];
            const clone = this._cloneAndEraseSource(first.source)
            const el = this.currentNode._createNodeValue(this.currentNode.children.length, clone, true)
            let valEl = el.querySelector('.json-value')
            this.currentNode.element.appendChild(el)
            const newNode = this.currentNode.children[this.currentNode.children.length - 1]
            this.hide()
            this.attachToMap(valEl, newNode)
        }
    }

    _cloneAndEraseSource(source) {
        return Object.keys(source).reduce((acc, key) => {
            let type = Node._detectValueType(source[key]);
            switch(type) {
                case 'string':
                    acc[key] = ""
                    break;
                case 'number':
                    acc[key] = 0
                    break;
                case 'null':
                    acc[key] = source[key]
                    break;
                case 'boolean':
                    acc[key] = false
                    break;
                case 'object':
                    acc[key] = this._cloneAndEraseSource(source[key])
                    break;
                case 'array':
                    acc[key] = []
                    break;
            }
            return acc;
        }, {})
    }

    _getCorrectPrimitive(input) {
        switch(this.currOption){
            case "string":
                return String(input);
            case "number":
                return +input;
            case "boolean":
                return input === "true" ? true : false
        }
    }

    apply() {
        switch (this.currOption) {
            case "string":
            case "number":
            case "boolean":
                this._applyPrimitive()
                break;
            case "array":
            case "object":
                this._applyComplex()
                break;
        }
    }

    _createPannel() {
        this.hostElement = document.createElement("li");
        this.hostElement.classList.add("adder-host")
        this.hostElement.setAttribute("data-type", "")
        //create key
        this.keyElement = document.createElement("span");
        this.keyElement.classList.add("json-key");
        this.keyElement.setAttribute("spellcheck", false);
        this.keyElement.textContent = "new:";
        this.hostElement.appendChild(this.keyElement);

        //create body
        this.bodyElement = document.createElement("div");
        this.bodyElement.classList.add("adder-body");
        this.hostElement.appendChild(this.bodyElement);

        //create input-container
        this.inputContainer = document.createElement("div");
        this.inputContainer.classList.add("input-container");
        this.bodyElement.appendChild(this.inputContainer);

        //create select-type
        this.selectType = document.createElement("div");
        this.selectType.classList.add("select-type");
        this.bodyElement.appendChild(this.selectType);

        //create apply
        this.applyElement = document.createElement("div");
        this.applyElement.classList.add("apply");
        this.bodyElement.appendChild(this.applyElement);

        //create apply-button
        this.applyButton = document.createElement("button");
        this.applyButton.textContent = "Apply";
        this.applyElement.appendChild(this.applyButton);

        //create select
        this.selectTypeInput = document.createElement('select');
        Object.keys(this.optionsStruct).map((option, i) => {
            let opt = document.createElement("option");
            opt.value = option;
            opt.textContent = option;
            this.selectTypeInput.appendChild(opt)
        })
        this.selectType.appendChild(this.selectTypeInput);
    }

    attachToMap(initialEl, initialNode) {
        const bindNodeToElement = (element, node) => {
            this.elementMap.set(element, node);
            if (node.children && node.children.length) {
                node.children.forEach(child => {
                    bindNodeToElement(child.element, child);
                })
            }
        }
        bindNodeToElement(initialEl, initialNode);
    }
}