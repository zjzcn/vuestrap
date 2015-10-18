require('./_forms.scss');
var uniqueId = require('./make-id.js');
module.exports = {
    template: require('./form-input.html'),
    replace: true,
    computed: {
        inputState: function(){
            return !this.state || this.state === 'default' ? '' : 'has-' + this.state;
        },
        stateIconType: function(){
            return !this.stateIcon || this.stateIcon === 'default' ? '' : 'form-control-' + this.state;
        },
        inputSize: function(){
    		return !this.size || this.size === 'default' ? '' : 'form-control-' + this.size;
    	}
    },
    props: {
        model: {
            twoWay: true,
            required: true,
            type: String
        },
        type: {
            type: String,
            default: 'text',
            required: true
        },
        id: {
            type: String,
            default: uniqueId
        },
    	label: {
    		type: String,
    		default: ''
    	},
    	placeholder: {
    		type: String,
    		default: ''
    	},
    	description: {
    		type: String,
    		default: ''
    	},
        size: {
            type: String,
            default: ''
        },
        state: {
            type: String,
            default: ''
        },
        stateIcon: {
            type: Boolean,
            default: true
        }

    }
};
