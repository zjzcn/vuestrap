require('./_forms.scss');
require('./_form-input.scss');
var uniqueId = require('./make-id.js');
module.exports = {
    template: require('./form-input.html'),
    replace: true,
    computed: {
        formControlState: function(){
            if (this.model.valid) {
                return 'form-control-success';
            }
            return !this.state || this.state === 'default' ? '' : 'form-' + this.state;
        },
        formGroupState: function(){
            if (this.model.valid) {
                return 'has-success';
            }
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
            type: Object,
            twoWay: true,
            required: true,
        },
        type: {
            type: String,
            default: 'text',
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
        },
        validation: {
            type: Object,
            default: ''
        },
        inline: {
            type: Boolean,
            default: true
        },
        help: {
            type: String,
            default: ""
        }
    }
};
