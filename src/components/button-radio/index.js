// import dependencies
import '../buttons/_buttons.scss'
import template from './button-radio.html'

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
    btnActive() {
      return item.value
    },
  },
  props: {
    model: {
      type: String,
      twoWay: true,
      required: true
    },
    list: {
      type: Array,
      default: [],
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
  ready() {
    console.log(this.btnVariant)
  }
}
