// import dependencies
import './_tables.scss'
import template from './tables.html'

// export component object
export default {
  template: template,
  replace: true,
  props: {
  	styled: {
  		type: Boolean,
      default: false, // as per new B4, .table this is now opt in 
  	},
  	striped: {
      type: Boolean,
      default: false,
    },
    value: {
    	type: Number,
    	default: 0, 
    },
    inverse: {
    	type: Boolean,
    	default: false,
    },
    border: {
    	type: Boolean,
    	default: false,
    },
    hover: {
    	type: Boolean,
    	default: false,
    },
    small: {
    	type: Boolean,
    	default: false,
    },
    responsive: {
    	type: Boolean,
    	default: false,
    },
    theadType: {
    	type: String,
    	default: '',
    },
  },
}
