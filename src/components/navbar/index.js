// import dependencies
import './_navbar.scss'
import '../buttons/_buttons.scss'
import '../nav/_nav.scss'
import '../forms/_forms.scss'
import template from './navbar.html'

// export component object
export default {
  template: template,
  replace: true,
  computed: {
    navbarType() {
      return !this.type || this.type === `default` ? `navbar-light` : `navbar-dark`
    },
  	navbarVariant() {
      return !this.variant || this.variant === `default` ? `bg-faded` : `bg-${this.variant}`
    },
    navbarfixed() {
      return !this.fixed ? `` : `navbar-fixed-${this.fixed}`
    },
  },
  props: {
  	type: {
      type: String,
      default: 'light',
    },
  	variant: {
      type: String,
      default: 'default',
    },
    fixed: {
    	type: String,
    	default: '',
    }
  },
}
