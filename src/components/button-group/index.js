// import dependencies
import './_button-group.scss'
import '../buttons/_buttons.scss'
import template from './button-group.html'

// export component object
export default {
  template: template,
  replace: true,
    props: {
        vertical: {
            type: Boolean,
            default: false
        },
    },
}
