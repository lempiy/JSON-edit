import { Node } from './node';
import { Adder } from './adder';

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
    adder;
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
        this._createRootNode()
        this._createRootTitle()
        this.mountElement.appendChild(this.root);
        this.createMap()
        this.attachEvents()
        this.adder = new Adder();
        console.dir(this.rootNode)
        console.dir(this.elementsMap)
    }

    _createRootNode() {
        this.rootNode = new Node(this.source, {
            type: Array.isArray(this.source) ? "array" : "object", 
            parent: null, 
            noComma: true,
        });
        this.root.appendChild(this.rootNode.element);
    }

    _createRootTitle() {
        this.root.setAttribute("data-collapsed", false);
        let collapser = document.createElement("div");
        collapser.classList.add('collapser', 'root-collapse');
        this.root.appendChild(collapser);
        let title = document.createElement('div')
        title.classList.add('title-root')
        title.textContent = `${this.rootNode.type === 'array' ? '[]' : '{}'}`
        this.root.appendChild(title)
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
            if (event.target.classList.contains("remove-value")) {
                this.deleteArrayValue(event.target);
            }
            if (event.target.classList.contains("creator")) {
                this.showCreator(event.target);
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

    showCreator(target) {
        const valueEl = target.parentNode;
        const node = this.elementsMap.get(valueEl);
        this.adder.show(node);
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
        editEl, editNode = null, null;
    }

    collapseNode(target) {
        if (target.classList.contains('root-collapse')) {
            let collapsed = this.root.getAttribute('data-collapsed') === 'false' ? false : true;
            this.root.setAttribute('data-collapsed', !collapsed)
            return
        }
        const valueEl = target.parentNode;
        const node = this.elementsMap.get(valueEl);
        node.collapsed = !node.collapsed;
    }

    deleteArrayValue(target) {
        let valueEl = target.parentNode;
        const node = this.elementsMap.get(valueEl);

        node.data.splice(+node.key, 1);
        this.elementsMap.delete(valueEl);
        const {parent} = node;
        
        if (target.classList.contains("complex-value")) {
            this.updateArrayKeys(parent, node)
            let arrayElement = JsonEditor.closestWithClass(valueEl, 'in-array')
            arrayElement.parentNode.removeChild(arrayElement);
            valueEl.parentNode.removeChild(valueEl);
            
            return;
        }
        this.updateArrayKeys(parent, node)
        valueEl.parentNode.removeChild(valueEl);
    }

    updateArrayKeys(arrayNode, node) {
        arrayNode.children.splice(arrayNode.children.indexOf(node), 1);

        arrayNode.children.forEach((n, i) => {
            if (n instanceof Node) {
                n.element.previousSibling.textContent = i + ":"
            } else {
                n.element.querySelector(".json-key").textContent = i + ":"
            }
            
            n.key = i
        })
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

    static closestWithAttr(element, attr, value) {
        let current = element;
        while(current.parentNode) {
            if (current.getAttribute(attr)) {
                if (value && current.getAttribute(attr) !== value) {
                    current = current.parentNode;
                    continue;
                }
                return current;
            }
            current = current.parentNode;
        }
        return null;
    }

    static closestWithClass(element, _class) {
        let current = element;
        while(current.parentNode) {
            if (current.classList.contains(_class)) {
                return current;
            }
            current = current.parentNode;
        }
        return null;
    }
}