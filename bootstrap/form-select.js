require('./_forms.scss');
var uniqueId = require('./make-id.js');
module.exports = {
    template: require('./form-select.html'),
    replace: true,
    computed: {
        allOptions: function(){
            if (this.defaultOption) {
                return [this.defaultOption].concat(this.options);
            }
            return this.options;
        },
        inputState: function(){
            return !this.state || this.state === 'default' ? '' : 'has-' + this.state;
        },
        inputSize: function(){
    		return !this.size || this.size === 'default' ? '' : 'form-control-' + this.size;
    	}
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
        size: {
            type: String,
            default: 'md'
        },
        multiple: {
            type: Boolean,
            default: false
        },
        inline: {
            type: Boolean,
            default: true
        },
        help: {
            type: String,
            default: true
        }
    },
    watch: {
        'model': function(val, oldVal){
            if (val === oldVal) return;
            // Dispatch an event from the current vm that propagates all the way up to its $root
            this.$dispatch('select::option', val);
        }
    }
};
