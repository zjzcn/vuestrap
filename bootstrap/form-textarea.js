require('./_forms.scss');
var uniqueId = require('./make-id.js');
module.exports = {
    template: require('./form-textarea.html'),
    replace: true,
    computed: {
        formGroupState: function(){
            if (this.model.valid) {
                return 'has-success';
            }
            return !this.state || this.state === 'default' ? '' : 'has-' + this.state;
        },
        formControlState: function(){
            if (this.model.valid) {
                return 'form-control-success';
            }
            return !this.state || this.state === 'default' ? '' : 'form-' + this.state;
        },
        stateIconType: function(){
            return !this.stateIcon || this.stateIcon === 'default' ? '' : 'form-control-' + this.state;
        },
    },
    props: {
    	model: {
            type: Object,
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
        help: {
            type: String,
            default: ''
        },
        state: {
            type: String,
            default: ''
        },
        rows: {
        	type: Number,
        	default: 3
        },
        inline: {
            type: Boolean,
            default: true
        },
        stateIcon: {
            type: Boolean,
            default: false
        },
        validation: {
            type: Object,
            default: ''
        },
    }
};
