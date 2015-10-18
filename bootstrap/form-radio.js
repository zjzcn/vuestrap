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
    		type: String,
    		twoWay: true,
    		required: true
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
        }
    }
};
