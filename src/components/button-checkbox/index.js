// import dependencies
import '../buttons/_buttons.scss'
import '../button-group/_button-group.scss'
import template from './button-checkbox.html'

// export component object
export default {
  template: template,
  replace: true,
  computed: {
    btnVariant() {
      return !this.variant || this.variant === `default` ? `btn-secondary` : `btn-${this.variant}`
    },
    btnSize() {
      return !this.size || this.size === `default` ? `` : `btn-${this.size}`
    },
  },
  props: {
    list: {
      type: Array,
      default: [],
      twoWay: true,
      required: true
    },
    size: {
      type: String,
      default: 'md'
    },
    variant: {
      type: String,
      default: 'default'
    },
  },
}
