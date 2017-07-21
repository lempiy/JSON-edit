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
	
	__webpack_require__(3);
	
	var appContainer = document.querySelector('#app');
	
	appContainer.innerHTML = '<div class="main-component"><h1 class="main-component__title">JSON Editor</h1></div>';
	
	var jsoneditor = new _jsoneditorJsoneditor.JsonEditor({
	  mountSelector: '#app'
	});
	
	jsoneditor.loadSource([{
	  "_id": "5971ee1ea6fbbd228ffc6569",
	  "index": 0,
	  "guid": "b0a942a6-84b2-41d0-8743-a29a7d1728b3",
	  "isActive": false,
	  "balance": "$1,967.07",
	  "picture": "http://placehold.it/32x32",
	  "age": 28,
	  "eyeColor": "green",
	  "name": "Madge Spencer",
	  "gender": "female",
	  "company": "OCTOCORE",
	  "email": "madgespencer@octocore.com",
	  "phone": "+1 (860) 509-3745",
	  "address": "959 Beadel Street, Elliston, South Dakota, 9408",
	  "about": "Cupidatat aute reprehenderit id veniam mollit qui voluptate exercitation reprehenderit pariatur. Ad anim amet nisi mollit ex consectetur pariatur nulla amet aliqua. Exercitation duis nulla excepteur aute culpa sint occaecat nostrud aliqua consectetur fugiat. Consequat irure aliqua veniam ad sit.\r\n",
	  "registered": "2017-07-07T12:54:50 -03:00",
	  "latitude": 36.295983,
	  "longitude": -99.200515,
	  "tags": ["non", "eu", "deserunt", "exercitation", "ipsum", "magna", "est"],
	  "friends": [{
	    "id": 0,
	    "name": "Zelma Roberson"
	  }, {
	    "id": 1,
	    "name": "Glenna Tillman"
	  }, {
	    "id": 2,
	    "name": "Marsha Meyers"
	  }],
	  "greeting": "Hello, Madge Spencer! You have 1 unread messages.",
	  "favoriteFruit": "strawberry"
	}, {
	  "_id": "5971ee1eb251b7c888919dda",
	  "index": 1,
	  "guid": "21fabc93-f724-4cc4-a960-b902b1d7358c",
	  "isActive": true,
	  "balance": "$3,450.10",
	  "picture": "http://placehold.it/32x32",
	  "age": 24,
	  "eyeColor": "blue",
	  "name": "Deleon Robles",
	  "gender": "male",
	  "company": "KYAGORO",
	  "email": "deleonrobles@kyagoro.com",
	  "phone": "+1 (830) 518-2794",
	  "address": "404 Johnson Avenue, Marysville, Washington, 7759",
	  "about": "Eu cupidatat voluptate exercitation sint ullamco et tempor eu. Laborum sint pariatur adipisicing deserunt velit velit adipisicing proident veniam ad eiusmod magna commodo. Excepteur adipisicing est excepteur id pariatur exercitation eiusmod cupidatat aliqua dolore. Ad consequat quis aliqua aliquip excepteur sunt consectetur est do labore quis quis in exercitation. Magna veniam sit amet ullamco cupidatat do. Nostrud pariatur commodo minim consequat tempor ad aliquip culpa anim do eiusmod sunt. Ex nisi non sit laboris cupidatat voluptate.\r\n",
	  "registered": "2017-02-10T08:42:51 -02:00",
	  "latitude": 29.616067,
	  "longitude": -161.124213,
	  "tags": ["anim", "elit", "quis", "qui", "sint", "veniam", "amet"],
	  "friends": [{
	    "id": 0,
	    "name": "Ballard Rosario"
	  }, {
	    "id": 1,
	    "name": "Shelia Crawford"
	  }, {
	    "id": 2,
	    "name": "Darcy Kirkland"
	  }],
	  "greeting": "Hello, Deleon Robles! You have 4 unread messages.",
	  "favoriteFruit": "banana"
	}, {
	  "_id": "5971ee1e9602c695f8a53413",
	  "index": 2,
	  "guid": "612b00b7-e22e-4513-8d72-46ea4508d2c8",
	  "isActive": false,
	  "balance": "$1,399.99",
	  "picture": "http://placehold.it/32x32",
	  "age": 23,
	  "eyeColor": "brown",
	  "name": "Beverley Huff",
	  "gender": "female",
	  "company": "ARCHITAX",
	  "email": "beverleyhuff@architax.com",
	  "phone": "+1 (818) 444-3958",
	  "address": "975 Polar Street, Roulette, Kentucky, 9291",
	  "about": "Qui ex nulla occaecat ut do nostrud commodo proident ea consequat consectetur ullamco ipsum. Proident eiusmod et consequat aliquip sint nulla nulla nulla exercitation laborum fugiat eu amet irure. In ad culpa reprehenderit pariatur ad nostrud voluptate nisi cupidatat aliquip enim nisi quis. Quis exercitation do aliqua reprehenderit enim est ut. Eiusmod aliquip consequat cupidatat adipisicing excepteur cupidatat labore. Adipisicing do aliqua elit magna id ea tempor ad qui mollit ipsum consectetur. Pariatur anim sit officia ex voluptate exercitation consectetur.\r\n",
	  "registered": "2015-05-07T05:14:13 -03:00",
	  "latitude": -45.257645,
	  "longitude": 158.993708,
	  "tags": ["aliquip", "ullamco", "dolor", "eiusmod", "aliquip", "officia", "ad"],
	  "friends": [{
	    "id": 0,
	    "name": "Baird Haney"
	  }, {
	    "id": 1,
	    "name": "Cruz Morrison"
	  }, {
	    "id": 2,
	    "name": "Cindy Perkins"
	  }],
	  "greeting": "Hello, Beverley Huff! You have 9 unread messages.",
	  "favoriteFruit": "strawberry"
	}, {
	  "_id": "5971ee1e4df3d88bd7955e46",
	  "index": 3,
	  "guid": "475d5634-1410-4ff2-9855-4daf6fe9c8a9",
	  "isActive": false,
	  "balance": "$3,517.58",
	  "picture": "http://placehold.it/32x32",
	  "age": 23,
	  "eyeColor": "brown",
	  "name": "Stella Morales",
	  "gender": "female",
	  "company": "CENTREXIN",
	  "email": "stellamorales@centrexin.com",
	  "phone": "+1 (853) 485-2982",
	  "address": "942 Franklin Avenue, Chesterfield, Virgin Islands, 4853",
	  "about": "Sint id minim nostrud anim nulla labore cupidatat in nulla ex consequat voluptate consequat. Reprehenderit Lorem anim laborum elit magna consectetur tempor. Et elit sunt anim ullamco duis culpa nisi cillum laborum Lorem reprehenderit.\r\n",
	  "registered": "2017-01-20T03:53:08 -02:00",
	  "latitude": -21.286465,
	  "longitude": -26.225775,
	  "tags": ["magna", "occaecat", "enim", "minim", "pariatur", "ipsum", "aliqua"],
	  "friends": [{
	    "id": 0,
	    "name": "Lewis Schwartz"
	  }, {
	    "id": 1,
	    "name": "Elsie Burton"
	  }, {
	    "id": 2,
	    "name": "Bird Hobbs"
	  }],
	  "greeting": "Hello, Stella Morales! You have 8 unread messages.",
	  "favoriteFruit": "strawberry"
	}, {
	  "_id": "5971ee1eeac1034afccad2c3",
	  "index": 4,
	  "guid": "70087575-449f-41f3-9aac-554c3e441a49",
	  "isActive": true,
	  "balance": "$1,481.00",
	  "picture": "http://placehold.it/32x32",
	  "age": 27,
	  "eyeColor": "brown",
	  "name": "Fran Dillon",
	  "gender": "female",
	  "company": "HOUSEDOWN",
	  "email": "frandillon@housedown.com",
	  "phone": "+1 (824) 567-2884",
	  "address": "824 Knapp Street, Caledonia, South Carolina, 1935",
	  "about": "Culpa irure exercitation anim excepteur esse. Sint esse mollit dolor esse commodo sit cillum. Et exercitation cillum reprehenderit minim Lorem sunt consectetur. Excepteur deserunt labore et sint. Sint ullamco ipsum qui dolor nulla. Voluptate do ex duis dolore.\r\n",
	  "registered": "2016-12-07T01:34:06 -02:00",
	  "latitude": 75.976068,
	  "longitude": 50.227993,
	  "tags": ["quis", "qui", "dolor", "sit", "laboris", "laborum", "magna"],
	  "friends": [{
	    "id": 0,
	    "name": "Torres Trujillo"
	  }, {
	    "id": 1,
	    "name": "Letitia Neal"
	  }, {
	    "id": 2,
	    "name": "Miriam Knox"
	  }],
	  "greeting": "Hello, Fran Dillon! You have 8 unread messages.",
	  "favoriteFruit": "strawberry"
	}, {
	  "_id": "5971ee1eebbc22a0eaccf18f",
	  "index": 5,
	  "guid": "4d5c3b49-4d8d-4caf-bb30-833b9a871bdd",
	  "isActive": true,
	  "balance": "$3,734.09",
	  "picture": "http://placehold.it/32x32",
	  "age": 24,
	  "eyeColor": "blue",
	  "name": "Janet Merrill",
	  "gender": "female",
	  "company": "PURIA",
	  "email": "janetmerrill@puria.com",
	  "phone": "+1 (953) 516-2127",
	  "address": "837 Bridgewater Street, Motley, Arizona, 1606",
	  "about": "Cillum ea fugiat magna voluptate tempor qui. Incididunt nulla sunt elit nostrud cillum Lorem cillum cupidatat sunt officia anim cillum incididunt. Excepteur deserunt qui consectetur dolore qui occaecat aliquip ad. Aute occaecat excepteur enim deserunt reprehenderit ex irure nulla.\r\n",
	  "registered": "2016-04-03T07:45:56 -03:00",
	  "latitude": -19.561361,
	  "longitude": 151.796919,
	  "tags": ["irure", "cillum", "mollit", "ipsum", "consequat", "elit", "magna"],
	  "friends": [{
	    "id": 0,
	    "name": "Prince Gallagher"
	  }, {
	    "id": 1,
	    "name": "Francesca Chen"
	  }, {
	    "id": 2,
	    "name": "Frazier Bradley"
	  }],
	  "greeting": "Hello, Janet Merrill! You have 9 unread messages.",
	  "favoriteFruit": "banana"
	}]);
	
	jsoneditor.render();

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
	
	var editNode = undefined;
	var editEl = undefined;
	
	var JsonEditor = (function () {
	    function JsonEditor(config) {
	        _classCallCheck(this, JsonEditor);
	
	        if (!config.mountSelector) {
	            throw new Error("No mountSelector provided.");
	        }
	        this.mountSelector = config.mountSelector;
	        this.mounted = false;
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
	            this.rootNode = new _node.Node(this.source, {
	                type: Array.isArray(this.source) ? "array" : "object",
	                parent: null,
	                noComma: true
	            });
	            this.root.appendChild(this.rootNode.element);
	            this.mountElement.appendChild(this.root);
	            this.createMap();
	            this.attachEvents();
	            console.dir(this.rootNode);
	            console.dir(this.elementsMap);
	        }
	    }, {
	        key: 'createMap',
	        value: function createMap() {
	            var _this = this;
	
	            this.elementsMap = new WeakMap();
	            var bindNodeToElement = function bindNodeToElement(element, node) {
	                _this.elementsMap.set(element, node);
	                if (node.children && node.children.length) {
	                    node.children.forEach(function (child) {
	                        bindNodeToElement(child.element, child);
	                    });
	                }
	            };
	            bindNodeToElement(this.rootNode.element, this.rootNode);
	        }
	    }, {
	        key: 'attachEvents',
	        value: function attachEvents() {
	            var _this2 = this;
	
	            this.root.addEventListener('click', function (event) {
	                if (event.target.classList.contains("collapser")) {
	                    _this2.collapseNode(event.target);
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
	        }
	    }, {
	        key: 'onStartEditValue',
	        value: function onStartEditValue(target) {
	            editEl = target;
	            var valueEl = JsonEditor.closestWithAttr(target, 'data-type');
	            editNode = this.elementsMap.get(valueEl);
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
	                            editNode.data[editNode.key] = editEl.textContent;
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
	                    editNode.data[editNode.key] = editEl.textContent;
	                    break;
	            }
	            console.dir(this.source);
	            editEl, editNode = null, null;
	        }
	    }, {
	        key: 'collapseNode',
	        value: function collapseNode(target) {
	            var valueEl = target.parentNode;
	            var node = this.elementsMap.get(valueEl);
	            node.collapsed = !node.collapsed;
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
	        value: function closestWithAttr(element, attr) {
	            var current = element;
	            while (current.parentNode) {
	                if (current.getAttribute(attr)) {
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
	        this.key = config.key;
	        this.element = this._createNode(value, config.noComma, config.noClosing);
	        this.collapsed = false;
	    }
	
	    _createClass(Node, [{
	        key: '_createNode',
	        value: function _createNode(obj, noComma, noClosing) {
	            var _this = this;
	
	            var node = document.createElement("ul");
	            var braces = Node._getCorrectBraces(obj, noComma);
	
	            if (!noClosing) {
	                node.appendChild(braces[0]);
	            }
	
	            var values = [];
	
	            var keys = Object.keys(obj);
	            values = keys.map(function (key, i) {
	                return _this._createNodeValue(key, obj[key], i === keys.length - 1);
	            });
	
	            values.forEach(function (el) {
	                node.appendChild(el);
	            });
	            if (!noClosing) {
	                node.appendChild(braces[1]);
	            }
	
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
	                    return this.type === 'object' ? this._createComplexValue(key, value, type, isLast) : this._createComplexValueArray(key, value, type, isLast);
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
	            val.element.classList.add('json-value');
	            el.appendChild(val.element);
	
	            var collapser = document.createElement("div");
	            collapser.classList.add('collapser');
	            val.element.appendChild(collapser);
	
	            return el;
	        }
	    }, {
	        key: '_createComplexValueArray',
	        value: function _createComplexValueArray(key, value, type, isLast) {
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
	
	            var val = new Node(value, {
	                type: type,
	                parent: this,
	                noComma: isLast,
	                noClosing: true,
	                key: key
	            });
	
	            this.children.push(val);
	            val.element.classList.add('json-value');
	            el.appendChild(val.element);
	
	            var collapser = document.createElement("div");
	            collapser.classList.add('collapser');
	            val.element.appendChild(collapser);
	
	            return el;
	        }
	    }, {
	        key: '_createSimpleValue',
	        value: function _createSimpleValue(key, value, source, type, isLast) {
	            var el = document.createElement("li");
	
	            el.innerHTML = '<span spellcheck="false" class="json-key">' + key + ':</span><span class="json-value">\n                <span spellcheck="false" contenteditable="true" class="act-value">' + value + '</span>' + (isLast ? '' : ',') + '\n            </span>';
	
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
	
	            el.innerHTML = '<span class="json-value">\n                <span contenteditable="true" class="act-value">' + value + '</span>' + (isLast ? '' : ',') + '\n            </span>';
	
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
	                second.textContent = ']' + (noComma ? '' : ',');
	            } else {
	                first = document.createElement('div');
	                first.textContent = '{';
	                second = document.createElement('div');
	                second.textContent = '}' + (noComma ? '' : ',');
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
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map