require('./_forms.scss');
module.exports = {
    template: require('./form-radio.html'),
    replace: true,
    computed: {
        inputState: function(){
            return !this.state || this.state === 'standard' ? '' : 'has-' + this.state;
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
        vertical: {
        	type: Boolean, 
        	default: false
        },
        state: {
        	type: String, 
        	default: 'standard'
        }
    }
};
