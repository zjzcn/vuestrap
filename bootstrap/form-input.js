require('./_forms.scss');
var uniqueId = require('./make-id.js');
module.exports = {
    template: require('./form-input.html'),
    replace: true,
    computed: {
        inputState: function(){
            return !this.state || this.state === 'standard' ? '' : 'has-' + this.state;
        },
        stateIconType: function(){
            return !this.stateIcon || this.stateIcon === 'standard' ? '' : 'form-control-' + this.state;
        }
    },
    props: {
    	id: {
    		type: String,
    		default: uniqueId
    	}, 
        model: {
            twoWay: true,
            required: true, 
            type: String
        },
    	label: {
    		type: String,
    		default: false
    	},
    	type: {
    		type: String,
    		default: 'text'
    	},
    	placeholder: {
    		type: String,
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
        stateIcon: {
            type: Boolean, 
            default: true
        }

    }
};