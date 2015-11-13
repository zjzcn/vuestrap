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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	var _examplesAlert = __webpack_require__(7);
	
	var _examplesAlert2 = _interopRequireDefault(_examplesAlert);
	
	var _examplesAccordion = __webpack_require__(13);
	
	var _examplesAccordion2 = _interopRequireDefault(_examplesAccordion);
	
	var _examplesBreadcrumb = __webpack_require__(17);
	
	var _examplesBreadcrumb2 = _interopRequireDefault(_examplesBreadcrumb);
	
	var _examplesButtons = __webpack_require__(21);
	
	var _examplesButtons2 = _interopRequireDefault(_examplesButtons);
	
	var _examplesButtonGroup = __webpack_require__(25);
	
	var _examplesButtonGroup2 = _interopRequireDefault(_examplesButtonGroup);
	
	var _examplesButtonCheckbox = __webpack_require__(29);
	
	var _examplesButtonCheckbox2 = _interopRequireDefault(_examplesButtonCheckbox);
	
	var _examplesButtonRadio = __webpack_require__(33);
	
	var _examplesButtonRadio2 = _interopRequireDefault(_examplesButtonRadio);
	
	var _examplesCard = __webpack_require__(37);
	
	var _examplesCard2 = _interopRequireDefault(_examplesCard);
	
	var _examplesCarousel = __webpack_require__(41);
	
	var _examplesCarousel2 = _interopRequireDefault(_examplesCarousel);
	
	var _examplesCollapse = __webpack_require__(45);
	
	var _examplesCollapse2 = _interopRequireDefault(_examplesCollapse);
	
	var _examplesDropdown = __webpack_require__(49);
	
	var _examplesDropdown2 = _interopRequireDefault(_examplesDropdown);
	
	var _examplesDropdownSelect = __webpack_require__(53);
	
	var _examplesDropdownSelect2 = _interopRequireDefault(_examplesDropdownSelect);
	
	var _examplesFormCheckbox = __webpack_require__(57);
	
	var _examplesFormCheckbox2 = _interopRequireDefault(_examplesFormCheckbox);
	
	var _examplesFormInput = __webpack_require__(63);
	
	var _examplesFormInput2 = _interopRequireDefault(_examplesFormInput);
	
	var _examplesFormSelect = __webpack_require__(67);
	
	var _examplesFormSelect2 = _interopRequireDefault(_examplesFormSelect);
	
	var _examplesFormTextarea = __webpack_require__(71);
	
	var _examplesFormTextarea2 = _interopRequireDefault(_examplesFormTextarea);
	
	var _examplesFormRadio = __webpack_require__(75);
	
	var _examplesFormRadio2 = _interopRequireDefault(_examplesFormRadio);
	
	var _examplesIcons = __webpack_require__(79);
	
	var _examplesIcons2 = _interopRequireDefault(_examplesIcons);
	
	var _examplesImages = __webpack_require__(83);
	
	var _examplesImages2 = _interopRequireDefault(_examplesImages);
	
	var _examplesJumbotron = __webpack_require__(87);
	
	var _examplesJumbotron2 = _interopRequireDefault(_examplesJumbotron);
	
	var _examplesLabels = __webpack_require__(91);
	
	var _examplesLabels2 = _interopRequireDefault(_examplesLabels);
	
	var _examplesListGroup = __webpack_require__(95);
	
	var _examplesListGroup2 = _interopRequireDefault(_examplesListGroup);
	
	var _examplesMedia = __webpack_require__(107);
	
	var _examplesMedia2 = _interopRequireDefault(_examplesMedia);
	
	var _examplesModal = __webpack_require__(111);
	
	var _examplesModal2 = _interopRequireDefault(_examplesModal);
	
	var _examplesNav = __webpack_require__(115);
	
	var _examplesNav2 = _interopRequireDefault(_examplesNav);
	
	var _examplesNavbar = __webpack_require__(119);
	
	var _examplesNavbar2 = _interopRequireDefault(_examplesNavbar);
	
	var _examplesPager = __webpack_require__(123);
	
	var _examplesPager2 = _interopRequireDefault(_examplesPager);
	
	var _examplesPagination = __webpack_require__(127);
	
	var _examplesPagination2 = _interopRequireDefault(_examplesPagination);
	
	var _examplesPopover = __webpack_require__(99);
	
	var _examplesPopover2 = _interopRequireDefault(_examplesPopover);
	
	// import progressDemo from './examples/progress'
	// import tablesDemo from './examples/tables'
	// import tabsDemo from './examples/tabs'
	
	var _examplesTooltip = __webpack_require__(103);
	
	var _examplesTooltip2 = _interopRequireDefault(_examplesTooltip);
	
	// demo each component in index.html
	Vue.config.debug = true;
	new Vue({
	  el: '#app',
	  data: {},
	  components: {
	    'example': _componentsExample2['default'],
	    'accordion-demo': _examplesAccordion2['default'],
	    'alert-demo': _examplesAlert2['default'],
	    'breadcrumb-demo': _examplesBreadcrumb2['default'],
	    'buttons-demo': _examplesButtons2['default'],
	    'button-group-demo': _examplesButtonGroup2['default'],
	    'button-checkbox-demo': _examplesButtonCheckbox2['default'],
	    'button-radio-demo': _examplesButtonRadio2['default'],
	    'card-demo': _examplesCard2['default'],
	    'carousel-demo': _examplesCarousel2['default'],
	    'collapse-demo': _examplesCollapse2['default'],
	    'dropdown-demo': _examplesDropdown2['default'],
	    'dropdown-select-demo': _examplesDropdownSelect2['default'],
	    'form-chekbox-demo': _examplesFormCheckbox2['default'],
	    'form-input-demo': _examplesFormInput2['default'],
	    'form-select-demo': _examplesFormSelect2['default'],
	    'form-textarea-demo': _examplesFormTextarea2['default'],
	    'form-radio-demo': _examplesFormRadio2['default'],
	    'icons-demo': _examplesIcons2['default'],
	    'images-demo': _examplesImages2['default'],
	    'jumbotron-demo': _examplesJumbotron2['default'],
	    'labels-demo': _examplesLabels2['default'],
	    'list-group-demo': _examplesListGroup2['default'],
	    'media-demo': _examplesMedia2['default'],
	    'modal-demo': _examplesModal2['default'],
	    'nav-demo': _examplesNav2['default'],
	    'navbar-demo': _examplesNavbar2['default'],
	    'pager-demo': _examplesPager2['default'],
	    'pagination-demo': _examplesPagination2['default'],
	    'popover-demo': _examplesPopover2['default'],
	    // 'progress-demo': progressDemo,
	    // 'tables-demo': tablesDemo,
	    // 'tabs-demo': tabsDemo,
	    'tooltip-demo': _examplesTooltip2['default']
	  },
	  methods: {
	    closeDropdownsAndPopovers: function closeDropdownsAndPopovers() {
	      this.$broadcast('close::popover');
	      this.$broadcast('close::dropdown');
	    }
	  },
	  ready: function ready() {
	
	    // we need to reposition tether elements as soon as document is ready
	    // this workaround is for the situations where popovers are somewhere
	    // in the middle of the page and user refreshes the browser
	    // setTimeout(() => {
	    //   Tether.position()
	    // },500)
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(2);
	
	var _exampleHtml = __webpack_require__(6);
	
	var _exampleHtml2 = _interopRequireDefault(_exampleHtml);
	
	// export component object
	exports['default'] = {
	    template: _exampleHtml2['default'],
	    replace: true,
	    props: {
	        meta: {
	            type: Object,
	            'default': {},
	            required: true
	        },
	        snippet: {
	            type: String,
	            'default': '',
	            required: true
	        }
	    },
	    components: {
	        'badge': vuestrap.labels,
	        'alert': vuestrap.alert,
	        'icon': vuestrap.icons
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	module.exports = "<section class=\"example\" id=\"{{meta.name}}\">\r\n\r\n\t<!-- Meta title -->\r\n\t<h2>{{meta.name}}</h2>\r\n\t<p v-html=\"meta.description\"></p>\r\n\r\n\t<div class=\"m-b\"></div>\r\n\r\n\t<alert :show=\"true\" state=\"info\" v-if=\"meta.note\">\r\n\t\t<icon background=\"circle-outline\" size=\"sm\" variant=\"info\" text=\"i\"></icon> <span v-html=\"meta.note\"></span>\r\n\t</alert>\r\n\r\n\t<div class=\"m-b-md\"></div>\r\n\r\n\t<!-- Component manipulators -->\r\n\t<slot name=\"controls\"></slot>\r\n\r\n\t<!-- Output & Code sample -->\r\n\t<div class=\"code-example\">\r\n\r\n\t\t<slot class=\"markup\" name=\"markup\"></slot>\r\n\r\n\t\t<div class=\"highlight\">\r\n\t\t\t<code class=\"lang-html\" v-html=\"snippet\">\r\n\t\t\t</code>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- Options -->\r\n\t<div class=\"options\" v-if=\"meta.options.length\">\r\n\t\t<h3>Options</h3>\r\n\t\t<table class='table table-responsive'>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>Name</th>\r\n\t\t\t\t<th>Type</th>\r\n\t\t\t\t<th>Default</th>\r\n\t\t\t\t<th>Required</th>\r\n\t\t\t\t<th>Description</th>\r\n\t\t\t</tr>\r\n\t\t\t<tr v-for=\"item in meta.options\">\r\n\t\t\t\t<td>{{item.name}}</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<code>{{item.type}}</code>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td><code>{{item.default}}</code></td>\r\n\t\t\t\t<td>{{item.required == true ? 'yes' : ''}}</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<p v-html=\"item.description\"></p>\r\n\t\t\t\t\t<p v-if=\"item.values\">\r\n\t\t\t\t\t\tPosible values:\r\n\t\t\t\t\t\t<code v-for=\"item in item.values\">{{item}}</code>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t</table>\t\r\n\t</div>\r\n\r\n\t<!-- Browser Support -->\r\n\t<h3>Browser Support</h3>\r\n\t<badge v-for=\"item in meta.browserSupport\">{{ item }}</badge>\r\n</section>\r\n";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(8);
	
	var _srcComponentsAlertComponentJson = __webpack_require__(10);
	
	var _srcComponentsAlertComponentJson2 = _interopRequireDefault(_srcComponentsAlertComponentJson);
	
	var _templateHtml = __webpack_require__(11);
	
	var _templateHtml2 = _interopRequireDefault(_templateHtml);
	
	var _snippetHtml = __webpack_require__(12);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	exports['default'] = {
	  template: _templateHtml2['default'],
	  components: {
	    'alert': vuestrap.alert,
	    'example': _componentsExample2['default']
	  },
	  data: function data() {
	    return {
	      meta: _srcComponentsAlertComponentJson2['default'],
	      snippet: _snippetHtml2['default'].replace(/</g, '&lt;'),
	      show: true,
	      dismissible: true,
	      message: '<strong>Note</strong> This is an html message',
	      state: 'success',
	      states: [{ text: 'default', value: 'default' }, { text: 'success', value: 'success' }, { text: 'danger', value: 'danger' }, { text: 'warning', value: 'warning' }, { text: 'info', value: 'info' }]
	    };
	  },
	  ready: function ready() {
	    var elements = document.querySelectorAll('.lang-html');
	    for (var i = 0; i < elements.length; i++) {
	      hljs.highlightBlock(elements[i]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */,
/* 10 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Alert",
		"description": "Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": [
			{
				"name": "show",
				"type": "Boolean",
				"default": false,
				"required": true,
				"description": "Show/hides the alert."
			},
			{
				"name": "state",
				"type": "String",
				"values": [
					"success",
					"info",
					"warning",
					"danger"
				],
				"default": "success",
				"description": "Type of the alert."
			},
			{
				"name": "dismissible",
				"type": "Boolean",
				"default": false,
				"description": "Show/hide close button."
			}
		]
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<example :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>show <input type=\"checkbox\" v-model=\"show\"></label>\r\n\t\t<label>dismissible <input type=\"checkbox\" v-model=\"dismissible\"></label>\r\n\t\t<label>state\r\n\t\t\t<select v-model=\"state\">\r\n\t\t\t\t<option v-for=\"option in states\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\t\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t<alert\r\n\t\t    :show.sync=\"show\"\r\n\t\t    :state=\"state\"\r\n\t\t    :message=\"message\"\r\n\t\t    :dismissible=\"dismissible\">\r\n\t\t</alert>\r\n\t\t<template v-if=\"!show\">\r\n\t\t\t<button href='#' v-on:click=\"show = true\">Show alert again</button>\r\n\t\t</template>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</example>\t\r\n";

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<alert \r\n  :show=\"true\"\r\n  state=\"succes\"\r\n  message=\"<strong>Note</strong> This is an html message\"\r\n  :dismissible=\"true\">\r\n</alert>";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcComponentsCollapseAccordionJson = __webpack_require__(14);
	
	var _srcComponentsCollapseAccordionJson2 = _interopRequireDefault(_srcComponentsCollapseAccordionJson);
	
	var _templateHtml = __webpack_require__(15);
	
	var _templateHtml2 = _interopRequireDefault(_templateHtml);
	
	var _snippetHtml = __webpack_require__(16);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	exports['default'] = {
	  template: _templateHtml2['default'],
	  components: {
	    'collapse': vuestrap.collapse,
	    'collapseToggle': vuestrap.collapseToggle,
	    'example': _componentsExample2['default']
	  },
	  data: function data() {
	    return {
	      meta: _srcComponentsCollapseAccordionJson2['default'],
	      snippet: _snippetHtml2['default'].replace(/</g, '&lt;')
	    };
	  },
	  ready: function ready() {
	    var elements = document.querySelectorAll('.lang-html');
	    for (var i = 0; i < elements.length; i++) {
	      hljs.highlightBlock(elements[i]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Accordion",
		"description": "Extend the default collapse behavior to create an accordion. It requires both <code>id</code> and <code>group</code> for this to work.",
		"dependencies": [
			"vuestrap/collapse",
			"vuestrap/collapseToggle"
		],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": [
			{
				"name": "id",
				"type": "String",
				"default": "",
				"required": true,
				"description": "You need to provide <code>id</code> for both <code>&lt;collapse></code> and <code>&lt;collapse-toggle></code> elements, so accordion knows which element to open."
			},
			{
				"name": "group",
				"type": "String",
				"default": "",
				"required": true,
				"description": "You need to provide <code>group</code> for both <code>&lt;collapse></code> and <code>&lt;collapse-toggle></code> elements, so accordion knows which elements to hide in the same group."
			}
		]
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<example :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t<collapse-toggle id=\"item-1\" group=\"accordion-1\">\r\n\t\t\t<div><a href=\"#\">Collapsible Group Item #1</a></div>\r\n\t\t<collapse-toggle>\r\n\t\t<collapse id=\"item-1\" group=\"accordion-1\">\r\n\t\t\t<div class=\"card card-block\">\r\n\t\t\t\t<h5>First</h5>\r\n\t\t    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n\t\t  </div>\r\n\t\t</collapse>\r\n\t\t<collapse-toggle id=\"item-2\" group=\"accordion-1\">\r\n\t\t\t<div><a href=\"#\">Collapsible Group Item #2</a></div>\r\n\t\t<collapse-toggle>\r\n\t\t<collapse id=\"item-2\" group=\"accordion-1\">\r\n\t\t\t<div class=\"card card-block\">\r\n\t\t\t\t<h5>Second</h5>\r\n\t\t    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n\t\t  </div>\r\n\t\t</collapse>\r\n\t\t<collapse-toggle id=\"item-3\" group=\"accordion-1\">\r\n\t\t\t<div><a href=\"#\">Collapsible Group Item #3</a></div>\r\n\t\t<collapse-toggle>\r\n\t\t<collapse id=\"item-3\" group=\"accordion-1\">\r\n\t\t\t<div class=\"card card-block\">\r\n\t\t\t\t<h5>Third</h5>\r\n\t\t    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n\t\t  </div>\r\n\t\t</collapse>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</example>\t\r\n";

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<!-- item 1 -->\r\n<collapse-toggle id=\"item-1\" group=\"accordion-1\">\r\n  <div><a href=\"#\">Collapsible Group Item #1</a></div>\r\n<collapse-toggle>\r\n<collapse id=\"item-1\" group=\"accordion-1\">\r\n  <div class=\"card card-block\">\r\n    <h5>First</h5>\r\n    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n  </div>\r\n</collapse>\r\n\r\n<!-- item 2 -->\r\n<collapse-toggle id=\"item-2\" group=\"accordion-1\">\r\n  <div><a href=\"#\">Collapsible Group Item #2</a></div>\r\n<collapse-toggle>\r\n<collapse id=\"item-2\" group=\"accordion-1\">\r\n  <div class=\"card card-block\">\r\n    <h5>Second</h5>\r\n    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n  </div>\r\n</collapse>\r\n\r\n<!-- item 3-->\r\n<collapse-toggle id=\"item-3\" group=\"accordion-1\">\r\n  <div><a href=\"#\">Collapsible Group Item #3</a></div>\r\n<collapse-toggle>\r\n<collapse id=\"item-3\" group=\"accordion-1\">\r\n  <div class=\"card card-block\">\r\n    <h5>Third</h5>\r\n    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n  </div>\r\n</collapse>";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcComponentsBreadcrumbComponentJson = __webpack_require__(18);
	
	var _srcComponentsBreadcrumbComponentJson2 = _interopRequireDefault(_srcComponentsBreadcrumbComponentJson);
	
	var _templateHtml = __webpack_require__(19);
	
	var _templateHtml2 = _interopRequireDefault(_templateHtml);
	
	var _snippetHtml = __webpack_require__(20);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	exports['default'] = {
	  template: _templateHtml2['default'],
	  components: {
	    'breadcrumb': vuestrap.breadcrumb,
	    'example': _componentsExample2['default']
	  },
	  data: function data() {
	    return {
	      meta: _srcComponentsBreadcrumbComponentJson2['default'],
	      snippet: _snippetHtml2['default'].replace(/</g, '&lt;'),
	      list: [{ text: 'Home', href: '#' }, { text: 'Library', active: true }]
	    };
	  },
	  ready: function ready() {
	    var elements = document.querySelectorAll('.lang-html');
	    for (var i = 0; i < elements.length; i++) {
	      hljs.highlightBlock(elements[i]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Breadcrumb",
		"description": "Indicate the current page’s location within a navigational hierarchy.",
		"dependencies": [],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": [
			{
				"name": "list",
				"type": "Array",
				"default": "[]",
				"required": true,
				"description": "A list of links."
			}
		]
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "<example :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t\t<breadcrumb\r\n    \t\t:list=\"list\">\r\n\t\t\t</breadcrumb>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\t\r\n</example>\t\r\n";

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<breadcrumb\r\n  :list=\"[{text: 'Home', href: '#'}, {text: 'Library', active: true}]\">\r\n</breadcrumb>\r\n";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcComponentsButtonsComponentJson = __webpack_require__(22);
	
	var _srcComponentsButtonsComponentJson2 = _interopRequireDefault(_srcComponentsButtonsComponentJson);
	
	var _templateHtml = __webpack_require__(23);
	
	var _templateHtml2 = _interopRequireDefault(_templateHtml);
	
	var _snippetHtml = __webpack_require__(24);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	exports['default'] = {
	  template: _templateHtml2['default'],
	  components: {
	    'btn': vuestrap.buttons,
	    'example': _componentsExample2['default']
	  },
	  data: function data() {
	    return {
	      meta: _srcComponentsButtonsComponentJson2['default'],
	      snippet: _snippetHtml2['default'].replace(/</g, '&lt;'),
	      size: 'md',
	      sizes: demo.sizes,
	      variant: 'primary',
	      variants: demo.variants
	    };
	  },
	  ready: function ready() {
	    var elements = document.querySelectorAll('.lang-html');
	    for (var i = 0; i < elements.length; i++) {
	      hljs.highlightBlock(elements[i]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = {
		"name": "buttons",
		"description": "Use Bootstrap’s custom button styles for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": [
			{
				"name": "block",
				"type": "Boolean",
				"default": false,
				"description": "Button spans over full width of a parent."
			},
			{
				"name": "disabled",
				"type": "Boolean",
				"default": false,
				"description": "Make buttons look inactive by adding the disabled boolean attribute to any <code>&lt;button></code> element."
			},
			{
				"name": "href",
				"type": "String",
				"default": "",
				"description": "If <code>href</code> is provided, button is a regular <code>&lt;a></code> link with button spacing."
			},
			{
				"name": "role",
				"type": "String",
				"default": "",
				"description": "if <code>&lt;a></code> elements are used to trigger in-page functionality (like collapsing content), than these links should be given a <code>role='button'</code>"
			},
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"default": "md",
				"description": "Size of the button."
			},
			{
				"name": "type",
				"type": "String",
				"values": [
					"button",
					"submit"
				],
				"default": "button",
				"description": "Button type."
			},
			{
				"name": "variant",
				"type": "String",
				"values": [
					"secondary",
					"primary",
					"success",
					"info",
					"warning",
					"danger",
					"link",
					"secondary-outline",
					"primary-outline",
					"success-outline",
					"info-outline",
					"warning-outline",
					"danger-outline"
				],
				"default": "success",
				"description": "Button color context."
			}
		]
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<example :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>\r\n\t\t\tsize \r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t\t<btn :size=\"size\" variant=\"primary\">Primary</btn>\r\n\t\t\t<btn :size=\"size\" variant=\"secondary\">Secondary</btn>\r\n\t\t\t<btn :size=\"size\" variant=\"success\">Success</btn>\r\n\t\t\t<btn :size=\"size\" variant=\"warning\">Warning</btn>\r\n\t\t\t<btn :size=\"size\" variant=\"danger\">Danger</btn>\r\n\t\t\t<hr>\r\n\t\t\t<btn :size=\"size\" variant=\"primary-outline\">Primary</btn>\r\n\t\t\t<btn :size=\"size\" variant=\"secondary-outline\">Secondary</btn>\r\n\t\t\t<btn :size=\"size\" variant=\"success-outline\">Success</btn>\r\n\t\t\t<btn :size=\"size\" variant=\"warning-outline\">Warning</btn>\r\n\t\t\t<btn :size=\"size\" variant=\"danger-outline\">Danger</btn>\r\n\t\t\t<hr>\r\n\t\t\t<btn :size=\"size\" variant=\"link\">Button Link</btn>\r\n\t\t\t<btn :size=\"size\" variant=\"link\" href=\"#\">Regular Link</btn>\r\n\t\t\t<btn :size=\"size\" variant=\"primary\" type=\"submit\">Submit</btn>\r\n\t\t\t<btn :size=\"size\" variant=\"primary\" :disabled=\"true\">Disabled</btn>\r\n\t\t\t<hr>\r\n\t\t\t<btn :size=\"size\" variant=\"primary\" :block=\"true\">Block</btn>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</example>\t\r\n";

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<!-- colour variants -->\r\n<btn size=\"md\" variant=\"primary\">Primary</btn>\r\n<btn size=\"md\" variant=\"secondary\">Secondary</btn>\r\n<btn size=\"md\" variant=\"success\">Success</btn>\r\n<btn size=\"md\" variant=\"warning\">Warning</btn>\r\n<btn size=\"md\" variant=\"danger\">Danger</btn>\r\n\r\n<!-- outlined variants -->\r\n<btn size=\"md\" variant=\"primary-outline\">Primary</btn>\r\n<btn size=\"md\" variant=\"secondary-outline\">Secondary</btn>\r\n<btn size=\"md\" variant=\"success-outline\">Success</btn>\r\n<btn size=\"md\" variant=\"warning-outline\">Warning</btn>\r\n<btn size=\"md\" variant=\"danger-outline\">Danger</btn>\r\n\r\n<!-- button types -->\r\n<btn size=\"md\" variant=\"link\">Button Link</btn>\r\n<btn size=\"md\" variant=\"link\" href=\"#\">Regular Link</btn>\r\n<btn size=\"md\" variant=\"primary\" type=\"submit\">Submit</btn>\r\n<btn size=\"md\" variant=\"primary\" :disabled=\"true\">Disabled</btn>\r\n<btn size=\"md\" variant=\"primary\" :block=\"true\">Block</btn>";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcComponentsButtonGroupComponentJson = __webpack_require__(26);
	
	var _srcComponentsButtonGroupComponentJson2 = _interopRequireDefault(_srcComponentsButtonGroupComponentJson);
	
	var _templateHtml = __webpack_require__(27);
	
	var _templateHtml2 = _interopRequireDefault(_templateHtml);
	
	var _snippetHtml = __webpack_require__(28);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	exports['default'] = {
	  template: _templateHtml2['default'],
	  components: {
	    'button-group': vuestrap.buttonGroup,
	    'example': _componentsExample2['default']
	  },
	  data: function data() {
	    return {
	      meta: _srcComponentsButtonGroupComponentJson2['default'],
	      snippet: _snippetHtml2['default'].replace(/</g, '&lt;'),
	      vertical: false
	    };
	  },
	  ready: function ready() {
	    var elements = document.querySelectorAll('.lang-html');
	    for (var i = 0; i < elements.length; i++) {
	      hljs.highlightBlock(elements[i]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Button Group",
		"description": "Group a series of buttons together on a single line with the button group.",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": [
			{
				"name": "vertical",
				"type": "Boolean",
				"default": false,
				"required": false,
				"description": "Stacks buttons in vertical position."
			}
		]
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<example :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>vertical <input type=\"checkbox\" v-model=\"vertical\"></label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t\t<button-group :vertical=\"vertical\">\r\n\t\t\t  <button type=\"button\" class=\"btn btn-secondary\">Left</button>\r\n\t\t\t  <button type=\"button\" class=\"btn btn-secondary active\">Middle</button>\r\n\t\t\t  <button type=\"button\" class=\"btn btn-secondary\">Right</button>\r\n\t\t\t</button-group>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n</example>\t\r\n";

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<button-group :vertical=\"false\">\r\n  <button type=\"button\" class=\"btn btn-secondary\">Left</button>\r\n  <button type=\"button\" class=\"btn btn-secondary\">Middle</button>\r\n  <button type=\"button\" class=\"btn btn-secondary\">Right</button>\r\n</button-group>\r\n";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcComponentsButtonCheckboxComponentJson = __webpack_require__(30);
	
	var _srcComponentsButtonCheckboxComponentJson2 = _interopRequireDefault(_srcComponentsButtonCheckboxComponentJson);
	
	var _templateHtml = __webpack_require__(31);
	
	var _templateHtml2 = _interopRequireDefault(_templateHtml);
	
	var _snippetHtml = __webpack_require__(32);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	exports['default'] = {
	  template: _templateHtml2['default'],
	  components: {
	    'button-checkbox': vuestrap.buttonCheckbox,
	    'example': _componentsExample2['default']
	  },
	  data: function data() {
	    return {
	      meta: _srcComponentsButtonCheckboxComponentJson2['default'],
	      snippet: _snippetHtml2['default'].replace(/</g, '&lt;'),
	      list: [{
	        text: 'First',
	        checked: false
	      }, {
	        text: 'Second',
	        checked: true
	      }, {
	        text: 'Third',
	        checked: false
	      }],
	      size: 'md',
	      sizes: demo.sizes,
	      variant: 'primary',
	      variants: demo.variants
	    };
	  },
	  ready: function ready() {
	    var elements = document.querySelectorAll('.lang-html');
	    for (var i = 0; i < elements.length; i++) {
	      hljs.highlightBlock(elements[i]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Button Checkbox",
		"description": "Allows to elect one or more items in the nested group of buttons.",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": [
			{
				"name": "list",
				"type": "Array",
				"default": "[]",
				"required": true,
				"description": "A list of checkbox items."
			},
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"default": "md",
				"description": "Size of the button."
			},
			{
				"name": "variant",
				"type": "String",
				"values": [
					"secondary",
					"primary",
					"success",
					"info",
					"warning",
					"danger",
					"link"
				],
				"default": "success",
				"description": "Button color context."
			}
		]
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "<example :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>\r\n\t\t\tsize \r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\tvariant \r\n\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t\t<button-checkbox\r\n\t\t\t  :list.sync=\"list\"\r\n\t\t\t  :size=\"size\"\r\n\t\t\t  :variant=\"variant\">\r\n\t\t\t</button-checkbox>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</example>\t\r\n";

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "<button-checkbox\r\n  :list.sync=\" [{\r\n      text: 'First',\r\n      checked: false,\r\n    }, {\r\n      text: 'Second',\r\n      checked: true,\r\n    }, {\r\n      text: 'Third',\r\n      checked: false,\r\n  }]\"\r\n  size=\"md\"\r\n  variant=\"primary\">\r\n</button-checkbox>";

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcComponentsButtonRadioComponentJson = __webpack_require__(34);
	
	var _srcComponentsButtonRadioComponentJson2 = _interopRequireDefault(_srcComponentsButtonRadioComponentJson);
	
	var _templateHtml = __webpack_require__(35);
	
	var _templateHtml2 = _interopRequireDefault(_templateHtml);
	
	var _snippetHtml = __webpack_require__(36);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	exports['default'] = {
	  template: _templateHtml2['default'],
	  components: {
	    'button-radio': vuestrap.buttonRadio,
	    'example': _componentsExample2['default']
	  },
	  data: function data() {
	    return {
	      meta: _srcComponentsButtonRadioComponentJson2['default'],
	      snippet: _snippetHtml2['default'].replace(/</g, '&lt;'),
	      model: 'second',
	      list: [{
	        text: 'First',
	        value: 'first'
	      }, {
	        text: 'Second',
	        value: 'second'
	      }, {
	        text: 'Third',
	        value: 'third'
	      }],
	      size: 'md',
	      sizes: demo.sizes,
	      variant: 'primary',
	      variants: demo.variants
	    };
	  },
	  ready: function ready() {
	    var elements = document.querySelectorAll('.lang-html');
	    for (var i = 0; i < elements.length; i++) {
	      hljs.highlightBlock(elements[i]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Button Radio",
		"description": "Alllows to select only one item out of a group of buttons.",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": [
			{
				"name": "model",
				"type": "String",
				"default": "''",
				"required": true,
				"description": "A result of the selection. Two way binding."
			},
			{
				"name": "list",
				"type": "Array",
				"default": "[]",
				"required": true,
				"description": "A list of checkbox items."
			},
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"default": "md",
				"description": "Size of the button."
			},
			{
				"name": "variant",
				"type": "String",
				"values": [
					"secondary",
					"primary",
					"success",
					"info",
					"warning",
					"danger",
					"link"
				],
				"default": "success",
				"description": "Button color context."
			}
		]
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "<example :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t\t<label>\r\n\t\t\t\tsize\r\n\t\t\t\t<select v-model=\"size\">\r\n\t\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t\t    {{ option.text }}\r\n\t\t\t\t  </option>\r\n\t\t\t\t</select>\r\n\t\t\t</label>\r\n\r\n\t\t\t<label>\r\n\t\t\t\tvariant\r\n\t\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t\t    {{ option.text }}\r\n\t\t\t\t  </option>\r\n\t\t\t\t</select>\r\n\t\t\t</label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t<button-radio\r\n\t\t\t:model.sync=\"model\"\r\n\t    :list=\"list\"\r\n\t    :size=\"size\"\r\n\t    :variant=\"variant\">\r\n\t\t</button-radio>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\t\r\n</example>\t\r\n";

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "<button-radio\r\n  :model.sync=\"model\"\r\n  :list=\"[{\r\n      text: 'First',\r\n      value: 'first',\r\n    }, {\r\n      text: 'Second',\r\n      value: 'second',\r\n    }, {\r\n      text: 'Third',\r\n      value: 'third',\r\n    }]\"\r\n  size=\"md\"\r\n  variant=\"primary\">\r\n</button-radio>";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcComponentsCardComponentJson = __webpack_require__(38);
	
	var _srcComponentsCardComponentJson2 = _interopRequireDefault(_srcComponentsCardComponentJson);
	
	var _templateHtml = __webpack_require__(39);
	
	var _templateHtml2 = _interopRequireDefault(_templateHtml);
	
	var _snippetHtml = __webpack_require__(40);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	exports['default'] = {
	  template: _templateHtml2['default'],
	  components: {
	    'card': vuestrap.card,
	    'example': _componentsExample2['default']
	  },
	  data: function data() {
	    return {
	      meta: _srcComponentsCardComponentJson2['default'],
	      snippet: _snippetHtml2['default'].replace(/</g, '&lt;'),
	      type: 'default',
	      types: [{ text: 'default', value: 'default' }, { text: 'inverse', value: 'inverse' }, { text: 'image-overlay', value: 'image-overlay' }],
	      variant: 'default',
	      variants: demo.variants,
	      align: 'left',
	      aligns: [{ text: 'left', value: 'left' }, { text: 'center', value: 'center' }, { text: 'right', value: 'right' }]
	    };
	  },
	  ready: function ready() {
	    var elements = document.querySelectorAll('.lang-html');
	    for (var i = 0; i < elements.length; i++) {
	      hljs.highlightBlock(elements[i]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Card",
		"description": "A card is a flexible and extensible content container.",
		"dependencies": [
			"vuestrap/buttons",
			"vuestrap/images",
			"vuestrap/list-group"
		],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": [
			{
				"name": "align",
				"type": "String",
				"values": [
					"left",
					"right",
					"center"
				],
				"default": "'left'",
				"required": false,
				"description": "Position text inside the box."
			},
			{
				"name": "type",
				"type": "String",
				"values": [
					"image-overlay",
					"inverse"
				],
				"default": "''",
				"required": false,
				"description": "When inverse is set it will change font text in div content block to bright. If 'image-overlay' is set,  it will also set the position aboslute of the block to overlay image."
			},
			{
				"name": "variant",
				"type": "String",
				"values": [
					"primary",
					"success",
					"info",
					"warning",
					"danger"
				],
				"default": "success",
				"description": "Button color context."
			}
		]
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "<example :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>\r\n\t\t\tvariant\r\n\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\r\n\t\t<label>\r\n\t\t\ttype\r\n\t\t\t<select v-model=\"type\">\r\n\t\t\t\t<option v-for=\"option in types\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\r\n\t\t<label>\r\n\t\t\talign\r\n\t\t\t<select v-model=\"align\">\r\n\t\t\t\t<option v-for=\"option in aligns\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t\t<card style=\"max-width: 350px;\" \r\n\t\t\t\t:variant=\"variant\"\r\n\t\t\t\t:type=\"type\"\r\n\t\t\t\t:align=\"align\">\r\n\t\t\t\t<img class=\"card-img img-responsive\" src=\"https://placehold.it/350x150\" alt=\"Card image cap\">\r\n\t\t\t  <div class=\"card-block\">\r\n\t\t\t    <h4 class=\"card-title\">Card title</h4>\r\n\t\t\t    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n\t\t\t  </div>\r\n\t\t  </card>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</example>\t\r\n";

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "<card variant=\"default\" type=\"default\" align=\"left\">\r\n  <img class=\"card-img img-responsive\" src=\"https://placehold.it/350x150\" alt=\"Card image cap\">\r\n  <div class=\"card-block\">\r\n    <h4 class=\"card-title\">Card title</h4>\r\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n    <a href=\"#\" class=\"btn btn-primary\">Button</a>\r\n  </div>\r\n</card>";

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcComponentsCarouselComponentJson = __webpack_require__(42);
	
	var _srcComponentsCarouselComponentJson2 = _interopRequireDefault(_srcComponentsCarouselComponentJson);
	
	var _templateHtml = __webpack_require__(43);
	
	var _templateHtml2 = _interopRequireDefault(_templateHtml);
	
	var _snippetHtml = __webpack_require__(44);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	exports['default'] = {
	  template: _templateHtml2['default'],
	  components: {
	    'carousel': vuestrap.carousel,
	    'slide': vuestrap.slide,
	    'example': _componentsExample2['default']
	  },
	  data: function data() {
	    return {
	      meta: _srcComponentsCarouselComponentJson2['default'],
	      snippet: _snippetHtml2['default'].replace(/</g, '&lt;'),
	      controls: true,
	      indicators: true
	    };
	  },
	  ready: function ready() {
	    var elements = document.querySelectorAll('.lang-html');
	    for (var i = 0; i < elements.length; i++) {
	      hljs.highlightBlock(elements[i]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Carousel",
		"description": "",
		"dependencies": [
			"vuestrap/{dependency}"
		],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": [
			{
				"name": "interval",
				"type": "Number",
				"default": "5000",
				"required": "false",
				"description": "Slides will be auto rotated every 5000ms (5s). To stop auto-rotation set interval to 0."
			},
			{
				"name": "indicators",
				"type": "Boolean",
				"default": true,
				"required": "false",
				"description": "Show/hide indicators."
			},
			{
				"name": "controls",
				"type": "Boolean",
				"default": true,
				"required": "false",
				"description": "Show/hide controls."
			}
		]
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "<example :meta=\"meta\" :snippet=\"snippet\">\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>controls <input type=\"checkbox\" v-model=\"controls\"></label>\r\n\t\t<label>indicators <input type=\"checkbox\" v-model=\"indicators\"></label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<carousel\r\n\t\t\t\t:interval=\"5000\",\r\n\t\t\t\t:controls=\"controls\"\r\n\t\t\t\t:indicators=\"indicators\">\r\n\t\t\t  <slide>\r\n\t\t\t    <img src=\"http://placehold.it/1200x400?text=one\">\r\n\t\t\t  </slide>\r\n\t\t\t  <slide>\r\n\t\t\t    <img src=\"http://placehold.it/1200x400?text=two\">\r\n\t\t\t  </slide>\r\n\t\t\t  <slide>\r\n\t\t\t    <img src=\"http://placehold.it/1200x400?text=three\">\r\n\t\t\t  </slide>\r\n\t\t\t</carousel>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</example>\t\r\n";

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "<carousel :interval=\"5000\" :controls=\"true\" :indicators=\"true\">\r\n  <slide>\r\n    <img src=\"http://placehold.it/1200x400?text=one\">\r\n  </slide>\r\n  <slide>\r\n    <img src=\"http://placehold.it/1200x400?text=two\">\r\n  </slide>\r\n  <slide>\r\n    <img src=\"http://placehold.it/1200x400?text=three\">\r\n  </slide>\r\n</carousel>";

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcComponentsCollapseCollapseJson = __webpack_require__(46);
	
	var _srcComponentsCollapseCollapseJson2 = _interopRequireDefault(_srcComponentsCollapseCollapseJson);
	
	var _templateHtml = __webpack_require__(47);
	
	var _templateHtml2 = _interopRequireDefault(_templateHtml);
	
	var _snippetHtml = __webpack_require__(48);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	exports['default'] = {
	  template: _templateHtml2['default'],
	  components: {
	    'collapse': vuestrap.collapse,
	    'collapseToggle': vuestrap.collapseToggle,
	    'example': _componentsExample2['default']
	  },
	  data: function data() {
	    return {
	      meta: _srcComponentsCollapseCollapseJson2['default'],
	      snippet: _snippetHtml2['default'].replace(/</g, '&lt;')
	    };
	  },
	  ready: function ready() {
	    var elements = document.querySelectorAll('.lang-html');
	    for (var i = 0; i < elements.length; i++) {
	      hljs.highlightBlock(elements[i]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Collapse",
		"description": "Click the buttons below to show and hide another element. It requires either <code>id</code> or <code>group</code> (but not both) for this to work.",
		"dependencies": [
			"vuestrap/collapseToggle"
		],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": [
			{
				"name": "id",
				"type": "String",
				"default": "",
				"required": "false",
				"description": "With <code>id</code> you can control individual collapse elements. Use same unique <code>id</code> for both <code>&lt;collapse></code> and <code>&lt;collapse-toggle></code> elements."
			},
			{
				"name": "group",
				"type": "String",
				"default": "",
				"required": "false",
				"description": "With <code>group</code> you can control a number of collapse elements. Use same unique <code>group</code> for all <code>&lt;collapse></code> and <code>&lt;collapse-toggle></code> elements."
			}
		]
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = "<example :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t<collapse-toggle id=\"collapse-1\">\r\n\t\t\t<button class=\"btn btn-default\">Toogle first</button>\r\n\t\t<collapse-toggle>\r\n\t\t<collapse-toggle id=\"collapse-2\">\r\n\t\t\t<button class=\"btn btn-default\">Toogle second</button>\r\n\t\t<collapse-toggle>\r\n\t\t<collapse-toggle group=\"group-1\">\r\n\t\t\t<button class=\"btn btn-default\">Toogle all</button>\r\n\t\t<collapse-toggle>\r\n\t\t\r\n\t\t<div class=\"m-b\"></div>\r\n\r\n\t\t<collapse id=\"collapse-1\" group=\"group-1\">\r\n\t\t\t<div class=\"card card-block\">\r\n\t\t\t\t<h5>First</h5>\r\n\t\t    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n\t\t  </div>\r\n\t\t</collapse>\r\n\t\t<collapse id=\"collapse-2\" group=\"group-1\">\r\n\t\t\t<div class=\"card card-block\">\r\n\t\t\t\t<h5>Second</h5>\r\n\t\t    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n\t\t  </div>\r\n\t\t</collapse>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</example>\t\r\n";

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "<!-- triggers -->\r\n<collapse-toggle id=\"collapse-1\">\r\n  <button class=\"btn btn-default\">Toogle first</button>\r\n<collapse-toggle>\r\n<collapse-toggle id=\"collapse-2\">\r\n  <button class=\"btn btn-default\">Toogle second</button>\r\n<collapse-toggle>\r\n<collapse-toggle group=\"group-1\">\r\n  <button class=\"btn btn-default\">Toogle all</button>\r\n<collapse-toggle>\r\n\r\n<!-- item 1 -->\r\n<collapse id=\"collapse-1\" group=\"group-1\">\r\n  <div class=\"card card-block\">\r\n    <h5>First</h5>\r\n    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n  </div>\r\n</collapse>\r\n\r\n<!-- item 2 -->\r\n<collapse id=\"collapse-2\" group=\"group-1\">\r\n  <div class=\"card card-block\">\r\n    <h5>Second</h5>\r\n    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n  </div>\r\n</collapse>";

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcComponentsDropdownComponentJson = __webpack_require__(50);
	
	var _srcComponentsDropdownComponentJson2 = _interopRequireDefault(_srcComponentsDropdownComponentJson);
	
	var _templateHtml = __webpack_require__(51);
	
	var _templateHtml2 = _interopRequireDefault(_templateHtml);
	
	var _snippetHtml = __webpack_require__(52);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	exports['default'] = {
	  template: _templateHtml2['default'],
	  components: {
	    'dropdown': vuestrap.dropdown,
	    'example': _componentsExample2['default']
	  },
	  data: function data() {
	    return {
	      meta: _srcComponentsDropdownComponentJson2['default'],
	      snippet: _snippetHtml2['default'].replace(/</g, '&lt;'),
	      caret: true,
	      size: 'md',
	      sizes: demo.sizes,
	      variant: 'primary',
	      variants: demo.variants
	    };
	  },
	  ready: function ready() {
	    var elements = document.querySelectorAll('.lang-html');
	    for (var i = 0; i < elements.length; i++) {
	      hljs.highlightBlock(elements[i]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Dropdown",
		"description": "Dropdowns are toggleable, contextual overlays for displaying lists of links.",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": [
			{
				"name": "icon",
				"type": "String",
				"default": "",
				"required": false,
				"description": "Show icon to the left of the button text."
			},
			{
				"name": "caret",
				"type": "Boolean",
				"default": true,
				"required": false,
				"description": "Show/hide down caret.."
			},
			{
				"name": "text",
				"type": "String",
				"default": "",
				"required": false,
				"description": "Button text.."
			},
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"default": "md",
				"description": "Size of the button.."
			},
			{
				"name": "variant",
				"type": "String",
				"values": [
					"secondary",
					"primary",
					"success",
					"info",
					"warning",
					"danger",
					"link"
				],
				"default": "success",
				"description": "Button color context."
			}
		]
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = "<example :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>caret <input type=\"checkbox\" v-model=\"caret\"></label>\r\n\t\t<label>\r\n\t\t\tsize \r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\tvariant \r\n\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t</div>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<dropdown\r\n\t\t\t  :text=\"'Action'\"\r\n\t\t\t  :variant=\"variant\"\r\n\t\t\t  :size=\"size\"\r\n\t\t\t  :caret=\"caret\">\r\n\t\t\t  <ul class=\"dropdown-menu\">\r\n\t\t\t      <li><a class=\"dropdown-item\" href=\"#\" v-on:click.prevent=\"\">Completed</a></li>\r\n\t\t\t      <li><a class=\"dropdown-item\" href=\"#\" v-on:click.prevent=\"\">Pending</a></li>\r\n\t\t\t  </ul>\r\n\t\t\t</dropdown>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</example>\t\r\n";

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "<dropdown\r\n  text=\"Action\"\r\n  icon=\"\"\r\n  size=\"md\"\r\n  variant=\"primary\"\r\n  :caret=\"true\">\r\n  <ul class=\"dropdown-menu\">\r\n      <li><a class=\"dropdown-item\" href=\"#\">Completed</a></li>\r\n      <li><a class=\"dropdown-item\" href=\"#\">Pending</a></li>\r\n  </ul>\r\n</dropdown>";

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcComponentsDropdownSelectComponentJson = __webpack_require__(54);
	
	var _srcComponentsDropdownSelectComponentJson2 = _interopRequireDefault(_srcComponentsDropdownSelectComponentJson);
	
	var _templateHtml = __webpack_require__(55);
	
	var _templateHtml2 = _interopRequireDefault(_templateHtml);
	
	var _snippetHtml = __webpack_require__(56);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	exports['default'] = {
	  template: _templateHtml2['default'],
	  components: {
	    'dropdown-select': vuestrap.dropdownSelect,
	    'example': _componentsExample2['default']
	  },
	  data: function data() {
	    return {
	      meta: _srcComponentsDropdownSelectComponentJson2['default'],
	      snippet: _snippetHtml2['default'].replace(/</g, '&lt;'),
	      model: {
	        text: 'First',
	        value: 'first'
	      },
	      list: [{
	        text: 'First',
	        value: 'first'
	      }, {
	        text: 'Second',
	        value: 'second'
	      }, {
	        text: 'Third',
	        value: 'third'
	      }],
	      caret: true,
	      position: 'left',
	      positions: demo.positions,
	      size: 'md',
	      sizes: demo.sizes,
	      variant: 'primary',
	      variants: demo.variants
	    };
	  },
	  ready: function ready() {
	    var elements = document.querySelectorAll('.lang-html');
	    for (var i = 0; i < elements.length; i++) {
	      hljs.highlightBlock(elements[i]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Dropdown Select",
		"description": "Dropdown select allows to select an item from the list and update the model.",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": [
			{
				"name": "model",
				"type": "String",
				"default": "''",
				"required": true,
				"description": "A result of the selection. Two way data binding."
			},
			{
				"name": "list",
				"type": "Array",
				"default": "[]",
				"required": true,
				"description": "A list of selectable items."
			},
			{
				"name": "position",
				"type": "String",
				"values": [
					"left",
					"right"
				],
				"default": "'left'",
				"required": false,
				"description": "Vertical position of the dropdown list against the dropdown button. It becomes handy when dropdown floats to the right."
			},
			{
				"name": "icon",
				"type": "String",
				"default": "''",
				"required": false,
				"description": "Show icon to the left of the button text."
			},
			{
				"name": "caret",
				"type": "Boolean",
				"default": true,
				"required": false,
				"description": "Show/hide down caret."
			},
			{
				"name": "default-text",
				"type": "String",
				"default": "'Plase select one'",
				"required": false,
				"description": "Default text shown before selection is made."
			},
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"default": "md",
				"description": "Size of the button."
			},
			{
				"name": "variant",
				"type": "String",
				"values": [
					"secondary",
					"primary",
					"success",
					"info",
					"warning",
					"danger",
					"link"
				],
				"default": "success",
				"description": "Button color context."
			}
		]
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "<example :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>caret <input type=\"checkbox\" v-model=\"caret\"></label>\r\n\t\t<label>\r\n\t\t\tsize \r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\tvariant \r\n\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\tposition \r\n\t\t\t<select v-model=\"position\">\r\n\t\t\t\t<option v-for=\"option in positions\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\" class=\"clearfix\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<div class=\"div\" v-bind:class=\"{'pull-right': position == 'right'}\">\r\n\t\t\t\t<dropdown-select\r\n\t\t\t    :list=\"list\"\r\n\t\t\t    :model.sync=\"model\"\r\n\t\t\t    :position=\"position\"\r\n\t\t\t    :size=\"size\"\r\n\t\t\t    :variant=\"variant\"\r\n\t\t\t    :caret=\"caret\">\r\n\t\t\t\t</dropdown-select>\r\n\t\t\t</div>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</example>\t\r\n";

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = "<dropdown-select\r\n  :list=\"list: [\r\n    {\r\n      name: 'First',\r\n      value: 'first',\r\n    }, {\r\n      name: 'Second',\r\n      value: 'second',\r\n    }, {\r\n      name: 'Third',\r\n      value: 'third',\r\n    },\r\n  ],\"\r\n  :model.sync=\"model\"\r\n  size=\"md\"\r\n  variant=\"primary\"\r\n  position=\"left\"\r\n  :caret=\"true\">\r\n</dropdown-select>";

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcComponentsFormCheckboxComponentJson = __webpack_require__(58);
	
	var _srcComponentsFormCheckboxComponentJson2 = _interopRequireDefault(_srcComponentsFormCheckboxComponentJson);
	
	__webpack_require__(59);
	
	var _templateHtml = __webpack_require__(61);
	
	var _templateHtml2 = _interopRequireDefault(_templateHtml);
	
	var _snippetHtml = __webpack_require__(62);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	exports['default'] = {
	  template: _templateHtml2['default'],
	  components: {
	    'form-checkbox': vuestrap.formCheckbox,
	    'example': _componentsExample2['default']
	  },
	  data: function data() {
	    return {
	      meta: _srcComponentsFormCheckboxComponentJson2['default'],
	      snippet: _snippetHtml2['default'].replace(/</g, '&lt;'),
	      list: [{
	        text: 'First',
	        checked: false
	      }, {
	        text: 'Second',
	        checked: true
	      }, {
	        text: 'Third',
	        checked: false,
	        disabled: true
	      }],
	      custom: true,
	      vertical: true,
	      state: 'default',
	      states: demo.states
	    };
	  },
	  ready: function ready() {
	    var elements = document.querySelectorAll('.lang-html');
	    for (var i = 0; i < elements.length; i++) {
	      hljs.highlightBlock(elements[i]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Form Checkbox",
		"description": "A Checkbox input for selection of one or more items.",
		"dependencies": [
			"vuestrap/forms",
			"vuestrap/custom-forms"
		],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": [
			{
				"name": "list",
				"type": "Array",
				"default": "[]",
				"required": true,
				"description": "A list of checkbox items."
			},
			{
				"name": "custom",
				"type": "Boolean",
				"default": true,
				"required": false,
				"description": "A custom styling overlying the default radio button."
			},
			{
				"name": "vertical",
				"type": "Boolean",
				"default": true,
				"required": false,
				"description": "Stacks inputs vertically."
			},
			{
				"name": "state",
				"type": "String",
				"values": [
					"success",
					"info",
					"warning",
					"danger"
				],
				"default": "success",
				"description": "A validation state."
			}
		]
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 60 */,
/* 61 */
/***/ function(module, exports) {

	module.exports = "<example :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>vertical <input type=\"checkbox\" v-model=\"vertical\"></label>\r\n\t\t<label>custom <input type=\"checkbox\" v-model=\"custom\"></label>\r\n\t\t<label>state\r\n\t\t\t<select v-model=\"state\">\r\n\t\t\t\t<option v-for=\"option in states\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<form-checkbox\r\n\t\t    :list.sync=\"list\"\r\n\t\t    :custom=\"custom\"\r\n\t\t    :vertical=\"vertical\"\r\n\t\t    :state=\"state\">\r\n\t\t\t</form-checkbox>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</example>\t\r\n";

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = "<form-checkbox\r\n  :list.sync=\" [{\r\n      text: 'First',\r\n      checked: false,\r\n    }, {\r\n      text: 'Second',\r\n      checked: true,\r\n    }, {\r\n      text: 'Third',\r\n      checked: false,\r\n      disabled: true\r\n    },\r\n  ]\"\r\n  :custom=\"true\"\r\n  :vertical=\"true\"\r\n  :state=\"'default'\">\r\n</form-checkbox>";

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcComponentsFormInputComponentJson = __webpack_require__(64);
	
	var _srcComponentsFormInputComponentJson2 = _interopRequireDefault(_srcComponentsFormInputComponentJson);
	
	var _templateHtml = __webpack_require__(65);
	
	var _templateHtml2 = _interopRequireDefault(_templateHtml);
	
	var _snippetHtml = __webpack_require__(66);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	exports['default'] = {
	  template: _templateHtml2['default'],
	  components: {
	    'form-input': vuestrap.formInput,
	    'example': _componentsExample2['default']
	  },
	  data: function data() {
	    return {
	      meta: _srcComponentsFormInputComponentJson2['default'],
	      snippet: _snippetHtml2['default'].replace(/</g, '&lt;'),
	      model: "",
	      size: 'md',
	      sizes: demo.sizes,
	      state: 'success',
	      states: demo.states,
	      stateIcon: true
	    };
	  },
	  ready: function ready() {
	    var elements = document.querySelectorAll('.lang-html');
	    for (var i = 0; i < elements.length; i++) {
	      hljs.highlightBlock(elements[i]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Form Input",
		"description": "A textual input.",
		"dependencies": [
			"vuestrap/forms"
		],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": [
			{
				"name": "model",
				"type": "String",
				"default": "''",
				"required": true,
				"description": "Any text entered will be two way bound with your model variable."
			},
			{
				"name": "type",
				"type": "String",
				"default": "'text'",
				"values": [
					"text",
					"password",
					"datetime",
					"datetime-local",
					"date",
					"month",
					"time",
					"week",
					"number",
					"email",
					"url",
					"search",
					"tel",
					"color"
				],
				"required": false,
				"description": "A type of input"
			},
			{
				"name": "id",
				"type": "String",
				"default": "unqueId",
				"description": "Id used for input and corresponding label. If not set it will be auto-generated."
			},
			{
				"name": "label",
				"type": "String",
				"values": "",
				"default": "''",
				"required": false,
				"description": "A label text above the input."
			},
			{
				"name": "placeholder",
				"type": "String",
				"default": "''",
				"required": false,
				"description": "Show Html5 placeholder."
			},
			{
				"name": "description",
				"type": "String",
				"default": "''",
				"required": false,
				"description": "A text muted text under neath of the input."
			},
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"default": "md",
				"description": "Size of the button."
			},
			{
				"name": "state",
				"type": "String",
				"values": [
					"success",
					"info",
					"warning",
					"danger"
				],
				"default": "success",
				"description": "A validation state."
			},
			{
				"name": "state-icon",
				"type": "Boolean",
				"default": true,
				"required": false,
				"description": "Show/hide icon within input. Icon is only shown when state is set."
			}
		]
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = "<example :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>state icon <input type=\"checkbox\" v-model=\"stateIcon\"></label>\r\n\t\t<label>size\r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>state\r\n\t\t\t<select v-model=\"state\">\r\n\t\t\t\t<option v-for=\"option in states\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<form-input\r\n\t\t    :model.sync=\"model\"\r\n\t\t    type=\"text\"\r\n\t\t    label=\"Example Label\"\r\n\t\t    placeholder=\"Placeholder\"\r\n\t\t    description=\"We'll never share your email with anyone else.\"\r\n\t\t    :size=\"size\"\r\n\t\t    :state-icon=\"stateIcon\"\r\n\t\t    :state=\"state\">\r\n\t\t\t</form-input>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</example>\t\r\n";

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = "<form-input\r\n  :model.sync=\"model\"\r\n  type=\"text\"\r\n  label=\"Example Label\"\r\n  placeholder=\"Placeholder\"\r\n  description=\"We'll never share your email with anyone else.\"\r\n  size=\"md\"\r\n  :state-icon=\"true\"\r\n  :state=\"'success'\">\r\n</form-input>";

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcComponentsFormSelectComponentJson = __webpack_require__(68);
	
	var _srcComponentsFormSelectComponentJson2 = _interopRequireDefault(_srcComponentsFormSelectComponentJson);
	
	var _templateHtml = __webpack_require__(69);
	
	var _templateHtml2 = _interopRequireDefault(_templateHtml);
	
	var _snippetHtml = __webpack_require__(70);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	exports['default'] = {
	  template: _templateHtml2['default'],
	  components: {
	    'form-select': vuestrap.formSelect,
	    'example': _componentsExample2['default']
	  },
	  data: function data() {
	    return {
	      meta: _srcComponentsFormSelectComponentJson2['default'],
	      snippet: _snippetHtml2['default'].replace(/</g, '&lt;'),
	      model: "male",
	      options: [{
	        text: 'Male',
	        value: 'male'
	      }, {
	        text: 'Female',
	        value: 'female'
	      }],
	      size: 'md',
	      sizes: demo.sizes,
	      state: 'success',
	      states: demo.states
	    };
	  },
	  ready: function ready() {
	    var elements = document.querySelectorAll('.lang-html');
	    for (var i = 0; i < elements.length; i++) {
	      hljs.highlightBlock(elements[i]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Form Radio",
		"description": "A textual input.",
		"dependencies": [
			"vuestrap/forms"
		],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": [
			{
				"name": "model",
				"type": "String",
				"default": "''",
				"required": true,
				"description": "A result of the selection. Two way data binding."
			},
			{
				"name": "options",
				"type": "Array",
				"default": "[]",
				"required": true,
				"description": "A list of options"
			},
			{
				"name": "id",
				"type": "String",
				"default": "unqueId",
				"description": "Id used for input and corresponding label. If not set it will be auto-generated."
			},
			{
				"name": "label",
				"type": "String",
				"values": "",
				"default": "''",
				"required": false,
				"description": "A label text above the input."
			},
			{
				"name": "default-option",
				"type": "Object",
				"default": "''",
				"required": false,
				"description": "Show default option, i.e. <code>{text: 'Please select one',value: 'default'}</code>."
			},
			{
				"name": "description",
				"type": "String",
				"default": "''",
				"required": false,
				"description": "A text muted text under neath of the input."
			},
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"default": "md",
				"description": "Size of the button."
			},
			{
				"name": "state",
				"type": "String",
				"values": [
					"success",
					"info",
					"warning",
					"danger"
				],
				"default": "success",
				"description": "A validation state."
			},
			{
				"name": "multiple",
				"type": "Boolean",
				"default": true,
				"required": false,
				"description": "Multiple selection"
			}
		]
	};

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "<example :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>size\r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>state\r\n\t\t\t<select v-model=\"state\">\r\n\t\t\t\t<option v-for=\"option in states\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<form-select\r\n\t\t    :model.sync=\"model\"\r\n\t\t    :options=\"options\"\r\n\t\t    type=\"text\"\r\n\t\t    label=\"Example Label\"\r\n\t\t    description=\"We'll never share your gender with anyone else.\"\r\n\t\t    :size=\"size\"\r\n\t\t    :state=\"state\">\r\n\t\t\t</form-select>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</example>\t\r\n";

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = "<form-select\r\n  :model.sync=\"model\"\r\n  :options=\"options\"\r\n  type=\"text\"\r\n  label=\"Example Label\"\r\n  description=\"We'll never share your gender with anyone else.\"\r\n  size=\"md\"\r\n  :state=\"'success'\">\r\n</form-select>";

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcComponentsFormTextareaComponentJson = __webpack_require__(72);
	
	var _srcComponentsFormTextareaComponentJson2 = _interopRequireDefault(_srcComponentsFormTextareaComponentJson);
	
	var _templateHtml = __webpack_require__(73);
	
	var _templateHtml2 = _interopRequireDefault(_templateHtml);
	
	var _snippetHtml = __webpack_require__(74);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	exports['default'] = {
	  template: _templateHtml2['default'],
	  components: {
	    'form-textarea': vuestrap.formTextarea,
	    'example': _componentsExample2['default']
	  },
	  data: function data() {
	    return {
	      meta: _srcComponentsFormTextareaComponentJson2['default'],
	      snippet: _snippetHtml2['default'].replace(/</g, '&lt;'),
	      model: "",
	      state: 'success',
	      states: demo.states
	    };
	  },
	  ready: function ready() {
	    var elements = document.querySelectorAll('.lang-html');
	    for (var i = 0; i < elements.length; i++) {
	      hljs.highlightBlock(elements[i]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Text Area",
		"description": "A textarea input.",
		"dependencies": [
			"vuestrap/forms"
		],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": [
			{
				"name": "model",
				"type": "String",
				"default": "''",
				"required": true,
				"description": "Any text entered will be two way bound with your model variable."
			},
			{
				"name": "id",
				"type": "String",
				"default": "unqueId",
				"description": "Id used for input and corresponding label. If not set it will be auto-generated."
			},
			{
				"name": "label",
				"type": "String",
				"values": "",
				"default": "''",
				"required": false,
				"description": "A label text above the input."
			},
			{
				"name": "description",
				"type": "String",
				"default": "''",
				"required": false,
				"description": "A text muted text under neath of the input."
			},
			{
				"name": "rows",
				"type": "Number",
				"default": "3",
				"description": "Size of textearea (Html5 rows attribute)."
			},
			{
				"name": "state",
				"type": "String",
				"values": [
					"success",
					"info",
					"warning",
					"danger"
				],
				"default": "success",
				"description": "A validation state."
			}
		]
	};

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "<example :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>state\r\n\t\t\t<select v-model=\"state\">\r\n\t\t\t\t<option v-for=\"option in states\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<form-textarea\r\n\t\t    :model.sync=\"model\"\r\n\t\t    type=\"text\"\r\n\t\t    label=\"Example Label\"\r\n\t\t    description=\"Extra textarea description.\"\r\n\t\t    rows=\"2\"\r\n\t\t    :state=\"state\">\r\n\t\t\t</form-textarea>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</example>\t\r\n";

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = "<form-textarea\r\n  :model.sync=\"model\"\r\n  type=\"text\"\r\n  label=\"Example Label\"\r\n  description=\"Extra textarea description.\"\r\n  rows=\"2\"\r\n  :state=\"'success'\">\r\n</form-textarea>";

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcComponentsFormRadioComponentJson = __webpack_require__(76);
	
	var _srcComponentsFormRadioComponentJson2 = _interopRequireDefault(_srcComponentsFormRadioComponentJson);
	
	var _templateHtml = __webpack_require__(77);
	
	var _templateHtml2 = _interopRequireDefault(_templateHtml);
	
	var _snippetHtml = __webpack_require__(78);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	exports['default'] = {
	  template: _templateHtml2['default'],
	  components: {
	    'form-radio': vuestrap.formRadio,
	    'example': _componentsExample2['default']
	  },
	  data: function data() {
	    return {
	      meta: _srcComponentsFormRadioComponentJson2['default'],
	      snippet: _snippetHtml2['default'].replace(/</g, '&lt;'),
	      model: 'second',
	      list: [{
	        name: 'First',
	        value: 'first'
	      }, {
	        name: 'Second',
	        value: 'second'
	      }, {
	        name: 'Third (disabled)',
	        value: 'third',
	        disabled: true
	      }],
	      vertical: true,
	      custom: true,
	      state: 'default',
	      states: demo.states
	    };
	  },
	  ready: function ready() {
	    var elements = document.querySelectorAll('.lang-html');
	    for (var i = 0; i < elements.length; i++) {
	      hljs.highlightBlock(elements[i]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Form Radio",
		"description": "A radio input for selection of only one item.",
		"dependencies": [
			"vuestrap/forms",
			"vuestrap/custom-forms"
		],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": [
			{
				"name": "model",
				"type": "String",
				"default": "''",
				"required": true,
				"description": "A result of the selection. Two way data binding."
			},
			{
				"name": "name",
				"type": "String",
				"default": "options",
				"description": "A name used to group radio buttons. Please make sure it is unique for each group."
			},
			{
				"name": "list",
				"type": "Array",
				"default": "[]",
				"required": true,
				"description": "A list of radio inputs."
			},
			{
				"name": "custom",
				"type": "Boolean",
				"default": true,
				"required": false,
				"description": "A custom styling overlying the default radio button."
			},
			{
				"name": "vertical",
				"type": "Boolean",
				"default": true,
				"required": false,
				"description": "Stacks inputs vertically."
			},
			{
				"name": "state",
				"type": "String",
				"values": [
					"success",
					"info",
					"warning",
					"danger"
				],
				"default": "success",
				"description": "A validation state."
			}
		]
	};

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = "<example :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>vertical <input type=\"checkbox\" v-model=\"vertical\"></label>\r\n\t\t<label>custom <input type=\"checkbox\" v-model=\"custom\"></label>\r\n\t\t<label>state\r\n\t\t\t<select v-model=\"state\">\r\n\t\t\t\t<option v-for=\"option in states\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<form-radio\r\n\t\t    :model.sync=\"model\"\r\n\t\t    :list=\"list\"\r\n\t\t    :custom=\"custom\"\r\n\t\t    :vertical=\"vertical\"\r\n\t\t    :state=\"state\">\r\n\t\t\t</form-radio>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</example>\t\r\n";

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = "<form-radio\r\n  :model.sync=\"model\"\r\n  :list=\"[\r\n    {\r\n      name: 'First',\r\n      value: 'first',\r\n    }, {\r\n      name: 'Second',\r\n      value: 'second',\r\n    }, {\r\n      name: 'Third (disabled)',\r\n      value: 'third',\r\n      disabled: true,\r\n    },\r\n  ]\"\r\n  :custom=\"true\"\r\n  :vertical=\"true\"\r\n  :state=\"'success'\">\r\n</form-radio>";

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcComponentsIconsComponentJson = __webpack_require__(80);
	
	var _srcComponentsIconsComponentJson2 = _interopRequireDefault(_srcComponentsIconsComponentJson);
	
	var _templateHtml = __webpack_require__(81);
	
	var _templateHtml2 = _interopRequireDefault(_templateHtml);
	
	var _snippetHtml = __webpack_require__(82);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	exports['default'] = {
	  template: _templateHtml2['default'],
	  components: {
	    'icon': vuestrap.icons,
	    'example': _componentsExample2['default']
	  },
	  data: function data() {
	    return {
	      meta: _srcComponentsIconsComponentJson2['default'],
	      snippet: _snippetHtml2['default'].replace(/</g, '&lt;'),
	      size: 'xxl',
	      sizes: demo.sizes.concat([{ text: 'xl', value: 'xl' }, { text: 'xxl', value: 'xxl' }]),
	      variant: 'info',
	      variants: demo.variants.concat([{ text: 'light', value: 'light' }, { text: 'dark', value: 'dark' }])
	    };
	  },
	  ready: function ready() {
	    var elements = document.querySelectorAll('.lang-html');
	    for (var i = 0; i < elements.length; i++) {
	      hljs.highlightBlock(elements[i]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Icons",
		"description": "Svg icons based on an open source icon set with 225 marks from <a href='https://useiconic.com/open/'>ionic</a>.",
		"dependencies": [
			"vuestrap/core/icons"
		],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": [
			{
				"name": "name",
				"type": "String",
				"default": "''",
				"required": false,
				"description": "A name of the icon. For more icons please refer to <a href='https://useiconic.com/open/'>https://useiconic.com/open/</a>"
			},
			{
				"name": "background",
				"type": "String",
				"default": "''",
				"required": false,
				"description": "A name of the background icon. It will be stacked behind the main icon. It supports circle-outline and circle-fill background icons."
			},
			{
				"name": "align",
				"type": "String",
				"values": [
					"left",
					"right"
				],
				"default": "''",
				"required": false,
				"description": "Adds extra padding on the left/right of the icon."
			},
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg",
					"xl",
					"xxl"
				],
				"default": "md",
				"description": "Size of the icon. 'sm' starts at 1em and increments by 0.2em for other sizes."
			},
			{
				"name": "text",
				"type": "String",
				"default": "",
				"description": "To place custom text above the icon. Works well with background icon `circle-fill` and supports up to two characters."
			},
			{
				"name": "variant",
				"type": "String",
				"values": [
					"light",
					"dark",
					"primary",
					"success",
					"info",
					"warning",
					"danger"
				],
				"default": "light",
				"description": "Button color context."
			},
			{
				"name": "path",
				"type": "String",
				"default": "src/core/icons/sprite.svg",
				"description": "It allows you to specify a path to your own svg sprite."
			}
		]
	};

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = "<example :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>\r\n\t\t\tsize\r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\r\n\t\t<label>\r\n\t\t\tvariant\r\n\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\" v-bind:class=\"{ inverse: variant == 'light' }\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<icon name=\"info\" :size=\"size\" :variant=\"variant\"></icon>\r\n\t\t\t<icon name=\"info\" background=\"circle-outline\" :size=\"size\" :variant=\"variant\"></icon>\r\n\t\t\t<icon name=\"info\" background=\"circle-fill\" :size=\"size\" :variant=\"variant\"></icon>\r\n\t\t\t<icon background=\"circle-fill\" :size=\"size\" :variant=\"variant\" text=\"1\"></icon>\r\n\t\t\t<icon background=\"circle-outline\" :size=\"size\" :variant=\"variant\" text=\"1\"></icon>\r\n\t\t\t<icon background=\"circle-outline\" :size=\"size\" :variant=\"variant\" text=\"2\"></icon>\r\n\t\t\t<icon background=\"circle-outline\" :size=\"size\" :variant=\"variant\" text=\"11\"></icon>\r\n\t\t\t<button class=\"btn btn-md\"><icon name=\"cog\" :size=\"'md'\" :variant=\"variant\"></icon> settings</button>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</example>\t\r\n";

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = "<icon name=\"info\" size=\"xxl\" variant=\"info\"></icon>\r\n<icon name=\"info\" background=\"circle-outline\" size=\"xxl\" variant=\"info\"></icon>\r\n<icon name=\"info\" background=\"circle-fill\" size=\"xxl\" variant=\"info\"></icon>\r\n<icon background=\"circle-fill\" size=\"xxl\" variant=\"info\">1</icon>\r\n<icon background=\"circle-outline\" size=\"xxl\" variant=\"info\">1</icon>\r\n<icon background=\"circle-outline\" size=\"xxl\" variant=\"info\">2</icon>\r\n<icon background=\"circle-outline\" size=\"xxl\" variant=\"info\">11</icon>\r\n<button class=\"btn btn-md\"><icon name=\"cog\" size=\"md\" variant=\"info\"></icon> settings</button>";

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcComponentsImagesComponentJson = __webpack_require__(84);
	
	var _srcComponentsImagesComponentJson2 = _interopRequireDefault(_srcComponentsImagesComponentJson);
	
	var _templateHtml = __webpack_require__(85);
	
	var _templateHtml2 = _interopRequireDefault(_templateHtml);
	
	var _snippetHtml = __webpack_require__(86);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	exports['default'] = {
	  template: _templateHtml2['default'],
	  components: {
	    'images': vuestrap.images,
	    'example': _componentsExample2['default']
	  },
	  data: function data() {
	    return {
	      meta: _srcComponentsImagesComponentJson2['default'],
	      snippet: _snippetHtml2['default'].replace(/</g, '&lt;')
	    };
	  },
	  ready: function ready() {
	    var elements = document.querySelectorAll('.lang-html');
	    for (var i = 0; i < elements.length; i++) {
	      hljs.highlightBlock(elements[i]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Images",
		"description": "Opt your images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes.",
		"dependencies": [
			"vuestrap/images"
		],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": []
	};

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = "<example :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<img src=\"http://placehold.it/150x150?text=150x150\" alt=\"...\" class=\"img-rounded\">\r\n\t\t\t<img src=\"http://placehold.it/150x150?text=150x150\" alt=\"...\" class=\"img-circle\">\r\n\t\t\t<img src=\"http://placehold.it/150x150?text=150x150\" alt=\"...\" class=\"img-thumbnail\">\r\n\t\t\t<div class=\"m-b\"></div>\r\n\t\t\t<img src=\"http://placehold.it/1000x150?text=1000x150 - responsive\" alt=\"...\" class=\"img-responsive\" >\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</example>\t\r\n";

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = "<img src=\"http://placehold.it/150x150?text=150x150\" alt=\"...\" class=\"img-rounded\">\r\n<img src=\"http://placehold.it/150x150?text=150x150\" alt=\"...\" class=\"img-circle\">\r\n<img src=\"http://placehold.it/150x150?text=150x150\" alt=\"...\" class=\"img-thumbnail\">\r\n<img src=\"http://placehold.it/1000x150?text=1000x150 - responsive\" alt=\"...\" class=\"img-responsive\" >";

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcComponentsJumbotronComponentJson = __webpack_require__(88);
	
	var _srcComponentsJumbotronComponentJson2 = _interopRequireDefault(_srcComponentsJumbotronComponentJson);
	
	var _templateHtml = __webpack_require__(89);
	
	var _templateHtml2 = _interopRequireDefault(_templateHtml);
	
	var _snippetHtml = __webpack_require__(90);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	exports['default'] = {
	  template: _templateHtml2['default'],
	  components: {
	    'jumbotron': vuestrap.jumbotron,
	    'example': _componentsExample2['default']
	  },
	  data: function data() {
	    return {
	      meta: _srcComponentsJumbotronComponentJson2['default'],
	      snippet: _snippetHtml2['default'].replace(/</g, '&lt;'),
	      fluid: false
	    };
	  },
	  ready: function ready() {
	    var elements = document.querySelectorAll('.lang-html');
	    for (var i = 0; i < elements.length; i++) {
	      hljs.highlightBlock(elements[i]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Jumbotron",
		"description": "A lightweight, flexible component that can optionally extend the entire viewport to showcase key marketing messages on your site.",
		"dependencies": [],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": [
			{
				"name": "fluid",
				"type": "Boolean",
				"default": false,
				"required": false,
				"description": "To make the jumbotron full width, and without rounded corners."
			}
		]
	};

/***/ },
/* 89 */
/***/ function(module, exports) {

	module.exports = "<example :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>fluid <input type=\"checkbox\" v-model=\"fluid\"></label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<jumbotron :fluid=\"fluid\">\r\n\t\t\t\t<h1 class=\"display-3\">Hello, world!</h1>\r\n\t\t\t  <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\r\n\t\t\t  <hr class=\"m-y-md\">\r\n\t\t\t  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\r\n\t\t\t  <p class=\"lead\">\r\n\t\t\t    <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\r\n\t\t\t  </p>\r\n\t\t\t</jumbotron>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</example>\t\r\n";

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = "<jumbotron :fluid=\"false\">\r\n  <h1 class=\"display-3\">Hello, world!</h1>\r\n  <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\r\n  <hr class=\"m-y-md\">\r\n  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\r\n  <p class=\"lead\">\r\n    <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\r\n  </p>\r\n</jumbotron>";

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcComponentsLabelsComponentJson = __webpack_require__(92);
	
	var _srcComponentsLabelsComponentJson2 = _interopRequireDefault(_srcComponentsLabelsComponentJson);
	
	var _templateHtml = __webpack_require__(93);
	
	var _templateHtml2 = _interopRequireDefault(_templateHtml);
	
	var _snippetHtml = __webpack_require__(94);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	exports['default'] = {
	  template: _templateHtml2['default'],
	  components: {
	    'badge': vuestrap.labels,
	    'example': _componentsExample2['default']
	  },
	  data: function data() {
	    return {
	      meta: _srcComponentsLabelsComponentJson2['default'],
	      snippet: _snippetHtml2['default'].replace(/</g, '&lt;'),
	      variant: 'primary',
	      variants: demo.variants,
	      type: 'default',
	      types: [{ text: 'default', value: 'default' }, { text: 'pill', value: 'pill' }]
	    };
	  },
	  ready: function ready() {
	    var elements = document.querySelectorAll('.lang-html');
	    for (var i = 0; i < elements.length; i++) {
	      hljs.highlightBlock(elements[i]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Labels/Badges",
		"description": "Small and adaptive tag for adding context to just about any content.",
		"note": "Labels scale to match the size of the immediate parent element by using relative font sizing and em units.",
		"dependencies": [],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": [
			{
				"name": "variant",
				"type": "String",
				"default": "primary",
				"values": [
					"default",
					"primary",
					"success",
					"info",
					"warning",
					"danger",
					"link"
				],
				"required": false,
				"description": "A color background."
			},
			{
				"name": "type",
				"type": "String",
				"values": [
					"pills"
				],
				"default": "''",
				"required": false,
				"description": "Switch to pill styling with rounded corners."
			}
		]
	};

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = "<example :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>\r\n\t\t\ttype \r\n\t\t\t<select v-model=\"type\">\r\n\t\t\t\t<option v-for=\"option in types\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\tvariant \r\n\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<badge :variant=\"variant\" :type=\"type\">open</badge>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</example>\t\r\n";

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = "<badge :variant=\"variant\" :type=\"type\">open</badge>";

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcComponentsListGroupComponentJson = __webpack_require__(96);
	
	var _srcComponentsListGroupComponentJson2 = _interopRequireDefault(_srcComponentsListGroupComponentJson);
	
	var _templateHtml = __webpack_require__(97);
	
	var _templateHtml2 = _interopRequireDefault(_templateHtml);
	
	var _snippetHtml = __webpack_require__(98);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	exports['default'] = {
	  template: _templateHtml2['default'],
	  components: {
	    'listGroup': vuestrap.listGroup,
	    'badge': vuestrap.labels,
	    'example': _componentsExample2['default']
	  },
	  data: function data() {
	    return {
	      meta: _srcComponentsListGroupComponentJson2['default'],
	      snippet: _snippetHtml2['default'].replace(/</g, '&lt;')
	    };
	  },
	  ready: function ready() {
	    var elements = document.querySelectorAll('.lang-html');
	    for (var i = 0; i < elements.length; i++) {
	      hljs.highlightBlock(elements[i]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = {
		"name": "List Group",
		"description": "List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.",
		"dependencies": [
			"vuestrap/labels"
		],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": []
	};

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = "<example :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<list-group style=\"width: 350px\">\r\n\t\t\t\t<li class=\"list-group-item\">\r\n\t\t\t    <badge type=\"pill\" class=\"pull-right\">14</badge>\r\n\t\t\t    Cras justo odio\r\n\t\t\t  </li>\r\n\t\t\t  <li class=\"list-group-item\">\r\n\t\t\t    <badge type=\"pill\" class=\"pull-right\">2</badge>\r\n\t\t\t    Dapibus ac facilisis in\r\n\t\t\t  </li>\r\n\t\t\t  <li class=\"list-group-item\">\r\n\t\t\t    <badge type=\"pill\" class=\"pull-right\">1</badge>\r\n\t\t\t    Morbi leo risus\r\n\t\t\t  </li>\r\n\t\t\t</list-group>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</example>\t\r\n";

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = "<list-group style=\"width: 350px\">\r\n  <li class=\"list-group-item\">\r\n    <badge type=\"pill\" class=\"pull-right\">14</badge>\r\n    Cras justo odio\r\n  </li>\r\n  <li class=\"list-group-item\">\r\n    <badge type=\"pill\" class=\"pull-right\">2</badge>\r\n    Dapibus ac facilisis in\r\n  </li>\r\n  <li class=\"list-group-item\">\r\n    <badge type=\"pill\" class=\"pull-right\">1</badge>\r\n    Morbi leo risus\r\n  </li>\r\n</list-group>";

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcComponentsPopoverComponentJson = __webpack_require__(100);
	
	var _srcComponentsPopoverComponentJson2 = _interopRequireDefault(_srcComponentsPopoverComponentJson);
	
	var _templateHtml = __webpack_require__(101);
	
	var _templateHtml2 = _interopRequireDefault(_templateHtml);
	
	var _snippetHtml = __webpack_require__(102);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	exports['default'] = {
	  template: _templateHtml2['default'],
	  components: {
	    'popover': vuestrap.popover,
	    'example': _componentsExample2['default']
	  },
	  data: function data() {
	    return {
	      meta: _srcComponentsPopoverComponentJson2['default'],
	      snippet: _snippetHtml2['default'].replace(/</g, '&lt;')
	    };
	  },
	  ready: function ready() {
	    var elements = document.querySelectorAll('.lang-html');
	    for (var i = 0; i < elements.length; i++) {
	      hljs.highlightBlock(elements[i]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Popover",
		"description": "Add small overlay content to any element for housing secondary information. Popover rely on on the 3rd party library <a href='http://github.hubspot.com/tether/'>tether</a> for positioning.",
		"dependenices": [
			"vuestrap-tether",
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": [
			{
				"name": "position",
				"type": "String",
				"values": [
					"top",
					"bottom",
					"left",
					"right"
				],
				"default": "top",
				"required": false,
				"description": "Position of the popover."
			},
			{
				"name": "title",
				"type": "String",
				"default": "''",
				"required": false,
				"description": "Title."
			},
			{
				"name": "text",
				"type": "String",
				"default": "''",
				"required": false,
				"description": "A textual content in the popover. This can be Html."
			},
			{
				"name": "triggers",
				"type": "Array",
				"values": [
					"click",
					"focus",
					"hover"
				],
				"default": "['click']",
				"description": "Opens popover based on spcified triggers. If you consider supporting mobile devices than you might need to specify both click and hover trigger, (on desktops click will take priority)."
			}
		]
	};

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = "<example :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<div slot=\"markup\">\r\n\t\t<popover title=\"title\" text=\"Lorem ipsum dolor.\" position=\"top\">\r\n\t\t\t<button class=\"btn\">popover top</button>\r\n\t\t</popover>\r\n\t\t<popover title=\"title\" text=\"Lorem ipsum dolor.\" position=\"bottom\">\r\n\t\t\t<button class=\"btn\">poopover bottom</button>\r\n\t\t</popover>\r\n\t\t<popover title=\"title\" text=\"Lorem ipsum dolor.\" position=\"left\">\r\n\t\t\t<button class=\"btn\">poopover left</button>\r\n\t\t</popover>\r\n\t\t<popover title=\"title\" text=\"Lorem ipsum dolor.\" position=\"right\">\r\n\t\t\t<button class=\"btn\">poopover right</button>\r\n\t\t</popover>\r\n\t</div>\r\n\r\n</example>\t\r\n";

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = "<popover \r\n  title=\"popover top\" \r\n  text=\"Lorem ipsum dolor.\" \r\n  position=\"right\" \r\n  :triggers=\"['click']\">\r\n  <input type=\"text\" class=\"form-control\">\r\n</popover>";

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcComponentsTooltipComponentJson = __webpack_require__(104);
	
	var _srcComponentsTooltipComponentJson2 = _interopRequireDefault(_srcComponentsTooltipComponentJson);
	
	var _templateHtml = __webpack_require__(105);
	
	var _templateHtml2 = _interopRequireDefault(_templateHtml);
	
	var _snippetHtml = __webpack_require__(106);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	exports['default'] = {
	  template: _templateHtml2['default'],
	  components: {
	    'tooltip': vuestrap.tooltip,
	    'example': _componentsExample2['default']
	  },
	  data: function data() {
	    return {
	      meta: _srcComponentsTooltipComponentJson2['default'],
	      snippet: _snippetHtml2['default'].replace(/</g, '&lt;')
	    };
	  },
	  ready: function ready() {
	    var elements = document.querySelectorAll('.lang-html');
	    for (var i = 0; i < elements.length; i++) {
	      hljs.highlightBlock(elements[i]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Tooltip",
		"description": "Add small overlay content to any element for housing secondary information. Tooltips rely on on the 3rd party library <a href='http://github.hubspot.com/tether/'>tether</a> for positioning.",
		"dependenices": [
			"vuestrap-tether",
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": [
			{
				"name": "position",
				"type": "String",
				"values": [
					"top",
					"bottom",
					"left",
					"right"
				],
				"default": "top",
				"required": false,
				"description": "Position of the popover."
			},
			{
				"name": "text",
				"type": "String",
				"default": "''",
				"required": false,
				"description": "Title or a small text."
			},
			{
				"name": "triggers",
				"type": "Array",
				"values": [
					"click",
					"focus",
					"hover"
				],
				"default": "['click']",
				"description": "Opens popover based on specified triggers. If you consider supporting mobile devices than you might need to specify both click and hover trigger (on desktops click will take priority)."
			}
		]
	};

/***/ },
/* 105 */
/***/ function(module, exports) {

	module.exports = "<example :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"markup\">\r\n\t\t\t\t<tooltip text=\"tooltip top\" position=\"top\">\r\n\t\t\t\t\t<button class=\"btn\">tooltip top</button>\r\n\t\t\t\t</tooltip>\r\n\t\t\t\t<tooltip text=\"tooltip bottom\" position=\"bottom\">\r\n\t\t\t\t\t<button class=\"btn\">tooltip bottom</button>\r\n\t\t\t\t</tooltip>\r\n\t\t\t\t<tooltip text=\"tooltip left\" position=\"left\">\r\n\t\t\t\t\t<button class=\"btn\">tooltip left</button>\r\n\t\t\t\t</tooltip>\r\n\t\t\t\t<tooltip text=\"tooltip right\" position=\"right\">\r\n\t\t\t\t\t<button class=\"btn\">tooltip right</button>\r\n\t\t\t\t</tooltip>\r\n\t</div>\r\n</example>\t\r\n";

/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = "<tooltip \r\n  text=\"tooltip top\" \r\n  position=\"top\"\r\n  :triggers=\"['click']\">\r\n  <button class=\"btn\">tooltip top</button>\r\n</tooltip>";

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcComponentsMediaComponentJson = __webpack_require__(108);
	
	var _srcComponentsMediaComponentJson2 = _interopRequireDefault(_srcComponentsMediaComponentJson);
	
	var _templateHtml = __webpack_require__(109);
	
	var _templateHtml2 = _interopRequireDefault(_templateHtml);
	
	var _snippetHtml = __webpack_require__(110);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	exports['default'] = {
	  template: _templateHtml2['default'],
	  components: {
	    'media': vuestrap.media,
	    'example': _componentsExample2['default']
	  },
	  data: function data() {
	    return {
	      meta: _srcComponentsMediaComponentJson2['default'],
	      snippet: _snippetHtml2['default'].replace(/</g, '&lt;'),
	      position: 'top left',
	      positions: [{ text: 'top left', value: 'top left' }, { text: 'top right', value: 'top right' }, { text: 'middle left', value: 'middle left' }, { text: 'middle right', value: 'middle right' }, { text: 'bottom left', value: 'bottom left' }, { text: 'bottom right', value: 'bottom right' }]
	    };
	  },
	  ready: function ready() {
	    var elements = document.querySelectorAll('.lang-html');
	    for (var i = 0; i < elements.length; i++) {
	      hljs.highlightBlock(elements[i]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 108 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Media",
		"description": "The media object is an abstract element used as the basis for building more complex and repetitive components (like blog comments, Tweets, etc).",
		"dependencies": [
			"vuestrap/images"
		],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": [
			{
				"name": "align",
				"type": "String",
				"default": "top left",
				"required": false,
				"description": "To align media object versus body content."
			}
		]
	};

/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports = "<example :meta=\"meta\" :snippet=\"snippet\">\r\n    <div slot=\"controls\">\r\n        <!-- Html controls start-->\r\n        <label>\r\n\t\t\t\t\tposition\r\n\t\t\t\t\t<select v-model=\"position\">\r\n\t\t\t\t\t\t<option v-for=\"option in positions\" v-bind:value=\"option.value\">\r\n\t\t\t\t\t    {{ option.text }}\r\n\t\t\t\t\t  </option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</label>\r\n        <!-- Html controls end-->\r\n    </div>\r\n    <div slot=\"markup\">\r\n        <!-- Html markup start-->\r\n        <media :position=\"position\">\r\n            <div slot=\"aside\">\r\n                <a href=\"#\">\r\n                \t<img class=\"media-object\" src=\"http://placehold.it/50x50?text=media\">\r\n                </a>\r\n            </div>\r\n            <div slot=\"body\">\r\n            \t<h4 class=\"media-heading\">Media heading</h4>\r\n\t\t\t\t\t\t  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\r\n            </div>\r\n        </media>\r\n        <!-- Html markup end-->\r\n    </div>\r\n</example>\r\n";

/***/ },
/* 110 */
/***/ function(module, exports) {

	module.exports = "<media position=\"top left\">\r\n  <div slot=\"aside\">\r\n    <a href=\"#\">\r\n      <img class=\"media-object\" src=\"http://placehold.it/50x50?text=media\">\r\n    </a>\r\n  </div>\r\n  <div slot=\"body\">\r\n    <h4 class=\"media-heading\">Media heading</h4> \r\n    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\r\n  </div>\r\n</media>\r\n";

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcComponentsModalComponentJson = __webpack_require__(112);
	
	var _srcComponentsModalComponentJson2 = _interopRequireDefault(_srcComponentsModalComponentJson);
	
	var _templateHtml = __webpack_require__(113);
	
	var _templateHtml2 = _interopRequireDefault(_templateHtml);
	
	var _snippetHtml = __webpack_require__(114);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	exports['default'] = {
	  template: _templateHtml2['default'],
	  components: {
	    'modal': vuestrap.modal,
	    'example': _componentsExample2['default']
	  },
	  data: function data() {
	    return {
	      meta: _srcComponentsModalComponentJson2['default'],
	      snippet: _snippetHtml2['default'].replace(/</g, '&lt;'),
	      size: 'md',
	      sizes: demo.sizes,
	      fade: true
	    };
	  },
	  ready: function ready() {
	    var elements = document.querySelectorAll('.lang-html');
	    for (var i = 0; i < elements.length; i++) {
	      hljs.highlightBlock(elements[i]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Modal",
		"description": "",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": [
			{
				"name": "id",
				"type": "String",
				"default": "default",
				"description": "Id used for the modal. If not set it will be auto-generated. To show modal from anywhere in the application use <code>$broadcast('show-modal', 'id')</code> event.<br><code>$broadcast('hide-modal', 'id')</code> hides it.<br>Thanks to event system you can have multiple modal instances on the same page."
			},
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"default": "md",
				"description": "Size of the button."
			},
			{
				"name": "fade",
				"type": "Boolean",
				"default": true,
				"required": false,
				"description": "If set to true modal will fade in on open and fade out on close."
			}
		]
	};

/***/ },
/* 113 */
/***/ function(module, exports) {

	module.exports = "<example :meta=\"meta\" :snippet=\"snippet\">\r\n    <div slot=\"controls\">\r\n        <!-- Html controls start-->\r\n        <label>fade <input type=\"checkbox\" v-model=\"fade\"></label>\r\n        <label>\r\n\t\t\tsize\r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n        <!-- Html controls end-->\r\n    </div>\r\n    <div slot=\"markup\">\r\n        <!-- Html markup start-->\r\n\r\n        <!-- trigger -->\r\n        <button class=\"btn btn-primary mini\" v-on:click=\"$broadcast('show-modal', 'modal1')\">\r\n        \tShow Modal\r\n        </button>\r\n\r\n        <!-- modal -->\r\n        <modal id=\"modal1\" :size=\"size\" :fade=\"fade\">\r\n            <div slot=\"modal-header\">\r\n                <h3>header</h3>\r\n            </div>\r\n            <div slot=\"modal-body\">\r\n                body\r\n            </div>\r\n            <div slot=\"modal-footer\">\r\n                <button class=\"btn btn-primary\" v-on:click=\"$broadcast('hide-modal', 'modal1')\">\r\n                    OK\r\n                </button>\r\n            </div>\r\n        </modal>\r\n        <!-- Html markup end-->\r\n    </div>\r\n</example>\r\n";

/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports = "<!-- trigger -->\r\n<button class=\"btn btn-primary mini\" v-on:click=\"$broadcast('show-modal', 'modal1')\">\r\n  Show Modal\r\n</button>\r\n<!-- modal -->\r\n<modal id=\"modal1\" size=\"md\" :fade=\"true\">\r\n  <div slot=\"modal-header\">\r\n    <h3>header</h3>\r\n  </div>\r\n  <div slot=\"modal-body\">\r\n    body\r\n  </div>\r\n  <div slot=\"modal-footer\">\r\n    <button class=\"btn btn-primary\" v-on:click=\"$broadcast('hide-modal', 'modal1')\">\r\n      OK\r\n    </button>\r\n  </div>\r\n</modal>\r\n";

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcComponentsNavComponentJson = __webpack_require__(116);
	
	var _srcComponentsNavComponentJson2 = _interopRequireDefault(_srcComponentsNavComponentJson);
	
	var _templateHtml = __webpack_require__(117);
	
	var _templateHtml2 = _interopRequireDefault(_templateHtml);
	
	var _snippetHtml = __webpack_require__(118);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	exports['default'] = {
	  template: _templateHtml2['default'],
	  components: {
	    'navigation': vuestrap.nav,
	    'example': _componentsExample2['default']
	  },
	  data: function data() {
	    return {
	      meta: _srcComponentsNavComponentJson2['default'],
	      snippet: _snippetHtml2['default'].replace(/</g, '&lt;'),
	      vertical: false,
	      type: 'default',
	      types: [{ text: 'default', value: 'default' }, { text: 'pills', value: 'pills' }]
	    };
	  },
	  ready: function ready() {
	    var elements = document.querySelectorAll('.lang-html');
	    for (var i = 0; i < elements.length; i++) {
	      hljs.highlightBlock(elements[i]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 116 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Nav",
		"description": "Roll your own navigation style by extending the base .nav component.",
		"note": "To avoid confilcts with html5 <code>&lt;nav></code> tag, vueatrap uses <code>&lt;navigation></code> tag. Also by default, wrapping element is <code>&lt;ul></code>, so only <code>&lt;li></li></code>'s are required within <code>&lt;navigation></code> tag.",
		"dependencies": [],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": [
			{
				"name": "type",
				"type": "String",
				"values": [
					"default",
					"pills",
					"navbar"
				],
				"default": "default",
				"description": "Type of the navigation. Use <code>navbar</code> type in conjuction with <code>&lt;navbar></code> element."
			},
			{
				"name": "vertical",
				"type": "Boolean",
				"default": false,
				"required": false,
				"description": "Stack items in vertical position."
			}
		]
	};

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = "<example :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>\r\n\t\t\ttype\r\n\t\t\t<select v-model=\"type\">\r\n\t\t\t\t<option v-for=\"option in types\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>vertical <input type=\"checkbox\" v-model=\"vertical\"></label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<navigation :type=\"type\" :vertical=\"vertical\">\r\n\t\t\t  <li class=\"nav-item\">\r\n\t\t    <a href=\"#\" class=\"nav-link active\">Active</a>\r\n\t\t\t  </li>\r\n\t\t\t  <li class=\"nav-item\">\r\n\t\t\t    <a href=\"#\" class=\"nav-link\">Link</a>\r\n\t\t\t  </li>\r\n\t\t\t  <li class=\"nav-item\">\r\n\t\t\t    <a href=\"#\" class=\"nav-link\">Another link</a>\r\n\t\t\t  </li>\r\n\t\t\t  <li class=\"nav-item\">\r\n\t\t\t    <a href=\"#\" class=\"nav-link disabled\">Disabled</a>\r\n\t\t\t  </li>\r\n\t\t\t</navigation>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</example>\t\r\n";

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = "<navigation type=\"pills\" :vertical=\"false\">\r\n  <li class=\"nav-item\">\r\n  <a href=\"#\" class=\"nav-link active\">Active</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a href=\"#\" class=\"nav-link\">Link</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a href=\"#\" class=\"nav-link\">Another link</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a href=\"#\" class=\"nav-link disabled\">Disabled</a>\r\n  </li>\r\n</navigation>";

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcComponentsNavbarComponentJson = __webpack_require__(120);
	
	var _srcComponentsNavbarComponentJson2 = _interopRequireDefault(_srcComponentsNavbarComponentJson);
	
	var _templateHtml = __webpack_require__(121);
	
	var _templateHtml2 = _interopRequireDefault(_templateHtml);
	
	var _snippetHtml = __webpack_require__(122);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	exports['default'] = {
	  template: _templateHtml2['default'],
	  components: {
	    'navbar': vuestrap.navbar,
	    'example': _componentsExample2['default']
	  },
	  data: function data() {
	    return {
	      meta: _srcComponentsNavbarComponentJson2['default'],
	      snippet: _snippetHtml2['default'].replace(/</g, '&lt;'),
	      fixed: '',
	      fixeds: [{ text: 'default', value: '' }, { text: 'top', value: 'top' }, { text: 'bottom', value: 'bottom' }],
	      type: 'default',
	      types: [{ text: 'default', value: 'default' }, { text: 'dark', value: 'dark' }],
	      variant: 'default',
	      variants: demo.variants.concat([{ text: 'inverse', value: 'inverse' }])
	    };
	  },
	  ready: function ready() {
	    var elements = document.querySelectorAll('.lang-html');
	    for (var i = 0; i < elements.length; i++) {
	      hljs.highlightBlock(elements[i]);
	    }
	  },
	  watch: {
	    type: function type(val) {
	      if (val === 'dark' && this.variant !== 'primary' && this.variant !== 'inverse') {
	        this.variant = 'inverse';
	      }
	    },
	    variant: function variant(val) {
	      if (val === 'primary' || val === 'inverse') {
	        this.type = 'dark';
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 120 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Navbar",
		"description": "The navbar is a simple wrapper for positioning branding, navigation, and other elements into a concise navigation header.",
		"dependencies": [
			"vuestrap/nav",
			"vuestrap/buttons",
			"vuestrap/forms"
		],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": [
			{
				"name": "fixed",
				"type": "String",
				"default": "''",
				"description": "Removes rounded corners and sticks the navbar to the top/bottom."
			},
			{
				"name": "type",
				"type": "String",
				"values": [
					"light",
					"dark"
				],
				"default": "success",
				"description": "When type is set to dark, light font color will be applied."
			},
			{
				"name": "variant",
				"type": "String",
				"values": [
					"inverse",
					"primary",
					"success",
					"info",
					"warning",
					"danger"
				],
				"default": "success",
				"description": "Background color of the navbar."
			}
		]
	};

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = "<example :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>\r\n\t\t\tfixed\r\n\t\t\t<select v-model=\"fixed\">\r\n\t\t\t\t<option v-for=\"option in fixeds\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\ttype\r\n\t\t\t<select v-model=\"type\">\r\n\t\t\t\t<option v-for=\"option in types\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\tvariant\r\n\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<navbar :fixed=\"fixed\" :type=\"type\" :variant=\"variant\">\r\n\t\t\t  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\r\n\t\t\t  <ul class=\"nav navbar-nav pull-left\">\r\n\t\t\t    <li class=\"nav-item active\">\r\n\t\t\t      <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n\t\t\t    </li>\r\n\t\t\t    <li class=\"nav-item\">\r\n\t\t\t      <a class=\"nav-link\" href=\"#\">Features</a>\r\n\t\t\t    </li>\r\n\t\t\t    <li class=\"nav-item\">\r\n\t\t\t      <a class=\"nav-link\" href=\"#\">Pricing</a>\r\n\t\t\t    </li>\r\n\t\t\t    <li class=\"nav-item\">\r\n\t\t\t      <a class=\"nav-link\" href=\"#\">About</a>\r\n\t\t\t    </li>\r\n\t\t\t  </ul>\r\n\t\t\t  <form class=\"form-inline navbar-form pull-right\">\r\n\t\t\t    <input class=\"form-control\" type=\"text\" placeholder=\"Search\">\r\n\t\t\t    <button class=\"btn btn-success-outline\" type=\"submit\">Search</button>\r\n\t\t\t  </form>\r\n\t\t\t</navbar>\r\n\t\t\t<div v-if=\"fixed\">Look for navbar at the {{fixed}} :)</div>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</example>\t\r\n";

/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports = "<navbar fixed=\"top\" type=\"light\" variant=\"default\">\r\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\r\n  <ul class=\"nav navbar-nav pull-left\">\r\n    <li class=\"nav-item active\">\r\n      <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"#\">Features</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"#\">Pricing</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"#\">About</a>\r\n    </li>\r\n  </ul>\r\n  <form class=\"form-inline navbar-form pull-right\">\r\n    <input class=\"form-control\" type=\"text\" placeholder=\"Search\">\r\n    <button class=\"btn btn-success-outline\" type=\"submit\">Search</button>\r\n  </form>\r\n</navbar>";

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcComponentsPagerComponentJson = __webpack_require__(124);
	
	var _srcComponentsPagerComponentJson2 = _interopRequireDefault(_srcComponentsPagerComponentJson);
	
	var _templateHtml = __webpack_require__(125);
	
	var _templateHtml2 = _interopRequireDefault(_templateHtml);
	
	var _snippetHtml = __webpack_require__(126);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	exports['default'] = {
	  template: _templateHtml2['default'],
	  components: {
	    'pager': vuestrap.pager,
	    'example': _componentsExample2['default']
	  },
	  data: function data() {
	    return {
	      meta: _srcComponentsPagerComponentJson2['default'],
	      snippet: _snippetHtml2['default'].replace(/</g, '&lt;')
	    };
	  },
	  ready: function ready() {
	    var elements = document.querySelectorAll('.lang-html');
	    for (var i = 0; i < elements.length; i++) {
	      hljs.highlightBlock(elements[i]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 124 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Pager",
		"description": "Quick previous and next links for simple pagination implementations with light markup and styles. It’s great for simple sites like blogs or magazines.",
		"dependencies": [],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": []
	};

/***/ },
/* 125 */
/***/ function(module, exports) {

	module.exports = "<example :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<pager>\r\n\t\t\t\t<li><a href=\"#\">Previous</a></li>\r\n    \t\t<li><a href=\"#\">Next</a></li>\r\n    \t</pager>\r\n    \t<hr>\r\n    \t<pager>\r\n\t\t\t\t<li class=\"pager-prev\"><a href=\"#\">Older</a></li>\r\n    \t\t<li class=\"pager-next\"><a href=\"#\">Newer</a></li>\r\n    \t</pager>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</example>\t\r\n";

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = "<pager>\r\n  <li><a href=\"#\">Previous</a></li>\r\n  <li><a href=\"#\">Next</a></li>\r\n</pager>\r\n<hr>\r\n<pager>\r\n  <li class=\"pager-prev\"><a href=\"#\">Older</a></li>\r\n  <li class=\"pager-next\"><a href=\"#\">Newer</a></li>\r\n</pager>";

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _srcComponentsPaginationComponentJson = __webpack_require__(128);
	
	var _srcComponentsPaginationComponentJson2 = _interopRequireDefault(_srcComponentsPaginationComponentJson);
	
	var _templateHtml = __webpack_require__(129);
	
	var _templateHtml2 = _interopRequireDefault(_templateHtml);
	
	var _snippetHtml = __webpack_require__(130);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _componentsExample = __webpack_require__(1);
	
	var _componentsExample2 = _interopRequireDefault(_componentsExample);
	
	exports['default'] = {
	  template: _templateHtml2['default'],
	  components: {
	    'pagination': vuestrap.pagination,
	    'example': _componentsExample2['default']
	  },
	  data: function data() {
	    return {
	      meta: _srcComponentsPaginationComponentJson2['default'],
	      snippet: _snippetHtml2['default'].replace(/</g, '&lt;'),
	      size: 'md',
	      sizes: demo.sizes,
	      variant: 'primary',
	      variants: demo.variants,
	      totalRows: 100,
	      currentPage: 1,
	      perPage: 10
	    };
	  },
	  ready: function ready() {
	    var elements = document.querySelectorAll('.lang-html');
	    for (var i = 0; i < elements.length; i++) {
	      hljs.highlightBlock(elements[i]);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = {
		"name": "Pagination",
		"description": "Provide pagination links for your site or app with the multi-page pagination component.",
		"dependencies": [
			"vuestrap/buttons",
			"vuestrap/button-group"
		],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": [
			{
				"name": "current-page",
				"type": "Number",
				"default": "1",
				"description": "Sets the initial active page number."
			},
			{
				"name": "limit",
				"type": "Number",
				"default": "7",
				"description": "Number of visible links"
			},
			{
				"name": "per-page",
				"type": "Number",
				"default": "20",
				"description": "Number of visible links including left and right arrows."
			},
			{
				"name": "total-rows",
				"type": "Number",
				"default": "20",
				"description": "Number of all results, so the pagination can calculate page links."
			},
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"default": "md",
				"description": "Size of the button."
			},
			{
				"name": "variant",
				"type": "String",
				"values": [
					"secondary",
					"primary",
					"success",
					"info",
					"warning",
					"danger",
					"link"
				],
				"default": "success",
				"description": "Button color context."
			}
		]
	};

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = "<example :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>\r\n\t\t\t\tsize\r\n\t\t\t\t<select v-model=\"size\">\r\n\t\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t\t    {{ option.text }}\r\n\t\t\t\t  </option>\r\n\t\t\t\t</select>\r\n\t\t\t</label>\r\n\r\n\t\t\t<label>\r\n\t\t\t\tvariant\r\n\t\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t\t    {{ option.text }}\r\n\t\t\t\t  </option>\r\n\t\t\t\t</select>\r\n\t\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<pagination\r\n\t\t\t    :size=\"size\"\r\n\t\t\t    :variant=\"variant\"\r\n\t\t\t    :total-rows=\"totalRows\"\r\n\t\t\t    :current-page.sync=\"currentPage\"\r\n\t\t\t    :per-page=\"perPage\">\r\n\t\t\t</pagination>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</example>\t\r\n";

/***/ },
/* 130 */
/***/ function(module, exports) {

	module.exports = "";

/***/ }
/******/ ]);
//# sourceMappingURL=vuestrap-demo.js.map