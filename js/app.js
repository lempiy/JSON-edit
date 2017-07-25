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
	
	var _adder = __webpack_require__(3);
	
	var editNode = undefined;
	var editEl = undefined;
	var prevInput = undefined;
	
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
	        key: 'attachEvents',
	        value: function attachEvents() {
	            var _this2 = this;
	
	            this.root.addEventListener('click', function (event) {
	                if (event.target.classList.contains("collapser")) {
	                    _this2.collapseNode(event.target);
	                }
	                if (event.target.classList.contains("remove-value")) {
	                    _this2.deleteArrayValue(event.target);
	                }
	                if (event.target.classList.contains("creator")) {
	                    _this2.showCreator(event.target);
	                }
	                if (event.target.getAttribute('data-type' === "boolean")) {}
	                if (event.target.classList.contains('json-value')) {
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
	                        if (!/^\-?[0-9]+[\.0-9]*$/g.test(event.target.textContent)) {
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
	                        console.log(event);
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
	            console.log(this.currentNode);
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
	            switch (input) {
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