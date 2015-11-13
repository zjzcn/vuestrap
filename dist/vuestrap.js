/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * IMPORT GLOBAL STYLING
	 */

	// import normalize
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(1);

	// import utilities

	__webpack_require__(10);

	// import grid

	__webpack_require__(29);

	/**
	 * IMPORT EACH COMPONENT
	 */

	var _srcComponentsAlert = __webpack_require__(32);

	var _srcComponentsAlert2 = _interopRequireDefault(_srcComponentsAlert);

	var _srcComponentsBreadcrumb = __webpack_require__(38);

	var _srcComponentsBreadcrumb2 = _interopRequireDefault(_srcComponentsBreadcrumb);

	var _srcComponentsButtons = __webpack_require__(42);

	var _srcComponentsButtons2 = _interopRequireDefault(_srcComponentsButtons);

	var _srcComponentsButtonGroup = __webpack_require__(44);

	var _srcComponentsButtonGroup2 = _interopRequireDefault(_srcComponentsButtonGroup);

	var _srcComponentsButtonCheckbox = __webpack_require__(48);

	var _srcComponentsButtonCheckbox2 = _interopRequireDefault(_srcComponentsButtonCheckbox);

	var _srcComponentsButtonRadio = __webpack_require__(50);

	var _srcComponentsButtonRadio2 = _interopRequireDefault(_srcComponentsButtonRadio);

	var _srcComponentsCard = __webpack_require__(52);

	var _srcComponentsCard2 = _interopRequireDefault(_srcComponentsCard);

	var _srcComponentsCarousel = __webpack_require__(60);

	var _srcComponentsCollapse = __webpack_require__(65);

	var _srcComponentsDropdown = __webpack_require__(69);

	var _srcComponentsDropdown2 = _interopRequireDefault(_srcComponentsDropdown);

	var _srcComponentsDropdownSelect = __webpack_require__(73);

	var _srcComponentsDropdownSelect2 = _interopRequireDefault(_srcComponentsDropdownSelect);

	var _srcComponentsFormCheckbox = __webpack_require__(75);

	var _srcComponentsFormCheckbox2 = _interopRequireDefault(_srcComponentsFormCheckbox);

	var _srcComponentsFormInput = __webpack_require__(81);

	var _srcComponentsFormInput2 = _interopRequireDefault(_srcComponentsFormInput);

	var _srcComponentsFormRadio = __webpack_require__(83);

	var _srcComponentsFormRadio2 = _interopRequireDefault(_srcComponentsFormRadio);

	var _srcComponentsFormSelect = __webpack_require__(85);

	var _srcComponentsFormSelect2 = _interopRequireDefault(_srcComponentsFormSelect);

	var _srcComponentsFormTextarea = __webpack_require__(87);

	var _srcComponentsFormTextarea2 = _interopRequireDefault(_srcComponentsFormTextarea);

	var _srcComponentsIcons = __webpack_require__(89);

	var _srcComponentsIcons2 = _interopRequireDefault(_srcComponentsIcons);

	var _srcComponentsImages = __webpack_require__(93);

	var _srcComponentsImages2 = _interopRequireDefault(_srcComponentsImages);

	var _srcComponentsJumbotron = __webpack_require__(94);

	var _srcComponentsJumbotron2 = _interopRequireDefault(_srcComponentsJumbotron);

	var _srcComponentsLabels = __webpack_require__(98);

	var _srcComponentsLabels2 = _interopRequireDefault(_srcComponentsLabels);

	var _srcComponentsListGroup = __webpack_require__(102);

	var _srcComponentsListGroup2 = _interopRequireDefault(_srcComponentsListGroup);

	var _srcComponentsMedia = __webpack_require__(104);

	var _srcComponentsMedia2 = _interopRequireDefault(_srcComponentsMedia);

	var _srcComponentsModal = __webpack_require__(108);

	var _srcComponentsModal2 = _interopRequireDefault(_srcComponentsModal);

	var _srcComponentsNav = __webpack_require__(112);

	var _srcComponentsNav2 = _interopRequireDefault(_srcComponentsNav);

	var _srcComponentsNavbar = __webpack_require__(116);

	var _srcComponentsNavbar2 = _interopRequireDefault(_srcComponentsNavbar);

	var _srcComponentsPager = __webpack_require__(120);

	var _srcComponentsPager2 = _interopRequireDefault(_srcComponentsPager);

	var _srcComponentsPagination = __webpack_require__(124);

	var _srcComponentsPagination2 = _interopRequireDefault(_srcComponentsPagination);

	var _srcComponentsPopover = __webpack_require__(128);

	var _srcComponentsPopover2 = _interopRequireDefault(_srcComponentsPopover);

	var _srcComponentsProgress = __webpack_require__(132);

	var _srcComponentsProgress2 = _interopRequireDefault(_srcComponentsProgress);

	var _srcComponentsTables = __webpack_require__(136);

	var _srcComponentsTables2 = _interopRequireDefault(_srcComponentsTables);

	var _srcComponentsTabs = __webpack_require__(140);

	var _srcComponentsTabs2 = _interopRequireDefault(_srcComponentsTabs);

	var _srcComponentsTooltip = __webpack_require__(142);

	var _srcComponentsTooltip2 = _interopRequireDefault(_srcComponentsTooltip);

	window.vuestrap = {
	  alert: _srcComponentsAlert2['default'],
	  breadcrumb: _srcComponentsBreadcrumb2['default'],
	  buttons: _srcComponentsButtons2['default'],
	  buttonGroup: _srcComponentsButtonGroup2['default'],
	  buttonCheckbox: _srcComponentsButtonCheckbox2['default'],
	  buttonRadio: _srcComponentsButtonRadio2['default'],
	  card: _srcComponentsCard2['default'],
	  carousel: _srcComponentsCarousel.carousel,
	  slide: _srcComponentsCarousel.slide,
	  collapse: _srcComponentsCollapse.collapse,
	  collapseToggle: _srcComponentsCollapse.collapseToggle,
	  dropdown: _srcComponentsDropdown2['default'],
	  dropdownSelect: _srcComponentsDropdownSelect2['default'],
	  formCheckbox: _srcComponentsFormCheckbox2['default'],
	  formInput: _srcComponentsFormInput2['default'],
	  formSelect: _srcComponentsFormSelect2['default'],
	  formTextarea: _srcComponentsFormTextarea2['default'],
	  formRadio: _srcComponentsFormRadio2['default'],
	  icons: _srcComponentsIcons2['default'],
	  images: _srcComponentsImages2['default'],
	  jumbotron: _srcComponentsJumbotron2['default'],
	  labels: _srcComponentsLabels2['default'],
	  listGroup: _srcComponentsListGroup2['default'],
	  media: _srcComponentsMedia2['default'],
	  modal: _srcComponentsModal2['default'],
	  nav: _srcComponentsNav2['default'],
	  navbar: _srcComponentsNavbar2['default'],
	  pager: _srcComponentsPager2['default'],
	  pagination: _srcComponentsPagination2['default'],
	  popover: _srcComponentsPopover2['default'],
	  progress: _srcComponentsProgress2['default'],
	  tables: _srcComponentsTables2['default'],
	  tabs: _srcComponentsTabs2['default'],
	  tooltip: _srcComponentsTooltip2['default']
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	__webpack_require__(6);

	__webpack_require__(8);

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

	// removed by extract-text-webpack-plugin

/***/ },
/* 7 */,
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _animationScss = __webpack_require__(11);

	var _animationScss2 = _interopRequireDefault(_animationScss);

	var _closeScss = __webpack_require__(13);

	var _closeScss2 = _interopRequireDefault(_closeScss);

	var _codeScss = __webpack_require__(15);

	var _codeScss2 = _interopRequireDefault(_codeScss);

	var _inputGroupScss = __webpack_require__(17);

	var _inputGroupScss2 = _interopRequireDefault(_inputGroupScss);

	var _responsiveEmbedScss = __webpack_require__(19);

	var _responsiveEmbedScss2 = _interopRequireDefault(_responsiveEmbedScss);

	var _typeScss = __webpack_require__(21);

	var _typeScss2 = _interopRequireDefault(_typeScss);

	var _utilitiesResponsiveScss = __webpack_require__(23);

	var _utilitiesResponsiveScss2 = _interopRequireDefault(_utilitiesResponsiveScss);

	var _utilitiesSpacingScss = __webpack_require__(25);

	var _utilitiesSpacingScss2 = _interopRequireDefault(_utilitiesSpacingScss);

	var _utilitiesScss = __webpack_require__(27);

	var _utilitiesScss2 = _interopRequireDefault(_utilitiesScss);

/***/ },
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 12 */,
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */,
/* 15 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 16 */,
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 18 */,
/* 19 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 20 */,
/* 21 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 22 */,
/* 23 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 24 */,
/* 25 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 26 */,
/* 27 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 28 */,
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _bootstrapScss = __webpack_require__(30);

	var _bootstrapScss2 = _interopRequireDefault(_bootstrapScss);

