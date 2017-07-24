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

    constructor() {
        this.optionsStruct = {
            number: "number",
            string: "string",
            boolean: "boolean",
            array: "array",
            object: "object",
        }
        this._createPannel()
        this._createHidder()
    }

    _createHidder() {
        this._hidder = document.createElement("div");
        this._hidder.classList.add("hidden");
        this._hidder.appendChild(this.hostElement);
        document.body.appendChild(this._hidder);
    }

    show(node) {
        this.currentNode = node;
        node.element.appendChild(this.hostElement)
    }

    hide() {
        this.currentNode = null;
        this._hidder.appendChild(this.hostElement)
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
}