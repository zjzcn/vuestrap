require('./_forms.scss');
module.exports = {
    template: require('./form-checkbox.html'),
    replace: true,
    computed: {
        inputState: function(){
            return !this.state || this.state === 'standard' ? '' : 'has-' + this.state;
        }
    },
    props: {
        list: {
          type: Array, 
          twoWay: true,
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
