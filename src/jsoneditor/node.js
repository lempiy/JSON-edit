export class Node {
    element;
    source;
    children;
    parent;
    _type;
    _element;
    _valueElement;
    key;
    _collapsed;
    constructor(value, config) {
        this.source = value;
        this.parent = config.parent || null;
        this.children = [];
        this.type = config.type;
        this.data = config.data || null;
        this.key = config.key;
        this.element = this._createNode(value, config.noComma, config.noClosing);
        this.collapsed = false;
    }

    _createNode(obj, noComma, noClosing) {
        const node = document.createElement("ul");

        node.classList.add('json-value')

        const braces = Node._getCorrectBraces(obj, noComma);

        let values = [];

        const keys = Object.keys(obj);
        values = keys.map((key, i) => {
            return this._createNodeValue(key, obj[key], i === keys.length - 1);
        })

        values.forEach(el => {
            node.appendChild(el);
        })

        return node;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        if (this.element) {
            this.element.setAttribute('data-type', value);
        }
        this._type = value;
    }

    get element() {
        return this._element;
    }

    set element(value) {
        if (this.type) {
            value.setAttribute('data-type', this.type);
        }
        this._element = value;
    }

    get collapsed() {
        return this._collapsed;
    }

    set collapsed(value) {
        if (this.element.parentNode) {
            this.element.parentNode.setAttribute("data-collapsed", value);
        }
        this._collapsed = value;
    }

     _createNodeValue(key, value, isLast) {
        const type = Node._detectValueType(value);
        switch(type) {
            case "string":
            case "number":
            case "boolean":
            case "null":
                return this.type === 'object' ? 
                    this._createSimpleValue(key, value, this.source, type, isLast) :
                    this._createSimpleValueArray(key, value, this.source, type, isLast);
            case "object":
            case "array":
                return this.type === 'object' ? 
                    this._createComplexValue(key, value, type, isLast) :
                    this._createComplexValueArray(key, value, this.source, type, isLast);
        }
    }

    _createComplexValue(key, value, type, isLast) {
        const el = document.createElement("li");

        el.classList.add("complex");
        this._valueElement = el;
        if (type === 'array') {
            el.classList.add("array");
        } else {
            el.classList.add("object");
        }
        if (isLast) {
            el.classList.add("last");
        }

        el.setAttribute("data-collapsed", false);
        const span = document.createElement("span");
        span.classList.add('json-key');
        span.textContent = key + ":";

        el.appendChild(span)

        const val = new Node(value, {
            type: type, 
            parent: this, 
            noComma: isLast,
            noClosing: true,
            key: key
        });
        this.children.push(val);
        
        el.appendChild(val.element);
        
        this._addCollapser(val.element);
        this._addCreator(val.element)

        return el;
    }

    _createComplexValueArray(key, value, source, type, isLast) {
        const el = document.createElement("li");
        el.classList.add("complex", "in-array");

        this._valueElement = el;

        if (type === 'array') {
            el.classList.add("array");
        } else {
            el.classList.add("object");
        }
        if (isLast) {
            el.classList.add("last");
        }
        el.setAttribute("data-collapsed", false);
        const span = document.createElement("span");
        span.classList.add('json-key');
        span.textContent = key + ":";

        el.appendChild(span)

        const val = new Node(value, {
            type: type, 
            parent: this, 
            data: source,
            noComma: isLast,
            noClosing: true,
            key: key
        });

        this.children.push(val);
        val.element.classList.add('json-value');
        el.appendChild(val.element);
        
        this._addCollapser(val.element);
        if (this.parent) {
            this._addDeleter(val.element)
        } 
        return el;
    }

    _addDeleter(element) {
        `<div class="remove-value" title="Delete">&#9932;</div>`
        const deleter = document.createElement("div");
        deleter.classList.add('remove-value', 'complex-value');
        deleter.innerHTML = '&#9932;';
        deleter.title = 'Delete';
        element.appendChild(deleter);
    }

    _addCollapser(element) {
        let collapser = document.createElement("div");
        collapser.classList.add('collapser');
        element.appendChild(collapser);
    }

    _addCreator(element) {
        let creator = document.createElement("div");
        creator.classList.add('creator');
        creator.textContent = "+Add";
        creator.title = "Add";
        element.appendChild(creator);
    }

    _createSimpleValue(key, value, source, type, isLast) {
        const el = document.createElement("li");

        el.innerHTML = 
            `<span spellcheck="false" class="json-key">${key}:</span><span class="json-value">
                <span spellcheck="false" contenteditable="true" class="act-value">${value}</span>
            </span>`;

        el.setAttribute('data-type', type)
        this.children.push({
            key: key,
            type: type,
            data: source,
            element: el,
            parent: this,
            children: null,
        })
        return el;
    }

    _createSimpleValueArray(key, value, source, type, isLast) {
        const el = document.createElement("li");

        el.innerHTML = 
            `<span spellcheck="false" class="json-key">${key}:</span><span class="json-value">
                <span contenteditable="true" class="act-value">${value}</span>
            </span>
            <div class="remove-value" title="Delete">&#9932;</div>`;
        
        el.setAttribute('data-type', type)
        this.children.push({
            key: key,
            type: type,
            element: el,
            data: source,
            parent: this,
            children: null,
        })
        
        return el;
    }

    static _detectValueType(value) {
        const type = typeof value;
        switch(type) {
            case "string":
            case "number":
            case "boolean":
                return type;
            case "object":
                let otype = Array.isArray(value) ? "array" : "object";
                if (value === null) {
                    otype = "null";
                }
                return otype
        }
    }

    static _getCorrectBraces(obj, noComma) {
        let first, second;
        if (Array.isArray(obj)) {
            first = document.createElement('div')
            first.textContent = '['
            second = document.createElement('div')
            second.textContent = `]`
            
        } else {
            first = document.createElement('div')
            first.textContent = '{'
            second = document.createElement('div')
            second.textContent = `}`
        }

        if (!Object.keys(obj).length) {
            first.classList.add('inline-brace')
            second.classList.add('inline-brace')
        }
        return [
            first,
            second,
        ]
    } 
}