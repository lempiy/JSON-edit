/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jsoneditorJsoneditor = __webpack_require__(1);
	
	__webpack_require__(4);
	
	window.JsonEditor = _jsoneditorJsoneditor.JsonEditor;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _node = __webpack_require__(2);
	
	var _adder = __webpack_require__(3);
	
	var editNode = undefined,
	    editEl = undefined,
	    editValue = undefined,
	    prevInput = undefined;
	
	var JsonEditor = (function () {
	    function JsonEditor(config) {
	        _classCallCheck(this, JsonEditor);
	
	        if (!config.mountSelector) {
	            throw new Error("No mountSelector provided.");
	        }
	        this.mountSelector = config.mountSelector;
	        this.mounted = false;
	        this.elementsMap = new Map();
	    }
	
	    _createClass(JsonEditor, [{
	        key: 'render',
	        value: function render() {
	            if (!this.source) {
	                throw new Error('No source for rendering. Please loadSource(source)');
	            }
	            this._renderRoot();
	        }
	    }, {
	        key: 'loadSource',
	        value: function loadSource(source) {
	            try {
	                JSON.stringify(source);
	            } catch (err) {
	                throw new Error('JSON source is not valid');
	            }
	            this.source = source;
	        }
	    }, {
	        key: '_renderRoot',
	        value: function _renderRoot() {
	            this.mountElement = document.querySelector(this.mountSelector);
	            if (!this.mountElement) {
	                throw new Error('No mountElement found with selector - ' + this.mountSelector);
	            }
	
	            this.root = document.createElement("div");
	            this.root.classList.add('root-jsonedit');
	            this._createRootNode();
	            this._createRootTitle();
	            this.mountElement.appendChild(this.root);
	            this.createMap();
	            this.attachEvents();
	            this.adder = new _adder.Adder(this.elementsMap);
	        }
	    }, {
	        key: '_createRootNode',
	        value: function _createRootNode() {
	            this.rootNode = new _node.Node(this.source, {
	                type: Array.isArray(this.source) ? "array" : "object",
	                parent: null,
	                noComma: true
	            });
	            this.root.appendChild(this.rootNode.element);
	        }
	    }, {
	        key: '_createRootTitle',
	        value: function _createRootTitle() {
	            this.root.setAttribute("data-collapsed", false);
	            var collapser = document.createElement("div");
	            collapser.classList.add('collapser', 'root-collapse');
	            this.root.appendChild(collapser);
	            var title = document.createElement('div');
	            title.classList.add('title-root');
	            title.textContent = '' + (this.rootNode.type === 'array' ? '[]' : '{}');
	            this.root.appendChild(title);
	        }
	    }, {
	        key: 'createMap',
	        value: function createMap() {
	            var _this = this;
	
	            var bindNodeToElement = function bindNodeToElement(element, node) {
	                _this.elementsMap.set(element, node);
	                if (node.parent) {
	                    node.collapsed = true;
	                }
	                if (node.children && node.children.length) {
	                    node.children.forEach(function (child) {
	                        bindNodeToElement(child.element, child);
	                    });
	                }
	            };
	            bindNodeToElement(this.rootNode.element, this.rootNode);
	        }
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            // Free references to let GC clean everything
	            this.adder.hostElement.parentNode.removeChild(this.adder.hostElement);
	            this.root.parentNode.removeChild(this.root);
	            this.mountSelector = null;
	            this.mountElement = null;
	            this.source = null;
	            this.mounted = null;
	            this.root = null;
	            this.rootNode = null;
	            this.elementsMap = null;
	            this.adder = null;
	            editNode = null;
	            editEl = null;
	            editValue = null;
	            prevInput = null;
	        }
	    }, {
	        key: 'attachEvents',
	        value: function attachEvents() {
	            var _this2 = this;
	
	            this.root.addEventListener('click', function (event) {
	                if (editValue) {
	                    _this2._clear();
	                }
	                if (event.target.classList.contains("collapser")) {
	                    _this2.collapseNode(event.target);
	                } else if (event.target.classList.contains("remove-value")) {
	                    _this2.deleteArrayValue(event.target);
	                } else if (event.target.classList.contains("creator")) {
	                    _this2.showCreator(event.target);
	                } else if (event.target.classList.contains('act-value')) {
	                    var typeEl = JsonEditor.closestWithAttr(event.target, 'data-type');
	                    var type = typeEl.getAttribute('data-type');
	                    if (type === 'boolean') {
	                        _this2._changeBooleanValue(typeEl, event.target);
	                    }
	                } else if (event.target.classList.contains('json-value')) {
	                    var valueEl = event.target;
	                    var node = _this2.elementsMap.get(valueEl);
	                    node.collapsed = !node.collapsed;
	                }
	            });
	            this.root.addEventListener('focus', function (event) {
	                if (event.target.classList.contains("act-value")) {
	                    _this2.onStartEditValue(event.target);
	                }
	            }, true);
	            this.root.addEventListener('blur', function (event) {
	                if (event.target.classList.contains("act-value")) {
	                    _this2.onFinishEditValue(event.target);
	                }
	            }, true);
	            this.root.addEventListener('keypress', function (event) {
	                if (event.target.classList.contains("act-value")) {
	                    _this2.onChangeEditValue(event);
	                }
	            }, true);
	            this.root.addEventListener('input', function (event) {
	                if (event.target.classList.contains("act-value")) {
	                    _this2.onInputValue(event);
	                }
	            }, true);
	        }
	    }, {
	        key: 'showCreator',
	        value: function showCreator(target) {
	            var valueEl = target.parentNode;
	            var node = this.elementsMap.get(valueEl);
	            this.adder.show(node);
	        }
	    }, {
	        key: 'onStartEditValue',
	        value: function onStartEditValue(target) {
	            editEl = target;
	            var valueEl = JsonEditor.closestWithAttr(target, 'data-type');
	            editNode = this.elementsMap.get(valueEl);
	        }
	    }, {
	        key: 'onInputValue',
	        value: function onInputValue(event) {
	            switch (editNode.type) {
	                case 'number':
	                    {
	                        if (!/^\-?[0-9]+(\.[0-9]+)?$/g.test(event.target.textContent)) {
	                            event.target.textContent = prevInput;
	                        }
	                        break;
	                    }
	            }
	        }
	    }, {
	        key: 'onChangeEditValue',
	        value: function onChangeEditValue(event) {
	            prevInput = event.target.textContent;
	            switch (editNode.type) {
	                case 'number':
	                    {
	                        if (!/[0-9\.\-]/g.test(event.key)) {
	                            event.preventDefault();
	                        } else if (event.key === '.') {
	                            /[\.]/g.test(event.target.textContent) && event.preventDefault();
	                        } else if (event.key === '-') {
	                            /[\-]/g.test(event.target.textContent) && event.preventDefault();
	                        }
	                        break;
	                    }
	                case 'boolean':
	                    {
	                        if (editEl.textContent === "false" || editEl.textContent === "true") {
	                            editNode.data[editNode.key] = editEl.textContent === "false" ? false : true;
	                        } else {
	                            editEl.textContent = editNode.data[editNode.key];
	                        }
	                        break;
	                    }
	                case 'string':
	                default:
	                    break;
	            }
	        }
	    }, {
	        key: 'onFinishEditValue',
	        value: function onFinishEditValue(target) {
	            switch (editNode.type) {
	                case 'number':
	                    {
	                        if (isNaN(+editEl.textContent)) {
	                            editEl.textContent = editNode.data[editNode.key];
	                        } else {
	                            if (editEl.textContent === "") {
	                                editEl.textContent = 0;
	                                editNode.data[editNode.key] = 0;
	                            } else {
	                                editNode.data[editNode.key] = editEl.textContent;
	                            }
	                        }
	                        break;
	                    }
	                case 'boolean':
	                    {
	                        if (editEl.textContent === "false" || editEl.textContent === "true") {
	                            editNode.data[editNode.key] = editEl.textContent === "false" ? false : true;
	                        } else {
	                            editEl.textContent = editNode.data[editNode.key];
	                        }
	                        break;
	                    }
	                case 'null':
	                    {
	                        var newType = _node.Node._assertPrimitiveValue(editEl.textContent);
	                        editNode.data[editNode.key] = newType.value;
	                        editNode.type = newType.type;
	                        editNode.element.setAttribute("data-type", newType.type);
	                    }
	                case 'string':
	                default:
	                    editNode.data[editNode.key] = editEl.textContent;
	                    break;
	            }
	            editEl, editNode = null, null;
	        }
	    }, {
	        key: 'collapseNode',
	        value: function collapseNode(target) {
	            if (target.classList.contains('root-collapse')) {
	                var collapsed = this.root.getAttribute('data-collapsed') === 'false' ? false : true;
	                this.root.setAttribute('data-collapsed', !collapsed);
	                return;
	            }
	            var valueEl = target.parentNode;
	            var node = this.elementsMap.get(valueEl);
	            node.collapsed = !node.collapsed;
	        }
	    }, {
	        key: 'deleteArrayValue',
	        value: function deleteArrayValue(target) {
	            var valueEl = target.parentNode;
	            var node = this.elementsMap.get(valueEl);
	
	            node.data.splice(+node.key, 1);
	            this.elementsMap['delete'](valueEl);
	            var parent = node.parent;
	
	            if (target.classList.contains("complex-value")) {
	                this.updateArrayKeys(parent, node);
	                var arrayElement = JsonEditor.closestWithClass(valueEl, 'in-array');
	                arrayElement.parentNode.removeChild(arrayElement);
	                valueEl.parentNode.removeChild(valueEl);
	
	                return;
	            }
	            this.updateArrayKeys(parent, node);
	            valueEl.parentNode.removeChild(valueEl);
	        }
	    }, {
	        key: 'updateArrayKeys',
	        value: function updateArrayKeys(arrayNode, node) {
	            arrayNode.children.splice(arrayNode.children.indexOf(node), 1);
	
	            arrayNode.children.forEach(function (n, i) {
	                if (n instanceof _node.Node) {
	                    n.element.previousSibling.textContent = i + ":";
	                } else {
	                    n.element.querySelector(".json-key").textContent = i + ":";
	                }
	
	                n.key = i;
	            });
	        }
	    }, {
	        key: '_changeBooleanValue',
	        value: function _changeBooleanValue(el, actEl) {
	            editEl = el;
	            editValue = actEl;
	            editNode = this.elementsMap.get(el);
	            actEl.classList.add('hidden');
	            actEl.nextElementSibling.classList.remove('hidden');
	        }
	    }, {
	        key: '_clear',
	        value: function _clear() {
	            if (editNode.type === 'boolean') {
	                editValue.classList.remove("hidden");
	                editValue.nextElementSibling.classList.add('hidden');
	                editValue.textContent = editValue.nextElementSibling.checked ? true : false;
	                editNode.data[editNode.key] = editValue.nextElementSibling.checked ? true : false;
	            }
	            editEl = null;
	            editValue = null;
	            editNode = null;
	        }
	    }], [{
	        key: 'getValueElement',
	        value: function getValueElement(element) {
	            var current = element;
	            while (current.nextSibling) {
	                if (current.nextSibling.classList.contains('json-value')) {
	                    return current.nextSibling;
	                }
	                current = current.nextSibling;
	            }
	            return null;
	        }
	    }, {
	        key: 'closestWithAttr',
	        value: function closestWithAttr(element, attr, value) {
	            var current = element;
	            while (current.parentNode) {
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
	    }, {
	        key: 'closestWithClass',
	        value: function closestWithClass(element, _class) {
	            var current = element;
	            while (current.parentNode) {
	                if (current.classList.contains(_class)) {
	                    return current;
	                }
	                current = current.parentNode;
	            }
	            return null;
	        }
	    }]);
	
	    return JsonEditor;
	})();

	exports.JsonEditor = JsonEditor;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var Node = (function () {
	    function Node(value, config) {
	        _classCallCheck(this, Node);
	
	        this.source = value;
	        this.parent = config.parent || null;
	        this.children = [];
	        this.type = config.type;
	        this.data = config.data || null;
	        this.key = config.key;
	        this.element = this._createNode(value, config.noComma, config.noClosing);
	        this.collapsed = false;
	    }
	
	    _createClass(Node, [{
	        key: '_createNode',
	        value: function _createNode(obj, noComma, noClosing) {
	            var _this = this;
	
	            var node = document.createElement("ul");
	
	            node.classList.add('json-value');
	
	            var braces = Node._getCorrectBraces(obj, noComma);
	
	            var values = [];
	
	            var keys = Object.keys(obj);
	            values = keys.map(function (key, i) {
	                return _this._createNodeValue(key, obj[key], i === keys.length - 1);
	            });
	
	            values.forEach(function (el) {
	                node.appendChild(el);
	            });
	
	            return node;
	        }
	    }, {
	        key: '_createNodeValue',
	        value: function _createNodeValue(key, value, isLast) {
	            var type = Node._detectValueType(value);
	            switch (type) {
	                case "string":
	                case "number":
	                case "boolean":
	                case "null":
	                    return this.type === 'object' ? this._createSimpleValue(key, value, this.source, type, isLast) : this._createSimpleValueArray(key, value, this.source, type, isLast);
	                case "object":
	                case "array":
	                    return this.type === 'object' ? this._createComplexValue(key, value, type, isLast) : this._createComplexValueArray(key, value, this.source, type, isLast);
	            }
	        }
	    }, {
	        key: '_createComplexValue',
	        value: function _createComplexValue(key, value, type, isLast) {
	            var el = document.createElement("li");
	
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
	            var span = document.createElement("span");
	            span.classList.add('json-key');
	            span.textContent = key + ":";
	
	            el.appendChild(span);
	
	            var val = new Node(value, {
	                type: type,
	                parent: this,
	                noComma: isLast,
	                noClosing: true,
	                key: key
	            });
	
	            this.children.push(val);
	
	            el.appendChild(val.element);
	
	            this._addCollapser(val.element);
	            this._addCreator(val.element);
	
	            return el;
	        }
	    }, {
	        key: '_createComplexValueArray',
	        value: function _createComplexValueArray(key, value, source, type, isLast) {
	            var el = document.createElement("li");
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
	            var span = document.createElement("span");
	            span.classList.add('json-key');
	            span.textContent = key + ":";
	
	            el.appendChild(span);
	
	            var val = new Node(value, {
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
	                this._addDeleter(val.element);
	            }
	            return el;
	        }
	    }, {
	        key: '_addDeleter',
	        value: function _addDeleter(element) {
	            '<div class="remove-value" title="Delete">&#9932;</div>';
	            var deleter = document.createElement("div");
	            deleter.classList.add('remove-value', 'complex-value');
	            deleter.innerHTML = '&#9932;';
	            deleter.title = 'Delete';
	            element.appendChild(deleter);
	        }
	    }, {
	        key: '_addCollapser',
	        value: function _addCollapser(element) {
	            var collapser = document.createElement("div");
	            collapser.classList.add('collapser');
	            element.appendChild(collapser);
	        }
	    }, {
	        key: '_addCreator',
	        value: function _addCreator(element) {
	            var creator = document.createElement("div");
	            creator.classList.add('creator');
	            creator.textContent = "+Add";
	            creator.title = "Add";
	            element.appendChild(creator);
	        }
	    }, {
	        key: '_createSimpleValue',
	        value: function _createSimpleValue(key, value, source, type, isLast) {
	            var el = document.createElement("li");
	
	            el.innerHTML = '<span spellcheck="false" class="json-key">' + key + ':</span><span class="json-value">\n                <span spellcheck="false" contenteditable="true" class="act-value">' + value + '</span>\n            </span>';
	            if (type === 'boolean') {
	                el.innerHTML = '<span spellcheck="false" class="json-key">' + key + ':</span><span class="json-value">\n                    <span spellcheck="false" class="act-value">' + value + '</span>\n                    <input type="checkbox" class=\'hidden\' ' + (value === true ? 'checked' : '') + '>\n                </span>';
	            }
	
	            el.setAttribute('data-type', type);
	            this.children.push({
	                key: key,
	                type: type,
	                data: source,
	                element: el,
	                parent: this,
	                children: null
	            });
	            return el;
	        }
	    }, {
	        key: '_createSimpleValueArray',
	        value: function _createSimpleValueArray(key, value, source, type, isLast) {
	            var el = document.createElement("li");
	
	            el.innerHTML = '<span spellcheck="false" class="json-key">' + key + ':</span><span class="json-value">\n                <span contenteditable="true" class="act-value">' + value + '</span>\n            </span>\n            <div class="remove-value" title="Delete">&#9932;</div>';
	
	            el.setAttribute('data-type', type);
	            this.children.push({
	                key: key,
	                type: type,
	                element: el,
	                data: source,
	                parent: this,
	                children: null
	            });
	
	            return el;
	        }
	    }, {
	        key: 'type',
	        get: function get() {
	            return this._type;
	        },
	        set: function set(value) {
	            if (this.element) {
	                this.element.setAttribute('data-type', value);
	            }
	            this._type = value;
	        }
	    }, {
	        key: 'element',
	        get: function get() {
	            return this._element;
	        },
	        set: function set(value) {
	            if (this.type) {
	                value.setAttribute('data-type', this.type);
	            }
	            this._element = value;
	        }
	    }, {
	        key: 'collapsed',
	        get: function get() {
	            return this._collapsed;
	        },
	        set: function set(value) {
	            if (this.element.parentNode) {
	                this.element.parentNode.setAttribute("data-collapsed", value);
	            }
	            this._collapsed = value;
	        }
	    }], [{
	        key: '_assertPrimitiveValue',
	        value: function _assertPrimitiveValue(value) {
	            if (!isNaN(+value)) {
	                return {
	                    value: +value,
	                    type: "number"
	                };
	            } else if (String(value) === "true" || String(value) === "false") {
	                return {
	                    value: String(value) === "true" ? true : false,
	                    type: "boolean"
	                };
	            } else if (String(value) === "null") {
	                return {
	                    value: null,
	                    type: "null"
	                };
	            } else {
	                return {
	                    value: String(value),
	                    type: "string"
	                };
	            }
	        }
	    }, {
	        key: '_detectValueType',
	        value: function _detectValueType(value) {
	            var type = typeof value;
	            switch (type) {
	                case "string":
	                case "number":
	                case "boolean":
	                    return type;
	                case "object":
	                    var otype = Array.isArray(value) ? "array" : "object";
	                    if (value === null) {
	                        otype = "null";
	                    }
	                    return otype;
	            }
	        }
	    }, {
	        key: '_getCorrectBraces',
	        value: function _getCorrectBraces(obj, noComma) {
	            var first = undefined,
	                second = undefined;
	            if (Array.isArray(obj)) {
	                first = document.createElement('div');
	                first.textContent = '[';
	                second = document.createElement('div');
	                second.textContent = ']';
	            } else {
	                first = document.createElement('div');
	                first.textContent = '{';
	                second = document.createElement('div');
	                second.textContent = '}';
	            }
	
	            if (!Object.keys(obj).length) {
	                first.classList.add('inline-brace');
	                second.classList.add('inline-brace');
	            }
	            return [first, second];
	        }
	    }]);
	
	    return Node;
	})();

	exports.Node = Node;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _node = __webpack_require__(2);
	
	var Adder = (function () {
	    function Adder(elementMap) {
	        _classCallCheck(this, Adder);
	
	        this.optionsStruct = {
	            number: "number",
	            string: "string",
	            boolean: "boolean",
	            array: "array",
	            object: "object"
	        };
	        this.elementMap = elementMap;
	        this.defaultoption = this.optionsStruct.string;
	        this._createPannel();
	        this._createHidder();
	        this.attachEvents();
	    }
	
	    _createClass(Adder, [{
	        key: "_createHidder",
	        value: function _createHidder() {
	            this._hidder = document.createElement("div");
	            this._hidder.classList.add("hidden");
	            this._hidder.appendChild(this.hostElement);
	            document.body.appendChild(this._hidder);
	        }
	    }, {
	        key: "attachEvents",
	        value: function attachEvents() {
	            var _this = this;
	
	            this.hostElement.addEventListener('change', function (event) {
	                if (event.target.tagName === "SELECT") {
	                    _this.currOption = event.target.value;
	                }
	            });
	            this.hostElement.addEventListener('click', function (event) {
	                if (event.target === _this.applyButton) {
	                    _this.apply();
	                }
	            });
	        }
	    }, {
	        key: "detachEvents",
	        value: function detachEvents() {
	            this.hostElement.removeEventListener('change');
	            this.hostElement.removeEventListener('click');
	        }
	    }, {
	        key: "show",
	        value: function show(node) {
	            this.currentNode = node;
	            if (this.currentNode.children.length) {
	                var first = this.currentNode.children[0];
	                this._setAndDisableOption(first.type, true);
	            } else {
	                this._setAndDisableOption(this.defaultoption, false);
	            }
	            this.keyElement.textContent = this.currentNode.children.length + ":";
	            node.element.appendChild(this.hostElement);
	        }
	    }, {
	        key: "hide",
	        value: function hide() {
	            this.currentNode = null;
	            this._setAndDisableOption(this.defaultoption, false);
	            this._hidder.appendChild(this.hostElement);
	        }
	    }, {
	        key: "_setAndDisableOption",
	        value: function _setAndDisableOption(option, isDisabled) {
	            this.currOption = option;
	            this.selectTypeInput.value = option;
	            this.disabledOption = isDisabled;
	        }
	    }, {
	        key: "_setNumberType",
	        value: function _setNumberType() {
	            this.inputContainer.innerHTML = "\n            <input type=\"number\" name=\"added\"/>\n        ";
	        }
	    }, {
	        key: "_setTextType",
	        value: function _setTextType() {
	            this.inputContainer.innerHTML = "\n            <input type=\"text\" name=\"added\"/>\n        ";
	        }
	    }, {
	        key: "_setBoolType",
	        value: function _setBoolType() {
	            this.inputContainer.innerHTML = "\n            <input type=\"checkbox\" name=\"added\"/>\n        ";
	        }
	    }, {
	        key: "_setObjectType",
	        value: function _setObjectType() {
	            this.inputContainer.innerHTML = "\n            <div class=\"height-100\">{...}</div>\n        ";
	        }
	    }, {
	        key: "_setArrayType",
	        value: function _setArrayType() {
	            this.inputContainer.innerHTML = "\n            <div class=\"height-100\">[]</div>\n        ";
	        }
	    }, {
	        key: "_applyPrimitive",
	        value: function _applyPrimitive() {
	            var input = this.inputContainer.querySelector("[name='added']");
	            var newEl = document.createElement("li");
	            newEl.setAttribute('data-type', this.currOption);
	            newEl.innerHTML = "<span spellcheck=\"false\" class=\"json-key\">" + this.currentNode.children.length + ":</span><span class=\"json-value\">\n            <span contenteditable=\"true\" class=\"act-value\">" + input.value + "</span>\n        </span>\n        <div class=\"remove-value\" title=\"Delete\">⛌</div></li>";
	            var data = {
	                element: newEl,
	                children: null,
	                data: this.currentNode.source,
	                key: this.currentNode.children.length,
	                parent: this.currentNode,
	                type: this.currOption
	            };
	            this.currentNode.source.push(this._getCorrectPrimitive(input.value));
	            this.currentNode.children.push(data);
	            this.elementMap.set(newEl, data);
	            this.currentNode.element.appendChild(newEl);
	            this.hide();
	        }
	    }, {
	        key: "_applyComplex",
	        value: function _applyComplex() {
	            if (this.currOption === "object") {
	                return this._applyObject();
	            }
	        }
	    }, {
	        key: "_applyObject",
	        value: function _applyObject() {
	            if (this.currentNode.children.length) {
	                var first = this.currentNode.children[0];
	                var clone = this._cloneAndEraseSource(first.source);
	                var el = this.currentNode._createNodeValue(this.currentNode.children.length, clone, true);
	                var valEl = el.querySelector('.json-value');
	                this.currentNode.element.appendChild(el);
	                var newNode = this.currentNode.children[this.currentNode.children.length - 1];
	                this.hide();
	                this.attachToMap(valEl, newNode);
	            }
	        }
	    }, {
	        key: "_cloneAndEraseSource",
	        value: function _cloneAndEraseSource(source) {
	            var _this2 = this;
	
	            return Object.keys(source).reduce(function (acc, key) {
	                var type = _node.Node._detectValueType(source[key]);
	                switch (type) {
	                    case 'string':
	                        acc[key] = "";
	                        break;
	                    case 'number':
	                        acc[key] = 0;
	                        break;
	                    case 'null':
	                        acc[key] = source[key];
	                        break;
	                    case 'boolean':
	                        acc[key] = false;
	                        break;
	                    case 'object':
	                        acc[key] = _this2._cloneAndEraseSource(source[key]);
	                        break;
	                    case 'array':
	                        acc[key] = [];
	                        break;
	                }
	                return acc;
	            }, {});
	        }
	    }, {
	        key: "_getCorrectPrimitive",
	        value: function _getCorrectPrimitive(input) {
	            switch (this.currOption) {
	                case "string":
	                    return String(input);
	                case "number":
	                    return +input;
	                case "boolean":
	                    return input === "true" ? true : false;
	            }
	        }
	    }, {
	        key: "apply",
	        value: function apply() {
	            switch (this.currOption) {
	                case "string":
	                case "number":
	                case "boolean":
	                    this._applyPrimitive();
	                    break;
	                case "array":
	                case "object":
	                    this._applyComplex();
	                    break;
	            }
	        }
	    }, {
	        key: "_createPannel",
	        value: function _createPannel() {
	            var _this3 = this;
	
	            this.hostElement = document.createElement("li");
	            this.hostElement.classList.add("adder-host");
	            this.hostElement.setAttribute("data-type", "");
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
	            Object.keys(this.optionsStruct).map(function (option, i) {
	                var opt = document.createElement("option");
	                opt.value = option;
	                opt.textContent = option;
	                _this3.selectTypeInput.appendChild(opt);
	            });
	            this.selectType.appendChild(this.selectTypeInput);
	        }
	    }, {
	        key: "attachToMap",
	        value: function attachToMap(initialEl, initialNode) {
	            var _this4 = this;
	
	            var bindNodeToElement = function bindNodeToElement(element, node) {
	                _this4.elementMap.set(element, node);
	                if (node.children && node.children.length) {
	                    node.children.forEach(function (child) {
	                        bindNodeToElement(child.element, child);
	                    });
	                }
	            };
	            bindNodeToElement(initialEl, initialNode);
	        }
	    }, {
	        key: "disabledOption",
	        get: function get() {
	            return this.selectTypeInput.disabled;
	        },
	        set: function set(isDisabled) {
	            this.selectTypeInput.disabled = isDisabled;
	        }
	    }, {
	        key: "currOption",
	        get: function get() {
	            return this._currOption;
	        },
	        set: function set(newOption) {
	            switch (newOption) {
	                case "number":
	                    this._setNumberType();
	                    break;
	                case "null":
	                case "string":
	                    this._setTextType();
	                    break;
	                case "boolean":
	                    this._setBoolType();
	                    break;
	                case "object":
	                    this._setObjectType();
	                    break;
	                case "array":
	                    this._setArrayType();
	                    break;
	            }
	            this._currOption = newOption;
	        }
	    }]);
	
	    return Adder;
	})();

	exports.Adder = Adder;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map