// import dependencies
import '../forms/_forms.scss'
import '../custom-forms/_custom-forms.scss'
import template from './form-checkbox.html'

// export component object
export default {
  template: template,
  replace: true,
  computed: {
     inputState() {
      return !this.state || this.state === `default` ? `` : `has-${this.state}`
    },
  },
  props: {
    list: {
      type: Array,
      twoWay: true,
      default: [],
      required: true
    },
    custom: {
    	type: Boolean,
    	default: true
    },
    vertical: {
    	type: Boolean,
    	default: false
    },
    state: {
    	type: String,
    	default: 'default'
    },
	},
}
