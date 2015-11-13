import example from './components/example'
import alertDemo from './examples/alert'
import accordionDemo from './examples/accordion'
import breadcrumbDemo from './examples/breadcrumb'
import buttonsDemo from './examples/buttons'
import buttonGroupDemo from './examples/button-group'
import buttonCheckboxDemo from './examples/button-checkbox'
import buttonRadioDemo from './examples/button-radio'
import cardDemo from './examples/card'
import carouselDemo from './examples/carousel'
import collapseDemo from './examples/collapse'
import dropdownDemo from './examples/dropdown'
import dropdownSelectDemo from './examples/dropdown-select'
import formChekboxDemo from './examples/form-checkbox'
import formInputDemo from './examples/form-input'
import formSelectDemo from './examples/form-select'
import formTextareaDemo from './examples/form-textarea'
import formRadioDemo from './examples/form-radio'
import iconsDemo from './examples/icons'
import imagesDemo from './examples/images'
import jumbotronDemo from './examples/jumbotron'
import labelsDemo from './examples/labels'
import listGroupDemo from './examples/list-group'
import mediaDemo from './examples/media'
import modalDemo from './examples/modal'
import navDemo from './examples/nav'
import navbarDemo from './examples/navbar'
import pagerDemo from './examples/pager'
import paginationDemo from './examples/pagination'
import popoverDemo from './examples/popover'
// import progressDemo from './examples/progress'
// import tablesDemo from './examples/tables'
// import tabsDemo from './examples/tabs'
import tooltipDemo from './examples/tooltip'

// demo each component in index.html
Vue.config.debug = true
new Vue({
  el: '#app',
  data: {

  },
  components: {
  	'example': example,
    'accordion-demo': accordionDemo,
    'alert-demo': alertDemo,
    'breadcrumb-demo': breadcrumbDemo,
    'buttons-demo': buttonsDemo,
    'button-group-demo': buttonGroupDemo,
    'button-checkbox-demo': buttonCheckboxDemo,
    'button-radio-demo': buttonRadioDemo,
    'card-demo': cardDemo,
    'carousel-demo': carouselDemo,
    'collapse-demo': collapseDemo,
    'dropdown-demo': dropdownDemo,
    'dropdown-select-demo': dropdownSelectDemo,
    'form-chekbox-demo': formChekboxDemo,
    'form-input-demo': formInputDemo,
    'form-select-demo': formSelectDemo,
    'form-textarea-demo': formTextareaDemo,
    'form-radio-demo': formRadioDemo,
    'icons-demo': iconsDemo,
    'images-demo': imagesDemo,
    'jumbotron-demo': jumbotronDemo,
    'labels-demo': labelsDemo,
    'list-group-demo': listGroupDemo,
    'media-demo': mediaDemo,
    'modal-demo': modalDemo,
    'nav-demo': navDemo,
    'navbar-demo': navbarDemo,
    'pager-demo': pagerDemo,
    'pagination-demo': paginationDemo,
    'popover-demo': popoverDemo,
    // 'progress-demo': progressDemo,
    // 'tables-demo': tablesDemo,
    // 'tabs-demo': tabsDemo,
    'tooltip-demo': tooltipDemo,
  },
  methods: {
    closeDropdownsAndPopovers() {
      this.$broadcast('close::popover')
      this.$broadcast('close::dropdown')
    },
  },
  ready() {

    // we need to reposition tether elements as soon as document is ready
    // this workaround is for the situations where popovers are somewhere
    // in the middle of the page and user refreshes the browser
    // setTimeout(() => {
    //   Tether.position()
    // },500)
  },
})
