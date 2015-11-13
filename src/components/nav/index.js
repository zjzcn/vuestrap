// import dependencies
import './_nav.scss'
import './_nav-override.scss'
import template from './nav.html'

// export component object
export default {
  template: template,
  replace: true,
  props: {
    vertical: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: '',
    },
  },
}