/***/ },
/* 30 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 31 */,
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(33);

	__webpack_require__(35);

	var _alertHtml = __webpack_require__(37);

	var _alertHtml2 = _interopRequireDefault(_alertHtml);

	// export component object
	exports['default'] = {
	  template: _alertHtml2['default'],
	  replace: true,
	  computed: {
	    alertState: function alertState() {
	      return !this.state || this.state === 'default' ? 'alert-success' : 'alert-' + this.state;
	    }
	  },
	  props: {
	    show: {
	      type: Boolean,
	      'default': false,
	      required: true
	    },
	    state: {
	      type: String,
	      'default': 'success'
	    },
	    dismissible: {
	      type: Boolean,
	      'default': false
	    }
	  },
	  methods: {
	    dismiss: function dismiss() {
	      // hide an alert
	      this.show = false;
	      // Dispatch an event from the current vm that propagates all the way up to its $root
	      this.$dispatch('dismiss::alert');
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 34 */,
/* 35 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 36 */,
/* 37 */
/***/ function(module, exports) {

	module.exports = "<div class=\"alert {{alertState}} fade in\" role=\"alert\" v-bind:class=\"{ 'alert-dismissible': dismissible }\" v-show=\"show\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" v-if=\"dismissible\" v-on:click=\"dismiss\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n        <span class=\"sr-only\">Close</span>\r\n    </button>\r\n    <slot></slot>\r\n</div>\r\n";

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(39);

	var _breadcrumbHtml = __webpack_require__(41);

	var _breadcrumbHtml2 = _interopRequireDefault(_breadcrumbHtml);

	// export component object
	exports['default'] = {
	  template: _breadcrumbHtml2['default'],
	  replace: true,
	  props: {
	    list: {
	      type: Array,
	      'default': [],
	      required: true
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 40 */,
/* 41 */
/***/ function(module, exports) {

	module.exports = "<ol class=\"breadcrumb\" style=\"margin-bottom: 5px;\">\r\n    <li v-for=\"item in list\" v-bind:class=\"{ active: active }\">\r\n        <a href=\"{{item.href}}\" v-if=\"!active\">{{item.text}}</a>\r\n        <span v-if=\"active\">{{item.text}}</span>\r\n    </li>\r\n</ol>";

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(35);

	var _buttonsHtml = __webpack_require__(43);

	var _buttonsHtml2 = _interopRequireDefault(_buttonsHtml);

	// export component object
	exports['default'] = {
	  template: _buttonsHtml2['default'],
	  replace: true,
	  computed: {
	    btnBlock: function btnBlock() {
	      return this.block ? 'btn-block' : '';
	    },
	    btnVariant: function btnVariant() {
	      return !this.variant || this.variant === 'default' ? 'btn-secondary' : 'btn-' + this.variant;
	    },
	    btnSize: function btnSize() {
	      return !this.size || this.size === 'default' ? '' : 'btn-' + this.size;
	    }
	  },
	  props: {
	    block: {
	      type: Boolean,
	      'default': false
	    },
	    disabled: {
	      type: Boolean,
	      'default': false
	    },
	    href: {
	      type: String,
	      'default': ''
	    },
	    role: {
	      type: String,
	      'default': ''
	    },
	    size: {
	      type: String,
	      'default': 'md'
	    },
	    type: {
	      type: String,
	      'default': 'button'
	    },
	    variant: {
	      type: String,
	      'default': 'default'
	    }
	  },
	  methods: {}
	};
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "<button type=\"{{type}}\" class=\"btn {{btnVariant}} {{btnSize}} {{btnBlock}}\" v-bind:disabled=\"disabled\" v-if=\"!href\"><slot></slot></button>\r\n<a v-bind:href=\"href\" class=\"btn {{btnVariant}} {{btnSize}} {{btnBlock}} {{btnDisabled}}\" v-if=\"href\" v-bind:role=\"role\"><slot></slot></a>";

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(45);

	__webpack_require__(35);

	var _buttonGroupHtml = __webpack_require__(47);

	var _buttonGroupHtml2 = _interopRequireDefault(_buttonGroupHtml);

	// export component object
	exports['default'] = {
	    template: _buttonGroupHtml2['default'],
	    replace: true,
	    props: {
	        vertical: {
	            type: Boolean,
	            'default': false
	        }
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 46 */,
/* 47 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\" v-bind:class=\"{ 'btn-group-vertical': vertical }\">\r\n\t<slot></slot>\r\n</div>\r\n";

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(35);

	__webpack_require__(45);

	var _buttonCheckboxHtml = __webpack_require__(49);

	var _buttonCheckboxHtml2 = _interopRequireDefault(_buttonCheckboxHtml);

	// export component object
	exports['default'] = {
	  template: _buttonCheckboxHtml2['default'],
	  replace: true,
	  computed: {
	    btnVariant: function btnVariant() {
	      return !this.variant || this.variant === 'default' ? 'btn-secondary' : 'btn-' + this.variant;
	    },
	    btnSize: function btnSize() {
	      return !this.size || this.size === 'default' ? '' : 'btn-' + this.size;
	    }
	  },
	  props: {
	    list: {
	      type: Array,
	      'default': [],
	      twoWay: true,
	      required: true
	    },
	    size: {
	      type: String,
	      'default': 'md'
	    },
	    variant: {
	      type: String,
	      'default': 'default'
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\" data-toggle=\"buttons\">\r\n  <label class=\"btn {{btnVariant}} {{btnSize}} {{ item.checked ? 'active' : '' }}\" v-for=\"item in list\">\r\n    <input type=\"checkbox\" autocomplete=\"off\" v-model=\"item.checked\">{{item.text}}</label>\r\n</div>\r\n";

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(35);

	var _buttonRadioHtml = __webpack_require__(51);

	var _buttonRadioHtml2 = _interopRequireDefault(_buttonRadioHtml);

	// export component object
	exports['default'] = {
	  template: _buttonRadioHtml2['default'],
	  replace: true,
	  computed: {
	    btnVariant: function btnVariant() {
	      return !this.variant || this.variant === 'default' ? 'btn-secondary' : 'btn-' + this.variant;
	    },
	    btnSize: function btnSize() {
	      return !this.size || this.size === 'default' ? '' : 'btn-' + this.size;
	    },
	    btnActive: function btnActive() {
	      return item.value;
	    }
	  },
	  props: {
	    model: {
	      type: String,
	      twoWay: true,
	      required: true
	    },
	    list: {
	      type: Array,
	      'default': [],
	      required: true
	    },
	    size: {
	      type: String,
	      'default': 'md'
	    },
	    variant: {
	      type: String,
	      'default': 'default'
	    }
	  },
	  ready: function ready() {
	    console.log(this.btnVariant);
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\" data-toggle=\"buttons\">\r\n    <label \r\n    \tclass=\"btn {{btnVariant}} {{btnSize}} {{ model == item.value ? 'active' : '' }}\" \r\n    \tv-for=\"item in list\">\r\n      <input \r\n      \ttype=\"radio\" \r\n      \tname=\"options\" \r\n      \tvalue=\"{{item.value}}\" \r\n      \tautocomplete=\"off\" \r\n      \tv-model=\"model\"> {{item.text}}\r\n    </label>\r\n</div>\r\n";

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(53);

	__webpack_require__(35);

	__webpack_require__(55);

	__webpack_require__(57);

	var _cardHtml = __webpack_require__(59);

	var _cardHtml2 = _interopRequireDefault(_cardHtml);

	// export component object
	exports['default'] = {
	  template: _cardHtml2['default'],
	  replace: true,
	  computed: {
	    cardVariant: function cardVariant() {
	      return !this.variant || this.variant === 'default' ? 'card-default' : 'card-' + this.variant;
	    },
	    cardInverse: function cardInverse() {
	      return this.type === 'image-overlay' || this.type === 'inverse' ? 'card-inverse' : '';
	    },
	    cardAlign: function cardAlign() {
	      return 'text-' + this.align;
	    }
	  },
	  props: {
	    align: {
	      type: String,
	      'default': 'left'
	    },
	    type: {
	      type: String,
	      'default': 'default'
	    },
	    variant: {
	      type: String,
	      'default': 'default'
	    }
	  },
	  watch: {
	    'type': function type(val) {
	      // get first card-block or div and apply a card-image-overlay class if image-overlay slected
	      var div = this.$el.getElementsByClassName('card-block')[0] || this.$el.getElementsByTagName('div')[0];
	      if (val === 'image-overlay') {
	        div.classList.add('card-img-overlay');
	      } else {
	        div.classList.remove('card-img-overlay');
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 54 */,
/* 55 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 56 */,
/* 57 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 58 */,
/* 59 */
/***/ function(module, exports) {

	module.exports = "<div class=\"card {{cardVariant}} {{cardAlign}} {{cardInverse}}\">\r\n    <slot></slot>\r\n</div>\r\n";

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Carousel Notes
	 * - Ie9 does not support transitions and might require javascript fallbacks. B4 deliberately dropped support for this.
	 * - It is not accessible.
	 *
	 * How it works:
	 * - active element applies the transition to the slide but not triggers it
	 * - we need to use 'right' and 'left' classes to trigger animation
	 * - 'next' and 'prev' class makes the incoming slide positioned absolute, so it can follow outgoing slide
	 *
	 * The slide right to left we have to:
	 * - add class 'active', 'next', and right to the next slide
	 * - add class 'left' on the current slide same time as remove the 'right' class on the incoming one
	 * - remove all classes and only leave 'active' on the incoming slide
	 *
	 */

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(55);

	__webpack_require__(61);

	var _carouselHtml = __webpack_require__(63);

	var _carouselHtml2 = _interopRequireDefault(_carouselHtml);

	var _utils = __webpack_require__(64);

	// this is directly linked to the bootstrap animation timing in _carusel.scss
	// for browsers that do not support transitions like IE9 just change slide immediately
	var TRANSITION_DURATION = (0, _utils.csstransitions)() ? 600 : 0;

	// when next is set, we want to move from right to left
	// when previous is set, we want to move from left to right
	var DIRECTION = {
	  rtl: {
	    outgoing: 'left',
	    incoming: 'right',
	    overlay: 'next'
	  },
	  ltr: {
	    outgoing: 'right',
	    incoming: 'left',
	    overlay: 'prev'
	  }
	};

	// export carosuel object
	var carousel = {
	  template: _carouselHtml2['default'],
	  replace: true,
	  computed: {},
	  data: function data() {
	    return {
	      index: 0,
	      slidesCount: 0,
	      animating: false,
	      slides: [],
	      direction: DIRECTION.rtl
	    };
	  },
	  props: {
	    interval: {
	      type: Number,
	      'default': 5000
	    },
	    indicators: {
	      type: Boolean,
	      'default': true
	    },
	    controls: {
	      type: Boolean,
	      'default': true
	    }
	  },
	  methods: {
	    // previous slide
	    prev: function prev() {
	      if (this.animating) return;
	      this.index--;
	      if (this.index < 0) {
	        this.index = this.slidesCount;
	      }
	    },
	    // next slide
	    next: function next() {
	      if (this.animating) return;
	      this.index++;
	      if (this.index > this.slidesCount) {
	        this.index = 0;
	      }
	    },
	    // selected slide
	    changeSlide: function changeSlide(index) {
	      this.index = index;
	    },
	    // pause auto rotation
	    pause: function pause() {
	      if (this.interval === 0) return;
	      clearInterval(this._intervalId);
	    },
	    // start auto rotate slides
	    start: function start() {
	      var _this = this;

	      if (this.interval === 0) return;
	      this._intervalId = setInterval(function () {
	        _this.next();
	      }, this.interval);
	    }
	  },
	  ready: function ready() {
	    // get all slides
	    this._items = this.$el.querySelectorAll('.carousel-item');
	    this.slidesCount = this._items.length - 1;
	    this.slides = Array.apply(null, { length: this._items.length }).map(Number.call, Number);

	    // set first slide as active
	    this._items[0].classList.add('active');

	    // auto rotate slides
	    this.start();
	  },
	  watch: {
	    index: function index(val, oldVal) {
	      var _this2 = this;

	      this.animating = true;
	      this.direction = DIRECTION.rtl;

	      // when previous is pressed we want to move from left to right
	      if (val < oldVal) {
	        this.direction = DIRECTION.ltr;
	      }

	      // lets animate
	      // prepare next slide to animate (position it on the opposite side of the direction as a starting point)
	      this._items[val].classList.add(this.direction.incoming, this.direction.overlay);
	      // reflow
	      this._items[val].offsetWidth;
	      // add class active
	      this._items[val].classList.add('active');
	      // trigger animation on outgoing and incoming slide
	      this._items[oldVal].classList.add(this.direction.outgoing);
	      this._items[val].classList.remove(this.direction.incoming);
	      // wait for animation to finish and cleanup classes
	      setTimeout(function () {
	        _this2._items[oldVal].classList.remove(_this2.direction.outgoing, 'active');
	        _this2._items[val].classList.remove(_this2.direction.overlay);
	        _this2.animating = false;
	      }, TRANSITION_DURATION);
	    }
	  }
	};

	exports.carousel = carousel;
	// export slide object
	var slide = {
	  template: '<div class="carousel-item"><slot></slot></div>',
	  replace: true
	};
	exports.slide = slide;

/***/ },
/* 61 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 62 */,
/* 63 */
/***/ function(module, exports) {

	module.exports = "<div class=\"carousel slide\" data-ride=\"carousel\" v-on:mouseenter=\"pause()\" v-on:mouseleave=\"start()\">\r\n\r\n    <!-- Indicators -->\r\n    <ol class=\"carousel-indicators\" v-show=\"indicators\">\r\n        <li v-for=\"item in slides\" v-bind:class=\"{'active': item == index}\" v-on:click=\"changeSlide($index)\"></li>\r\n    </ol>\r\n\r\n    <!-- Wrapper for slides -->\r\n    <div class=\"carousel-inner\" role=\"listbox\">\r\n        <slot></slot>\r\n    </div>\r\n\r\n    <!-- Controls -->\r\n    <a class=\"left carousel-control\" href=\"#\" role=\"button\" v-on:click.prevent=\"prev\" v-show=\"controls\">\r\n        <span class=\"icon-prev\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"right carousel-control\" href=\"#\" role=\"button\" v-on:click.prevent=\"next\" v-show=\"controls\">\r\n        <span class=\"icon-next\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Next</span>\r\n    </a>\r\n\r\n</div>";

/***/ },
/* 64 */
/***/ function(module, exports) {

	// pulled from http://stackoverflow.com/questions/1349404/generate-a-string-of-5-random-characters-in-javascript
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.makeid = makeid;
	exports.csstransitions = csstransitions;

	function makeid() {
	  var text = '';
	  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	  for (var i = 0; i < 5; i++) {
	    text += possible.charAt(Math.floor(Math.random() * possible.length));
	  }
	  return text;
	}

	function csstransitions() {
	  var style = document.documentElement.style;
	  return style.webkitTransition !== undefined || style.MozTransition !== undefined || style.OTransition !== undefined || style.MsTransition !== undefined || style.transition !== undefined;
	}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(66);

	var _collapseHtml = __webpack_require__(68);

	var _collapseHtml2 = _interopRequireDefault(_collapseHtml);

	var _utils = __webpack_require__(64);

	// for browsers that do not support transitions like IE9 just change immediately
	var TRANSITION_DURATION = (0, _utils.csstransitions)() ? 350 : 0;

	// export component object
	var collapse = {
	  template: _collapseHtml2['default'],
	  replace: true,
	  props: {
	    id: {
	      type: String,
	      'default': ''
	    },
	    group: {
	      type: String,
	      'default': ''
	    }
	  },
	  methods: {
	    show: function show() {
	      var _this = this;

	      this.$el.classList.remove('collapse');
	      var height = this.$el.scrollHeight;
	      this.$el.classList.add('collapsing');
	      this.$el.offsetWidth;
	      this.$el.style.height = height + 'px';
	      setTimeout(function () {
	        _this.$el.classList.remove('collapsing');
	        _this.$el.classList.add('collapse', 'in');
	      }, TRANSITION_DURATION);
	    },
	    hide: function hide() {
	      var _this2 = this;

	      this.$el.classList.remove('collapse');
	      this.$el.classList.remove('in');
	      this.$el.classList.add('collapsing');
	      this.$el.offsetWidth;
	      this.$el.style.height = '0px';
	      setTimeout(function () {
	        _this2.$el.classList.remove('collapsing');
	        _this2.$el.classList.add('collapse');
	      }, TRANSITION_DURATION);
	    }
	  },
	  events: {
	    'toggle::collapse': function toggleCollapse(data) {
	      if (data.id === this.id || data.group === this.group) {
	        if ((this.$el.className + ' ').indexOf(' in ') > -1) {
	          this.hide();
	        } else {
	          this.show();
	        }
	      }
	    },
	    'toggle::accordion': function toggleAccordion(data) {
	      // if id and group id is provided it means it is an accordion and takes priority over all
	      if (data.id && data.group && data.group === this.group) {
	        // for current element
	        if (data.id === this.id) {
	          // collapse if selected item is already opened
	          if ((this.$el.className + ' ').indexOf(' in ') > -1) {
	            this.hide();
	          } else {
	            this.show();
	          }
	        } else {
	          // ignore if non-selected item is already closed
	          if ((this.$el.className + ' ').indexOf(' in ') === -1) return;

	          // close all items in the group, and open the one selected
	          this.hide();
	        }
	      }
	    }
	  }
	};

	exports.collapse = collapse;
	// export component object
	var collapseToggle = {
	  template: '<span v-on:click.stop.prevent="toggle($event)"><slot></slot></span>',
	  replace: true,
	  computed: {},
	  props: {
	    id: {
	      type: String,
	      'default': ''
	    },
	    group: {
	      type: String,
	      'default': ''
	    }
	  },
	  methods: {
	    toggle: function toggle() {
	      // if both attributes missing, ignore
	      if (!this.id && !this.group) return;

	      // broadcast accordion toggle if both id and group are set otherwise call collapse
	      if (this.id && this.group) {
	        this.$root.$broadcast('toggle::accordion', { id: this.id, group: this.group });
	      } else {
	        this.$root.$broadcast('toggle::collapse', { id: this.id, group: this.group });
	      }
	    }
	  }
	};
	exports.collapseToggle = collapseToggle;

/***/ },
/* 66 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 67 */,
/* 68 */
/***/ function(module, exports) {

	module.exports = "<div class=\"collapse\">\r\n  <slot></slot>\r\n</div>";

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(70);

	__webpack_require__(35);

	var _dropdownHtml = __webpack_require__(72);

	var _dropdownHtml2 = _interopRequireDefault(_dropdownHtml);

	// export component object
	exports['default'] = {
	  template: _dropdownHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      show: false
	    };
	  },
	  computed: {
	    btnVariant: function btnVariant() {
	      return !this.variant || this.variant === 'default' ? 'btn-secondary' : 'btn-' + this.variant;
	    },
	    btnSize: function btnSize() {
	      return !this.size || this.size === 'default' ? '' : 'btn-' + this.size;
	    },
	    dropdownToggle: function dropdownToggle() {
	      return this.caret ? 'dropdown-toggle' : '';
	    }
	  },
	  props: {
	    icon: {
	      type: String,
	      'default': ''
	    },
	    caret: {
	      type: Boolean,
	      'default': true
	    },
	    text: {
	      type: String,
	      'default': ''
	    },
	    size: {
	      type: String,
	      'default': 'default'
	    },
	    variant: {
	      type: String,
	      'default': 'default'
	    }
	  },
	  methods: {
	    toggle: function toggle(e) {
	      // hide an alert
	      this.show = !this.show;
	      // Dispatch an event from the current vm that propagates all the way up to its $root
	      if (this.show) {
	        this.$dispatch('show::dropdown');
	        e.stopPropagation();
	      } else {
	        this.$dispatch('hide::dropdown');
	      }
	    }
	  },
	  events: {
	    'close::dropdown': function closeDropdown() {
	      this.show = false;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 70 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 71 */,
/* 72 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dropdown\" v-bind:class=\"{ open: show }\">\r\n    <button\r\n        id=\"dLabel\"\r\n        class=\"btn dropdown {{dropdownToggle}} {{btnVariant}} {{btnSize}}\" role=\"button\"\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"{{show}}\"\r\n        v-on:click=\"toggle($event)\">\r\n        <icon icon=\"{{icon}}\" v-if=\"icon\"></icon> \r\n        <span v-html=\"text\" v-show=\"text\"></span>\r\n        <span class=\"caret\"></span>\r\n    </button>\r\n    <slot></slot>\r\n</div>\r\n";

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(70);

	__webpack_require__(35);

	var _dropdownSelectHtml = __webpack_require__(74);

	var _dropdownSelectHtml2 = _interopRequireDefault(_dropdownSelectHtml);

	// export component object
	exports['default'] = {
	  template: _dropdownSelectHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      show: false,
	      selected: false
	    };
	  },
	  computed: {
	    btnVariant: function btnVariant() {
	      return !this.variant || this.variant === 'default' ? 'btn-secondary' : 'btn-' + this.variant;
	    },
	    btnSize: function btnSize() {
	      return !this.size || this.size === 'default' ? '' : 'btn-' + this.size;
	    },
	    dropdownToggle: function dropdownToggle() {
	      return this.caret ? 'dropdown-toggle' : '';
	    }
	  },
	  props: {
	    model: {
	      type: Object,
	      'default': false,
	      required: true
	    },
	    list: {
	      type: Array,
	      'default': [],
	      required: true
	    },
	    icon: {
	      type: String,
	      'default': ''
	    },
	    caret: {
	      type: Boolean,
	      'default': true
	    },
	    position: {
	      type: String,
	      'default': 'left'
	    },
	    size: {
	      type: String,
	      'default': ''
	    },
	    variant: {
	      type: String,
	      'default': 'default'
	    },
	    defaultText: {
	      type: String,
	      'default': 'Plase select one'
	    }
	  },
	  methods: {
	    toggle: function toggle(e) {
	      // hide an alert
	      this.show = !this.show;
	      // Dispatch an event from the current vm that propagates all the way up to its $root
	      if (this.show) {
	        this.$dispatch('show::dropdown');
	        e.stopPropagation();
	      } else {
	        this.$dispatch('hide::dropdown');
	      }
	    },
	    select: function select(item) {
	      this.model = item;
	      this.show = false;
	      this.selected = true;
	      // Dispatch an event from the current vm that propagates all the way up to its $root
	      this.$dispatch('select::dropdown', item);
	    }
	  },
	  events: {
	    'close::dropdown': function closeDropdown() {
	      this.show = false;
	    }
	  },
	  ready: function ready() {
	    if (this.model) {
	      this.selected = true;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dropdown dropdown-select\" v-bind:class=\"{open: show}\">\r\n    <button\r\n        id=\"dLabel\"\r\n        class=\"btn dropdown {{dropdownToggle}} {{btnVariant}} {{btnSize}}\"\r\n        role=\"button\"\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"show\"\r\n        v-on:click=\"toggle($event)\">\r\n        <icon icon=\"{{icon}}\" v-if=\"icon\"></icon>\r\n        <span v-if=\"selected\">{{model.text}}</span>\r\n        <span v-if=\"!selected\">{{defaultText}}</span>\r\n    </button>\r\n    <ul class=\"dropdown-menu\" v-bind:class=\"{'dropdown-menu-right' : position == 'right'}\" aria-labelledby=\"dLabel\">\r\n        <li v-for=\"item in list\">\r\n            <button class=\"dropdown-item\" v-on:click=\"select(item)\">{{item.text}}</button>\r\n        </li>\r\n    </ul>\r\n</div>\r\n";

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(76);

	__webpack_require__(78);

	var _formCheckboxHtml = __webpack_require__(80);

	var _formCheckboxHtml2 = _interopRequireDefault(_formCheckboxHtml);

	// export component object
	exports['default'] = {
	  template: _formCheckboxHtml2['default'],
	  replace: true,
	  computed: {
	    inputState: function inputState() {
	      return !this.state || this.state === 'default' ? '' : 'has-' + this.state;
	    }
	  },
	  props: {
	    list: {
	      type: Array,
	      twoWay: true,
	      'default': [],
	      required: true
	    },
	    custom: {
	      type: Boolean,
	      'default': true
	    },
	    vertical: {
	      type: Boolean,
	      'default': false
	    },
	    state: {
	      type: String,
	      'default': 'default'
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 76 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 77 */,
/* 78 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 79 */,
/* 80 */
/***/ function(module, exports) {

	module.exports = "<fieldset class=\"form-group {{inputState}}\">\r\n\t<div class=\"checkbox\" v-for=\"item in list\" v-bind:class=\"{ 'checkbox-inline': !vertical, disabled: item.disabled }\">\r\n\t\t<label v-bind:class=\"{ 'c-input': custom, 'c-checkbox': custom }\">\r\n\t\t\t<input \r\n\t\t\t\tid=\"{{item.id}}\" \r\n\t\t\t\ttype=\"checkbox\" \r\n\t\t\t\tvalue=\"{{item.value}}\" \r\n\t\t\t\tautocomplete=\"off\" \r\n\t\t\t\tv-model=\"item.checked\" \r\n\t\t\t\tdisabled=\"{{item.disabled}}\">\r\n\t\t\t\t<span class=\"c-indicator\" v-if=\"custom\"></span> {{item.text}}\r\n\t\t</label>\r\n\t</div>\r\n</fieldset>\r\n";

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(76);

	var _utils = __webpack_require__(64);

	var _formInputHtml = __webpack_require__(82);

	var _formInputHtml2 = _interopRequireDefault(_formInputHtml);

	// export component object
	exports['default'] = {
	  template: _formInputHtml2['default'],
	  replace: true,
	  computed: {
	    inputState: function inputState() {
	      return !this.state || this.state === 'default' ? '' : 'has-' + this.state;
	    },
	    stateIconType: function stateIconType() {
	      return !this.stateIcon || this.stateIcon === 'default' ? '' : 'form-control-' + this.state;
	    },
	    inputSize: function inputSize() {
	      return !this.size || this.size === 'default' ? '' : 'form-control-' + this.size;
	    },
	    row: function row() {
	      return labelClass && inputClass;
	    }
	  },
	  props: {
	    model: {
	      twoWay: true,
	      required: true,
	      type: String
	    },
	    type: {
	      type: String,
	      'default': 'text',
	      required: true
	    },
	    id: {
	      type: String,
	      'default': _utils.uniqueId
	    },
	    label: {
	      type: String,
	      'default': ''
	    },
	    placeholder: {
	      type: String,
	      'default': ''
	    },
	    description: {
	      type: String,
	      'default': ''
	    },
	    size: {
	      type: String,
	      'default': ''
	    },
	    state: {
	      type: String,
	      'default': ''
	    },
	    stateIcon: {
	      type: Boolean,
	      'default': true
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = "<fieldset class=\"form-group {{inputState}}\">\r\n    <label for=\"{{id}}\" v-if=\"label\" class=\"control-label\">{{label}}</label>\r\n    <div class=\"inputClass\">\r\n        <input \r\n        \ttype=\"{{type}}\" \r\n        \tclass=\"form-control {{stateIconType}} {{inputSize}}\" \r\n        \tid=\"{{id}}\" \r\n        \tplaceholder=\"{{placeholder}}\" \r\n        \tv-model=\"model\">\r\n    </div>\r\n    <small class=\"text-muted\" v-if=\"description\" v-html=\"description\"></small>\r\n</fieldset>\r\n";

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(76);

	__webpack_require__(78);

	var _formRadioHtml = __webpack_require__(84);

	var _formRadioHtml2 = _interopRequireDefault(_formRadioHtml);

	// export component object
	exports['default'] = {
	  template: _formRadioHtml2['default'],
	  replace: true,
	  computed: {
	    inputState: function inputState() {
	      return !this.state || this.state === 'default' ? '' : 'has-' + this.state;
	    }
	  },
	  props: {
	    model: {
	      type: String,
	      twoWay: true,
	      required: true
	    },
	    name: {
	      type: String,
	      'default': 'options'
	    },
	    list: {
	      type: Array,
	      'default': [],
	      required: true
	    },
	    custom: {
	      type: Boolean,
	      'default': true
	    },
	    vertical: {
	      type: Boolean,
	      'default': false
	    },
	    state: {
	      type: String,
	      'default': 'default'
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = "<fieldset class=\"form-group {{inputState}}\">\r\n\t<div class=\"radio\" v-for=\"item in list\" v-bind:class=\"{ 'radio-inline': !vertical, disabled: item.disabled }\">\r\n\t\t<label v-bind:class=\"{ 'c-input': custom, 'c-radio': custom }\">\r\n\t\t\t<input \r\n\t\t\t\tid=\"{{item.id}}\" \r\n\t\t\t\ttype=\"radio\" \r\n\t\t\t\tname=\"{{name}}\"\r\n\t\t\t\tvalue=\"{{item.value}}\" \r\n\t\t\t\tautocomplete=\"off\" \r\n\t\t\t\tv-model=\"model\" \r\n\t\t\t\tdisabled=\"{{item.disabled}}\">\r\n\t\t \t<span class=\"c-indicator\" v-if=\"custom\"></span> {{item.name}}\r\n\t\t</label>\r\n\t</div>\r\n</fieldset>\r\n";

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(76);

	var _utils = __webpack_require__(64);

	var _formSelectHtml = __webpack_require__(86);

	var _formSelectHtml2 = _interopRequireDefault(_formSelectHtml);

	// export component object
	exports['default'] = {
	  template: _formSelectHtml2['default'],
	  replace: true,
	  computed: {
	    allOptions: function allOptions() {
	      if (this.defaultOption.length) {
	        return [this.defaultOption].concat(this.options);
	      }
	      return this.options;
	    },
	    inputState: function inputState() {
	      return !this.state || this.state === 'default' ? '' : 'has-' + this.state;
	    },
	    inputSize: function inputSize() {
	      return !this.size || this.size === 'default' ? '' : 'form-control-' + this.size;
	    }
	  },
	  props: {
	    model: {
	      twoWay: true,
	      required: true
	    },
	    options: {
	      type: Array,
	      'default': [],
	      required: true
	    },
	    id: {
	      type: String,
	      'default': _utils.uniqueId
	    },
	    label: {
	      type: String,
	      'default': false
	    },
	    defaultOption: {
	      type: Object,
	      'default': function _default() {
	        return {};
	      }
	    },
	    description: {
	      type: String,
	      'default': false
	    },
	    size: {
	      type: String,
	      'default': ''
	    },
	    state: {
	      type: String,
	      'default': ''
	    }
	  },
	  watch: {
	    model: function model(val, oldVal) {
	      if (val === oldVal) return;
	      // Dispatch an event from the current vm that propagates all the way up to it's $root
	      this.$dispatch('select::option', val);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = "<fieldset class=\"form-group {{inputState}}\">\r\n    <label for=\"{{id}}\" v-if=\"label\" class=\"control-label\">{{label}}</label>\r\n    <!-- single select -->\r\n    <select class=\"form-control {{inputSize}}\" id=\"{{id}}\" v-model=\"model\" options=\"allOptions\" v-if=\"!multiple\">\r\n    \t<option v-for=\"option in allOptions\" v-bind:value=\"option.value\">{{option.text}}</option>\r\n    </select>\r\n    <small class=\"text-muted\" v-if=\"description\" v-html=\"description\"></small>\r\n</fieldset>\r\n";

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(76);

	var _utils = __webpack_require__(64);

	var _formTextareaHtml = __webpack_require__(88);

	var _formTextareaHtml2 = _interopRequireDefault(_formTextareaHtml);

	// export component object
	exports['default'] = {
	  template: _formTextareaHtml2['default'],
	  replace: true,
	  computed: {
	    inputState: function inputState() {
	      return !this.state || this.state === 'default' ? '' : 'has-' + this.state;
	    }
	  },
	  props: {
	    model: {
	      twoWay: true,
	      required: true
	    },
	    id: {
	      type: String,
	      'default': _utils.uniqueId
	    },
	    label: {
	      type: String,
	      'default': false
	    },
	    description: {
	      type: String,
	      'default': false
	    },
	    state: {
	      type: String,
	      'default': ''
	    },
	    rows: {
	      type: Number,
	      'default': 3
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = "<fieldset class=\"form-group {{inputState}}\">\r\n    <label for=\"{{id}}\" v-if=\"label\" class=\"control-label\">{{label}}</label>\r\n    <textarea class=\"form-control\" id=\"{{id}}\" rows=\"{{rows}}\" v-model=\"model\"></textarea>\r\n    <small class=\"text-muted\" v-if=\"description\" v-html=\"description\"></small>\r\n</fieldset>";

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(90);
	module.exports = {
	  template: __webpack_require__(92),
	  replace: true,
	  computed: {
	    iconsSize: function iconsSize() {
	      return !this.size ? 'icons-sm' : 'icons-' + this.size;
	    },
	    iconsAlign: function iconsAlign() {
	      return !this.align ? '' : 'icons-' + this.align;
	    },
	    iconsVariant: function iconsVariant() {
	      return !this.variant ? '' : 'icons-' + this.variant;
	    },
	    iconsBackground: function iconsBackground() {
	      var bg = this.background.split('-');
	      bg = bg[1] ? bg[1] : 'fill';
	      return !this.background ? '' : 'icons-bg-' + bg;
	    }
	  },
	  props: {
	    name: {
	      type: String
	    },
	    background: {
	      type: String,
	      'default': ''
	    },
	    align: {
	      type: String,
	      'default': ''
	    },
	    size: {
	      type: String,
	      'default': 'sm'
	    },
	    text: {
	      type: String,
	      'default': ''
	    },
	    variant: {
	      type: String,
	      'default': 'standard'
	    },
	    path: {
	      type: String,
	      'default': function _default() {
	        return 'src/core/icons/sprite.svg';
	      }
	    }
	  }
	};

/***/ },
/* 90 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 91 */,
/* 92 */
/***/ function(module, exports) {

	module.exports = "<span class=\"icons icons-kzima {{iconsSize}} {{iconsVariant}} {{iconsBackground}} {{iconsAlign}}\">\r\n\t<svg class=\"icon\" v-if=\"name\">\r\n\t\t<use v-bind:xlink:href=\"path + '#' + name\"></use>\r\n\t</svg>\r\n\t<svg class=\"icon-background\" v-if=\"background\">\r\n\t\t<use v-bind:xlink:href=\"path + '#' + background\"></use>\r\n\t</svg>\r\n\t<span class=\"text\" v-if=\"text.length\">\r\n\t\t<span><slot>{{text}}</slot></span>\r\n\t</span>\r\n</span>";

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	__webpack_require__(55);

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(95);

	var _jumbotronHtml = __webpack_require__(97);

	var _jumbotronHtml2 = _interopRequireDefault(_jumbotronHtml);

	// export component object
	exports['default'] = {
	  template: _jumbotronHtml2['default'],
	  replace: true,
	  props: {
	    fluid: {
	      type: Boolean,
	      'default': false
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 95 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 96 */,
/* 97 */
/***/ function(module, exports) {

	module.exports = "<div class=\"jumbotron\" v-bind:class=\"{ 'jumbotron-fluid': fluid }\">\r\n  <div class=\"container\">\r\n    <slot></slot>\r\n  </div>\r\n</div>";

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(99);

	var _labelsHtml = __webpack_require__(101);

	var _labelsHtml2 = _interopRequireDefault(_labelsHtml);

	// export component object
	exports['default'] = {
	  template: _labelsHtml2['default'],
	  replace: true,
	  computed: {
	    labelVariant: function labelVariant() {
	      return !this.variant || this.variant === 'default' ? 'label-default' : 'label-' + this.variant;
	    },
	    labelType: function labelType() {
	      return !this.type ? '' : 'label-' + this.type;
	    }
	  },
	  props: {
	    variant: {
	      type: String,
	      'default': 'default'
	    },
	    type: {
	      type: String,
	      'default': ''
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 100 */,
/* 101 */
/***/ function(module, exports) {

	module.exports = "<span class=\"label {{labelVariant}} {{labelType}}\">\r\n\t<slot></slot>\r\n</span>\r\n";

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(57);

	__webpack_require__(99);

	var _listGroupHtml = __webpack_require__(103);

	var _listGroupHtml2 = _interopRequireDefault(_listGroupHtml);

	// export component object
	exports['default'] = {
	  template: _listGroupHtml2['default'],
	  replace: true
	};
	module.exports = exports['default'];

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"list-group\">\r\n  <slot></slot>\r\n</ul>";

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(105);

	__webpack_require__(55);

	var _mediaHtml = __webpack_require__(107);

	var _mediaHtml2 = _interopRequireDefault(_mediaHtml);

	// export component object
	exports['default'] = {
	  template: _mediaHtml2['default'],
	  replace: true,
	  computed: {
	    align: function align() {
	      return this.position.split(' ');
	    },
	    mediaVerticalAlign: function mediaVerticalAlign() {
	      var verticalAlign = this.align[0];
	      return 'media-' + verticalAlign;
	    },
	    mediaHorizontalAlign: function mediaHorizontalAlign() {
	      var horizontalAlign = this.align[1];
	      return 'media-' + horizontalAlign;
	    }
	  },
	  props: {
	    position: {
	      type: String,
	      'default': 'top left'
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 105 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 106 */,
/* 107 */
/***/ function(module, exports) {

	module.exports = "<div class=\"media\">\r\n  <div class=\"{{mediaHorizontalAlign}} {{mediaVerticalAlign}}\" v-if=\"mediaHorizontalAlign == 'media-left'\">\r\n  \t<slot name=\"aside\">\r\n  </div>\r\n  <div class=\"media-body\">\r\n  \t<slot name=\"body\">\r\n  </div>\r\n  <div class=\"{{mediaHorizontalAlign}} {{mediaVerticalAlign}}\" v-if=\"mediaHorizontalAlign == 'media-right'\">\r\n  \t<slot name=\"aside\">\r\n  </div>\r\n</div>";

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(109);

	__webpack_require__(35);

	var _utils = __webpack_require__(64);

	var _modalHtml = __webpack_require__(111);

	var _modalHtml2 = _interopRequireDefault(_modalHtml);

	// this is directly linked to the bootstrap animation timing in _modal.scss
	// // for browsers that do not support transitions like IE9 just change slide immediately
	var TRANSITION_DURATION = (0, _utils.csstransitions)() ? 300 : 0;

	// export component object
	exports['default'] = {
	  template: _modalHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      animateBackdrop: false,
	      animateModal: false
	    };
	  },
	  props: {
	    id: {
	      type: String,
	      'default': 'default'
	    },
	    size: {
	      type: String,
	      'default': 'md'
	    },
	    fade: {
	      type: Boolean,
	      'default': true
	    }
	  },
	  methods: {
	    show: function show() {
	      this.$el.style.display = 'block';
	      var _this = this;
	      // wait for the display block, and then add class "in" class on the modal
	      setTimeout(function () {
	        _this.animateBackdrop = true;
	        setTimeout(function () {
	          _this.animateModal = true;
	          _this.$dispatch('show::modal');
	        }, _this.fade ? TRANSITION_DURATION : 0);
	      }, 0);
	    },
	    hide: function hide() {
	      var _this = this;
	      // first animate modal out
	      this.animateModal = false;
	      setTimeout(function () {
	        // wait for animation to complete and then hide the backdrop
	        _this.animateBackdrop = false;
	        setTimeout(function () {
	          // no hide the modal wrapper
	          _this.$el.style.display = 'none';
	          _this.$dispatch('hide::modal');
	        }, _this.fade ? TRANSITION_DURATION : 0);
	      }, _this.fade ? TRANSITION_DURATION : 0);
	    },
	    onClickOut: function onClickOut(e) {
	      // if backdrop clicked, hide modal
	      if (e.target.id && e.target.id === this.id) {
	        this.hide();
	      }
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;

	    // support for esc key press
	    document.addEventListener('keydown', function (e) {
	      var key = e.which || e.keyCode;
	      if (key === 27) {
	        // 27 is esc
	        _this2.hide();
	      }
	    });
	  },
	  events: {
	    // control modal from outside via events
	    'show-modal': function showModal(id) {
	      if (id === this.id) {
	        this.show();
	      }
	    },
	    'hide-modal': function hideModal(id) {
	      if (id === this.id) {
	        this.hide();
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 109 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 110 */,
/* 111 */
/***/ function(module, exports) {

	module.exports = "<div style=\"display: none\">\r\n\t<div id=\"{{id}}\" class=\"modal\" v-bind:class=\"{ fade: fade, in: animateModal || !fade }\" style=\"display: block\" v-on:click=\"onClickOut($event)\">\r\n\t  \t<div class=\"modal-dialog  modal-{{size}}\" role=\"document\" style=\"z-index: 9999\">\r\n\t\t    <div class=\"modal-content\">\r\n\t\t        <div class=\"modal-header\">\r\n\t\t        \t<slot name=\"modal-header\"></slot>\r\n\t\t        </div>\r\n\t\t        <div class=\"modal-body\">\r\n\t\t        \t<slot name=\"modal-body\"></slot>\r\n\t\t        </div>\r\n\t\t        <div class=\"modal-footer\">\r\n\t\t        \t<slot name=\"modal-footer\"></slot>\r\n\t\t        </div>\r\n\t\t    </div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"modal-backdrop\" v-bind:class=\"{ fade: fade, in: animateBackdrop || !fade }\"></div>\r\n</div>";

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(113);

	__webpack_require__(146);

	var _navHtml = __webpack_require__(115);

	var _navHtml2 = _interopRequireDefault(_navHtml);

	// export component object
	exports['default'] = {
	  template: _navHtml2['default'],
	  replace: true,
	  props: {
	    vertical: {
	      type: Boolean,
	      'default': false
	    },
	    type: {
	      type: String,
	      'default': ''
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 113 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 114 */,
/* 115 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"nav\" v-bind:class=\"{ 'nav-stacked': vertical, 'nav-pills': type == 'pills', 'navbar-nav': type == 'navbar' }\">\n  <slot></slot> \n</ul>";

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(117);

	__webpack_require__(35);

	__webpack_require__(113);

	__webpack_require__(76);

	var _navbarHtml = __webpack_require__(119);

	var _navbarHtml2 = _interopRequireDefault(_navbarHtml);

	// export component object
	exports['default'] = {
	  template: _navbarHtml2['default'],
	  replace: true,
	  computed: {
	    navbarType: function navbarType() {
	      return !this.type || this.type === 'default' ? 'navbar-light' : 'navbar-dark';
	    },
	    navbarVariant: function navbarVariant() {
	      return !this.variant || this.variant === 'default' ? 'bg-faded' : 'bg-' + this.variant;
	    },
	    navbarfixed: function navbarfixed() {
	      return !this.fixed ? '' : 'navbar-fixed-' + this.fixed;
	    }
	  },
	  props: {
	    type: {
	      type: String,
	      'default': 'light'
	    },
	    variant: {
	      type: String,
	      'default': 'default'
	    },
	    fixed: {
	      type: String,
	      'default': ''
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 117 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 118 */,
/* 119 */
/***/ function(module, exports) {

	module.exports = "<nav class=\"navbar {{navbarType}} {{navbarVariant}} {{navbarfixed}}\">\r\n\t<slot></slot>\r\n</nav>";

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(121);

	var _pagerHtml = __webpack_require__(123);

	var _pagerHtml2 = _interopRequireDefault(_pagerHtml);

	// export component object
	exports['default'] = {
	  template: _pagerHtml2['default'],
	  replace: true
	};
	module.exports = exports['default'];

/***/ },
/* 121 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 122 */,
/* 123 */
/***/ function(module, exports) {

	module.exports = "<nav>\r\n  <ul class=\"pager\">\r\n  \t<slot></slot>\r\n  </ul>\r\n</nav>";

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(125);

	__webpack_require__(35);

	__webpack_require__(45);

	var _paginationHtml = __webpack_require__(127);

	var _paginationHtml2 = _interopRequireDefault(_paginationHtml);

	// export component object
	exports['default'] = {
	  template: _paginationHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      diff: 1,
	      showPrev: false,
	      showNext: false
	    };
	  },
	  computed: {
	    numberOfPages: function numberOfPages() {
	      var result = Math.ceil(this.totalRows / this.perPage);
	      return result < 1 ? 1 : result;
	    },
	    btnSize: function btnSize() {
	      return !this.size || this.size === 'default' ? '' : 'btn-' + this.size;
	    },
	    pageLinks: function pageLinks() {
	      var result = this.limit;
	      if (this.currentPage > this.numberOfPages) {
	        this.currentPage = 1;
	      }
	      this.diff = 1;
	      this.showPrev = false;
	      this.showNext = false;
	      // if less pages than limit just show this pages
	      if (this.numberOfPages <= this.limit) {
	        return this.numberOfPages;
	      }
	      // if at the beggining of the list or at the end show full number of pages within limit - 2
	      // -2 is reserves space for two buttons: "..." and "first/last button"
	      if (this.currentPage <= this.limit - 2) {
	        this.diff = 1;
	        this.showNext = true;
	        result = this.limit - 2;
	      }
	      // at the end of the range
	      if (this.currentPage > this.numberOfPages - this.limit + 2) {
	        this.diff = this.numberOfPages - this.limit + 3;
	        this.showPrev = true;
	        result = this.limit - 2;
	      }
	      // if somehere in the middle show just limit - 4 links in the middle and one button on the left with "..." and on button on the right preceeded with "..."
	      if (this.currentPage >= this.limit - 2 && this.currentPage <= this.numberOfPages - this.limit + 2) {
	        this.diff = this.currentPage - 1;
	        this.showPrev = true;
	        this.showNext = true;
	        result = this.limit - 4;
	      }
	      return result;
	    }
	  },
	  methods: {
	    btnVariant: function btnVariant(index) {
	      return index + this.diff == this.currentPage ? 'btn-' + this.variant : 'btn-secondary';
	    }
	  },
	  props: {
	    currentPage: {
	      type: Number,
	      'default': 1
	    },
	    limit: {
	      type: Number,
	      'default': 7
	    },
	    perPage: {
	      type: Number,
	      'default': 20
	    },
	    totalRows: {
	      type: Number,
	      'default': 20
	    },
	    size: {
	      type: String,
	      'default': 'secondary'
	    },
	    variant: {
	      type: String,
	      'default': ''
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 125 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 126 */,
/* 127 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group pagination\" role=\"group\" aria-label=\"Pagination\">\r\n    <button type=\"button\" class=\"btn {{btnSize}} btn-secondary\" v-bind:class=\"{ disabled: currentPage == 1 }\" v-on:click=\"(currentPage == 1) ? return : currentPage--\"><span aria-hidden=\"true\">&laquo;</span></button>\r\n    <button type=\"button\" class=\"btn {{btnSize}} btn-secondary\" v-bind:class=\"{ active: currentPage == 1 }\" v-on:click=\"currentPage = 1\" v-show=\"showPrev\">1</button>\r\n    <span class=\"btn {{btnSize}} btn-secondary\" v-show=\"showPrev\">...</span>\r\n    <button type=\"button\"\r\n    \tclass=\"btn {{btnSize}} {{btnVariant($index)}}\"\r\n    \tv-for=\"item in pageLinks\"\r\n        v-bind:class=\"{ active: $index + diff == currentPage, 'hidden-xs-down': $index + diff != currentPage }\" \r\n        v-on:click=\"currentPage = $index + diff\">{{$index + diff}}\r\n    </button>\r\n    <span class=\"btn {{btnSize}} btn-secondary\" v-show=\"showNext\">...</span>\r\n    <button type=\"button\" class=\"btn {{btnSize}} btn-secondary\" v-bind:class=\"{ active: numberOfPages == currentPage }\" v-show=\"showNext\" v-on:click=\"currentPage = numberOfPages\">{{numberOfPages}}</button>\r\n    <button type=\"button\" class=\"btn {{btnSize}} btn-secondary\" v-bind:class=\"{ disabled: currentPage == numberOfPages }\" v-on:click=\"(currentPage == numberOfPages) ? return : currentPage++\"><span aria-hidden=\"true\">&raquo;</span></button>\r\n</div>\r\n";

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(129);

	// TODO import {Tether} from 'vuestrap-tether'

	__webpack_require__(35);

	var _popoverHtml = __webpack_require__(131);

	var _popoverHtml2 = _interopRequireDefault(_popoverHtml);

	// export component object
	exports['default'] = {
	  template: _popoverHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      show: false
	    };
	  },
	  computed: {
	    popoverAlignment: function popoverAlignment() {
	      return !this.position || this.position === 'default' ? 'popover-top' : 'popover-' + this.position;
	    }
	  },
	  props: {
	    position: {
	      type: String,
	      'default': 'top'
	    },
	    triggers: {
	      type: Array,
	      'default': function _default() {
	        return ['click', 'focus'];
	      }
	    },
	    title: {
	      type: String,
	      'default': ''
	    },
	    text: {
	      type: String,
	      'default': ''
	    }
	  },
	  methods: {

	    /**
	     * Toggle 'show' state
	     * @param  {Object} e 
	     * @param  {Boolean} newState (if set use it's value)
	     */
	    toggle: function toggle(e, newState) {
	      var _this2 = this;

	      // change state
	      this.show = typeof newState !== 'undefined' ? newState : !this.show;

	      // Dispatch an event from the current vm that propagates all the way up to its $root
	      // element is shown
	      if (this.show) {
	        (function () {
	          var position = {
	            attachment: 'bottom center',
	            targetAttachment: 'top center'
	          };
	          if (_this2.position === 'bottom') {
	            position = {
	              attachment: 'top center',
	              targetAttachment: 'bottom center'
	            };
	          }
	          if (_this2.position === 'left') {
	            position = {
	              attachment: 'middle right',
	              targetAttachment: 'middle left'
	            };
	          }
	          if (_this2.position === 'right') {
	            position = {
	              attachment: 'middle left',
	              targetAttachment: 'middle right'
	            };
	          }

	          // let tether do the magic, after element is shown
	          Vue.nextTick(function () {
	            _this2._tether = new Tether({
	              element: _this2._popover,
	              target: _this2._trigger,
	              attachment: position.attachment,
	              targetAttachment: position.targetAttachment
	            });
	            _this2.$dispatch('show::popover');
	          });

	          // element gets hidden
	        })();
	      } else {
	          if (this._tether) {
	            this._tether.destroy();
	          }
	          this.$dispatch('show::popover');
	        }
	    },

	    /**
	     * Handle multiple event triggers
	     * @param  {Object} e 
	     */
	    _eventHandler: function _eventHandler(e) {

	      // stop propagation to avoid accidental closing on close::popover event
	      e.stopPropagation();

	      // if both click and hover are set, on desktop devices click will take precedence
	      if ((e.type === 'mouseenter' || e.type === 'mouseleave') && this.triggers.indexOf('click') !== -1) {
	        return;
	      }
	      // if both click and focus are set, focus will take precedence
	      if (e.type === 'click' && this.triggers.indexOf('focus') !== -1) {
	        return;
	      }

	      // hide popover
	      if (e.type === 'click') {
	        this.toggle(e);
	      } else {
	        if (e.type === 'mouseenter' || e.type === 'focus') {
	          this.toggle(e, true);
	        } else {
	          this.toggle(e, false);
	        }
	      }
	    }
	  },
	  events: {
	    'close::popover': function closePopover() {
	      this.toggle(null, false);
	    }
	  },
	  ready: function ready() {

	    // TODO
	    // animations

	    // configure tether
	    this._trigger = this.$els.trigger.children[0];
	    this._popover = this.$els.popover;
	    var _this = this;

	    // add listeners for specified triggers anb complementary click event
	    this._trigger.addEventListener('click', function (e) {
	      return _this._eventHandler(e);
	    });

	    if (this.triggers.indexOf('hover') !== -1) {
	      this._trigger.addEventListener('mouseenter', function (e) {
	        return _this._eventHandler(e);
	      });
	      this._trigger.addEventListener('mouseleave', function (e) {
	        return _this._eventHandler(e);
	      });
	    }
	    if (this.triggers.indexOf('focus') !== -1) {
	      this._trigger.addEventListener('focus', function (e) {
	        return _this._eventHandler(e);
	      });
	      this._trigger.addEventListener('blur', function (e) {
	        return _this._eventHandler(e);
	      });
	    }
	  },
	  beforeDestroy: function beforeDestroy() {

	    // clean up listeners
	    this._trigger.removeEventListener('click');
	    this._trigger.removeEventListener('mouseenter');
	    this._trigger.removeEventListener('mouseleave');
	    this._trigger.removeEventListener('focus');
	    this._trigger.removeEventListener('blur');
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 129 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 130 */,
/* 131 */
/***/ function(module, exports) {

	module.exports = "<span v-el:trigger>\r\n\t<slot></slot>\r\n</span> \r\n<div class=\"popover {{popoverAlignment}}\" v-show=\"show\" v-el:popover>\r\n  <div class=\"popover-arrow\"></div>\r\n  <h3 class=\"popover-title\" v-if=\"title\">{{title}}</h3>\r\n  <div class=\"popover-content\">\r\n    <span v-html=\"text\"></span>\r\n  </div>\r\n</div>";

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(133);

	var _progressHtml = __webpack_require__(135);

	var _progressHtml2 = _interopRequireDefault(_progressHtml);

	// export component object
	exports['default'] = {
	  template: _progressHtml2['default'],
	  replace: true,
	  computed: {
	    progressVariant: function progressVariant() {
	      return !this.variant || this.variant === 'default' ? 'progress-primary' : 'progress-' + this.variant;
	    }
	  },
	  props: {
	    animated: {
	      type: Boolean,
	      'default': false
	    },
	    max: {
	      type: Number,
	      'default': 100
	    },
	    striped: {
	      type: Boolean,
	      'default': false
	    },
	    value: {
	      type: Number,
	      'default': 0
	    },
	    variant: {
	      type: String,
	      'default': 'default'
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 133 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 134 */,
/* 135 */
/***/ function(module, exports) {

	module.exports = "<progress class=\"progress {{progressVariant}}\" v-bind:class=\"{ 'progress-striped': striped, 'progres-animated': animated }\" value=\"{{value}}\" max=\"{{max}}\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\">\r\n  <div class=\"progress\">\r\n    <span class=\"progress-bar\" style=\"width: {{value}}%;\">{{value}}%</span>\r\n  </div>\r\n</progress>";

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(137);

	var _tablesHtml = __webpack_require__(139);

	var _tablesHtml2 = _interopRequireDefault(_tablesHtml);

	// export component object
	exports['default'] = {
	  template: _tablesHtml2['default'],
	  replace: true,
	  props: {
	    styled: {
	      type: Boolean,
	      'default': false },
	    // as per new B4, .table this is now opt in
	    striped: {
	      type: Boolean,
	      'default': false
	    },
	    value: {
	      type: Number,
	      'default': 0
	    },
	    inverse: {
	      type: Boolean,
	      'default': false
	    },
	    border: {
	      type: Boolean,
	      'default': false
	    },
	    hover: {
	      type: Boolean,
	      'default': false
	    },
	    small: {
	      type: Boolean,
	      'default': false
	    },
	    responsive: {
	      type: Boolean,
	      'default': false
	    },
	    theadType: {
	      type: String,
	      'default': ''
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 137 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 138 */,
/* 139 */
/***/ function(module, exports) {

	module.exports = "<table v-bind:class=\"{ table: styled, 'table-responsive': responsive, 'table-sm': small, 'table-hover': hover, 'table-bordered': border, 'table-striped': striped, 'table-inverse': inverse }\">\r\n  <thead v-bind:class=\"{ 'thead-inverse': theadType == 'inverse', 'thead-default': theadType == 'default' }\">\r\n    <slot name=\"thead\"></slot>\r\n  </thead>\r\n  <tbody>\r\n    <slot name=\"tbody\"></slot>\r\n  </tbody>\r\n  <tfoot>\r\n    <slot name=\"tfoot\"></slot>\r\n  </tfoot>\r\n</table>";

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(113);

	var _tabsHtml = __webpack_require__(141);

	var _tabsHtml2 = _interopRequireDefault(_tabsHtml);

	// export component object
	exports['default'] = {
	  template: _tabsHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      updatedList: [],
	      flatList: []
	    };
	  },

	  computed: {
	    navType: function navType() {
	      return !this.type || this.type === 'default' ? '' : 'nav-' + this.type;
	    },

	    btnVariant: function btnVariant() {
	      return !this.variant || this.variant === 'default' ? 'btn-default' : 'btn-' + this.variant;
	    },

	    btnSize: function btnSize() {
	      return !this.size || this.size === 'default' ? '' : 'btn-' + this.size;
	    }
	  },
	  props: {
	    list: {
	      type: Array,
	      'default': [],
	      required: true
	    },
	    type: {
	      type: String,
	      'default': ''
	    },
	    state: {
	      type: String,
	      'default': 'standard'
	    },
	    size: {
	      type: String,
	      'default': 'md'
	    },
	    variant: {
	      type: String,
	      'default': 'primary'
	    },
	    vertical: {
	      type: Boolean,
	      'default': false
	    },
	    fade: {
	      type: Boolean,
	      'default': true
	    }
	  },
	  methods: {
	    select: function select(newTab) {
	      var _this = this;

	      // IGNORE DISABLED
	      if (newTab.disabled) return;

	      // if item has dropdown, just toggle it
	      if (newTab.dropdown) {
	        newTab.$set('open', newTab.open = !newTab.open);
	        return;
	      }

	      // OLD TAB
	      var old = {};

	      // deselect previously active tab
	      this.updatedList.forEach((function (tab) {
	        if (tab.active) {
	          old = tab;
	        }

	        if (tab.dropdown) {
	          tab.$set('open', false);
	          tab.dropdown.forEach((function (tab) {
	            if (tab.active) {
	              old = tab;
	            }
	          }).bind(_this));
	        }
	      }).bind(this));

	      // allow animation to complete before old tab gets hiden - fade out
	      old.$set('animate', false);

	      // let animation finish in 150ms and show new tab
	      setTimeout((function () {

	        // hide old tab
	        old.$set('active', false);

	        // SHOW NEW TAB
	        newTab.$set('active', true);

	        // do some fade-in animation
	        newTab.$set('animate', true);

	        // notify change to other components
	        _this.$dispatch('change::tab', newTab);
	      }).bind(this), this.fade ? 150 : 0);
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;

	    // add animate field if not present on the list objects
	    // this is rerquired as Vue needs to bind with data
	    var activeTab;
	    this.list.forEach((function (tab) {

	      // extend tab object with extra fields
	      var item = {
	        id: tab.id,
	        name: tab.name,
	        disabled: tab.disabled,
	        icon: tab.icon,
	        dropdown: tab.dropdown,
	        open: false,
	        active: tab.active,
	        animate: false
	      };

	      // add animate field to the active object
	      if (item.active) {
	        activeTab = item;
	        item.animate = true;
	      }

	      // add all objects to a flat array including dropdowns but excluding it's parents
	      if (item.dropdown) {
	        tab.dropdown.forEach((function (item) {
	          _this2.flatList.push(item);
	        }).bind(_this2));
	      } else {
	        _this2.flatList.push(item);
	      }

	      _this2.updatedList.push(item);
	    }).bind(this));

	    // we also set first tab if no active tab is found
	    if (!activeTab) {
	      this.updatedList[0].active = true;
	      this.updatedList[0].animate = true;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 141 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"nav nav-tabs\">\n    <li class=\"nav-item\" v-bind:class=\"{ dropdown: item.dropdown, open: item.open }\" v-for=\"item in updatedList\">\n        <span \n          class=\"nav-link btn {{ btnSize }}\" \n          v-bind:class=\"{ disabled: item.disabled, active: item.active, 'dropdown-toggle': item.dropdown }\" \n          v-on=\"click: select(item)\" \n          aria-haspopup=\"true\" \n          aria-expanded=\"item.open\" role=\"button\">\n          <icon name=\"{{ item.icon.name }}\" variant=\"{{ item.icon.variant }}\" v-if=\"item.icon\"></icon>\n          <a href=\"{{ item.href }}\" v-if=\"item.href\"> {{item.name}}</a>\n          <span v-if=\"!item.href\"> {{item.name}}</span>\n        </span>\n        <div class=\"dropdown-menu\" v-if=\"item.dropdown\">\n            <span \n              class=\"dropdown-item btn {{ btnSize }}\" \\\n              v-bind:class=\"{ disabled: subitem.disabled, active: subitem.active, 'dropdown-toggle': subitem.dropdown }\" \n              v-for=\"subitem in item.dropdown\" \n              v-on=\"click: select(subitem)\" \n              aria-haspopup=\"true\" \n              aria-expanded=\"subitem.dropdown.open\" \n              role=\"button\">\n            <icon \n              name=\"{{ subitem.icon.name }}\" \n              variant=\"{{ subitem.icon.variant }}\" \n              v-if=\"subitem.icon\" \n              aria-haspopup=\"true\" \n              aria-expanded=\"false\"></icon>\n              <a\n                href=\"{{ subitem.href }}\"\n                v-if=\"subitem.href\"> {{subitem.name}}\n              </a>\n              <span v-if=\"!subitem.href\">{{subitem.name}}</span>\n            </span>\n        </div>\n    </li>\n</ul>\n<div class=\"tab-content\">\n    <div \n      role=\"tabpanel\" \n      id=\"{{ item.id }}\" \n      class=\"tab-pane fade\" \n      v-bind:class=\"{ disabled: disabled, active: active, in: animate || !fade }\" \n      v-for=\"item in flatList\">\n      <slot name=\"tab-{{ $index + 1 }}\"></slot>\n    </div>\n</div>\n";

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(143);

	// TODO import {Tether} from 'vuestrap-tether'

	__webpack_require__(35);

	var _tooltipHtml = __webpack_require__(145);

	var _tooltipHtml2 = _interopRequireDefault(_tooltipHtml);

	// export component object
	exports['default'] = {
	  template: _tooltipHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      show: false
	    };
	  },
	  computed: {
	    tooltipAlignment: function tooltipAlignment() {
	      return !this.position || this.position === 'default' ? 'tooltip-top' : 'tooltip-' + this.position;
	    }
	  },
	  props: {
	    position: {
	      type: String,
	      'default': 'top'
	    },
	    triggers: {
	      type: Array,
	      'default': function _default() {
	        return ['click', 'focus', 'hover'];
	      }
	    },
	    text: {
	      type: String,
	      'default': ''
	    }
	  },
	  methods: {

	    /**
	     * Toggle 'show' state
	     * @param  {Object} e 
	     * @param  {Boolean} newState (if set use it's value)
	     */
	    toggle: function toggle(e, newState) {
	      var _this2 = this;

	      // change state
	      this.show = typeof newState !== 'undefined' ? newState : !this.show;

	      // Dispatch an event from the current vm that propagates all the way up to its $root
	      // element is shown
	      if (this.show) {
	        (function () {
	          var position = {
	            attachment: 'bottom center',
	            targetAttachment: 'top center'
	          };
	          if (_this2.position === 'bottom') {
	            position = {
	              attachment: 'top center',
	              targetAttachment: 'bottom center'
	            };
	          }
	          if (_this2.position === 'left') {
	            position = {
	              attachment: 'middle right',
	              targetAttachment: 'middle left'
	            };
	          }
	          if (_this2.position === 'right') {
	            position = {
	              attachment: 'middle left',
	              targetAttachment: 'middle right'
	            };
	          }

	          // let tether do the magic, after element is shown
	          Vue.nextTick(function () {
	            _this2._tether = new Tether({
	              element: _this2._tooltip,
	              target: _this2._trigger,
	              attachment: position.attachment,
	              targetAttachment: position.targetAttachment
	            });
	            _this2.$dispatch('show::tooltip');
	          });

	          // element gets hidden
	        })();
	      } else {
	          // remove the tether reference from the element
	          if (this._tether) {
	            this._tether.destroy();
	          }
	          this.$dispatch('show::tooltip');
	        }
	    },

	    /**
	     * Handle multiple event triggers
	     * @param  {Object} e 
	     */
	    _eventHandler: function _eventHandler(e) {

	      // stop propagation to avoid accidental closing on close::popover event
	      e.stopPropagation();

	      // if both click and hover are set, on desktop devices click will take precedence
	      if ((e.type === 'mouseenter' || e.type === 'mouseleave') && this.triggers.indexOf('click') !== -1) {
	        return;
	      }
	      // if both click and focus are set, focus will take precedence
	      if (e.type === 'click' && this.triggers.indexOf('focus') !== -1) {
	        return;
	      }

	      // hide popover
	      if (e.type === 'click') {
	        this.toggle(e);
	      } else {
	        if (e.type === 'mouseenter' || e.type === 'focus') {
	          this.toggle(e, true);
	        } else {
	          this.toggle(e, false);
	        }
	      }
	    }
	  },
	  events: {
	    'close::tooltip': function closeTooltip() {
	      this.toggle(null, false);
	    }
	  },
	  ready: function ready() {

	    // TODO
	    // animations

	    // configure tether
	    this._trigger = this.$els.trigger.children[0];
	    this._tooltip = this.$els.tooltip;
	    var _this = this;

	    // add listeners for specified triggers anb complementary click event
	    this._trigger.addEventListener('click', function (e) {
	      return _this._eventHandler(e);
	    });

	    if (this.triggers.indexOf('hover') !== -1) {
	      this._trigger.addEventListener('mouseenter', function (e) {
	        return _this._eventHandler(e);
	      });
	      this._trigger.addEventListener('mouseleave', function (e) {
	        return _this._eventHandler(e);
	      });
	    }
	    if (this.triggers.indexOf('focus') !== -1) {
	      this._trigger.addEventListener('focus', function (e) {
	        return _this._eventHandler(e);
	      });
	      this._trigger.addEventListener('blur', function (e) {
	        return _this._eventHandler(e);
	      });
	    }
	  },
	  beforeDestroy: function beforeDestroy() {

	    // clean up listeners
	    this._trigger.removeEventListener('click');
	    this._trigger.removeEventListener('mouseenter');
	    this._trigger.removeEventListener('mouseleave');
	    this._trigger.removeEventListener('focus');
	    this._trigger.removeEventListener('blur');
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 143 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 144 */,
/* 145 */
/***/ function(module, exports) {

	module.exports = "<span v-el:trigger>\r\n\t<slot></slot>\r\n</span> \r\n<div class=\"tooltip fade in {{tooltipAlignment}}\" v-show=\"show\" v-el:tooltip>\r\n\t<div class=\"tooltip-inner\">\r\n\t\t<div class=\"tooltip-arrow\"></div>\r\n\t  <div class=\"tooltip-content\">\r\n\t    <span v-html=\"text\"></span>\r\n\t  </div>\r\n\t</div>\r\n</div>";

/***/ },
/* 146 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);