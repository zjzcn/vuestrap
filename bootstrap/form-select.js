require('./_forms.scss');
var uniqueId = require('./make-id.js');
module.exports = {
    template: require('./form-select.html'),
    replace: true,
    computed: {
        allOptions: function(){
            return [this.defaultOption].concat(this.options);
        },
        inputState: function(){
            return !this.state || this.state === 'standard' ? '' : 'has-' + this.state;
        },
    },
    props: {
    	model: {
    		twoWay: true,
    		required: true
    	},
    	options: {
    		type: Array,
    		required: true,
    	},
        id: {
            type: String,
            default: uniqueId
        }, 
    	label: {
    		type: String,
    		default: false
    	},
    	defaultOption: {
    		type: Object,
    		default: ''
    	},
    	description: {
    		type: String,
    		default: false
    	},
        state: {
            type: String,
            default: ''
        },
        multiple: {
            type: Boolean,
            default: false
        }
    }
};