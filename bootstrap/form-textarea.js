require('./_forms.scss');
var uniqueId = require('./make-id.js');
module.exports = {
    template: require('./form-textarea.html'),
    replace: true,
    computed: {
        inputState: function(){
            return !this.state || this.state === 'default' ? '' : 'has-' + this.state;
        },
    },
    props: {
    	model: {
    		twoWay: true,
    		required: true
    	},
        id: {
            type: String,
            default: uniqueId
        },
    	label: {
    		type: String,
    		default: false
    	},
    	description: {
    		type: String,
    		default: false
    	},
        state: {
            type: String,
            default: ''
        },
        rows: {
        	type: Number,
        	default: 3
        }
    }
};
