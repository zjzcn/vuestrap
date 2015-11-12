require('./_forms.scss');
module.exports = {
    template: require('./form-radio.html'),
    replace: true,
    computed: {
        inputState: function(){
            return !this.state || this.state === 'default' ? '' : 'has-' + this.state;
        }
    },
    props: {
    	model: {
    		type: Object,
    		twoWay: true,
    		required: true
    	},
        name: {
            type: String,
            default: 'options'
        },
        list: {
          type: Array,
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
        validation: {
            type: Object,
            default: ''
        }
    },
    ready() {
        console.log(this.name);
    }
};
