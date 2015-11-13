import './_buttons.scss'
import template from './buttons.html'

// export component object
export default {
  template: template,
  replace: true,
  computed: {
    btnBlock() {
      return this.block ? `btn-block` : ``
    },
    btnVariant() {
      return !this.variant || this.variant === `default` ? `btn-secondary` : `btn-${this.variant}`
    },
    btnSize() {
      return !this.size || this.size === `default` ? `` : `btn-${this.size}`
    },
  },
  props: {
  	block: {
    	type: Boolean,
      default: false
    },
    disabled: {
    	type: Boolean,
      default: false
    },
    href: {
    	type: String,
      default: ''
    },
    role: {
    	type: String,
      default: ''
    },
  	size: {
      type: String,
      default: 'md'
    },
    type: {
    	type: String,
      default: 'button'
    },
    variant: {
      type: String,
      default: 'default'
    },
  },
  methods: {

  }
}
