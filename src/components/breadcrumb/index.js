// import dependencies
import './_breadcrumb.scss'
import template from './breadcrumb.html'

// export component object
export default {
  template: template,
  replace: true,
  props: {
    list: {
      type: Array,
      default: [],
      required: true
    },
  },
}
