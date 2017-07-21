import { Node } from './node';

let editNode;
let editEl;

export class JsonEditor {
    mountSelector;
    mountElement;
    source;
    mounted;
    root;
    rootNode;
    elementsMap;
    constructor(config) {
        if (!config.mountSelector) {
            throw new Error("No mountSelector provided.");
        }
        this.mountSelector = config.mountSelector;
        this.mounted = false;

    }

    render() {
        if (!this.source) {
            throw new Error(`No source for rendering. Please loadSource(source)`);
        }
        this._renderRoot()
    }

    loadSource(source) {
        try {
            JSON.stringify(source)
        } catch(err) {
            throw new Error('JSON source is not valid');
        }
        this.source = source;
    }

    _renderRoot() {
        this.mountElement = document.querySelector(this.mountSelector);
        if (!this.mountElement) {
            throw new Error(`No mountElement found with selector - ${this.mountSelector}`);
        }
        
        this.root = document.createElement("div");
        this.root.classList.add('root-jsonedit');
        this.rootNode = new Node(this.source, {
            type: Array.isArray(this.source) ? "array" : "object", 
            parent: null, 
            noComma: true,
        });
        this.root.appendChild(this.rootNode.element);
        this.mountElement.appendChild(this.root);
        this.createMap()
        this.attachEvents()
        console.dir(this.rootNode)
        console.dir(this.elementsMap)
    }

    createMap() {
        this.elementsMap = new WeakMap();
        const bindNodeToElement = (element, node) => {
            this.elementsMap.set(element, node);
            if (node.children && node.children.length) {
                node.children.forEach(child => {
                    bindNodeToElement(child.element, child);
                })
            }
        }
        bindNodeToElement(this.rootNode.element, this.rootNode);
    }

    attachEvents() {
        this.root.addEventListener('click', (event) => {
            if (event.target.classList.contains("collapser")) {
                this.collapseNode(event.target);
            } 
        })
        this.root.addEventListener('focus', (event) => {
            if (event.target.classList.contains("act-value")) {
                this.onStartEditValue(event.target)
            } 
        }, true)
        this.root.addEventListener('blur', (event) => {
            if (event.target.classList.contains("act-value")) {
                this.onFinishEditValue(event.target)
            } 
        }, true)
            
    }

    onStartEditValue(target) {
        editEl = target;
        let valueEl = JsonEditor.closestWithAttr(target, 'data-type');
        editNode = this.elementsMap.get(valueEl);
    }

    onFinishEditValue(target) {
        switch(editNode.type) {
            case 'number': {
                if (isNaN(+editEl.textContent)) {
                    editEl.textContent = editNode.data[editNode.key];
                } else {
                    editNode.data[editNode.key] = editEl.textContent;
                }
                break;
            }
            case 'boolean': {
                if (editEl.textContent === "false" || editEl.textContent === "true") {
                    editNode.data[editNode.key] = editEl.textContent === "false" ? 
                        false : true;
                } else {
                    editEl.textContent = editNode.data[editNode.key];
                }
                break;
            }
            case 'string':
            default:
                editNode.data[editNode.key] = editEl.textContent;
                break;
        }
        console.dir(this.source)
        editEl, editNode = null, null;
    }

    collapseNode(target) {
        const valueEl = target.parentNode;
        const node = this.elementsMap.get(valueEl);
        node.collapsed = !node.collapsed;
    }

    static getValueElement(element) {
        let current = element;
        while(current.nextSibling) {
            if (current.nextSibling.classList.contains('json-value')) {
                return current.nextSibling;
            }
            current = current.nextSibling;
        }
        return null;
    }

    static closestWithAttr(element, attr) {
        let current = element;
        while(current.parentNode) {
            if (current.getAttribute(attr)) {
                return current;
            }
            current = current.parentNode;
        }
        return null;
    }
}