require('./_forms.scss');
require('./_custom-forms.scss');
module.exports = {
    template: require('./form-checkbox.html'),
    replace: true,
    computed: {
        inputState: function(){
            return !this.state || this.state === 'default' ? '' : 'has-' + this.state;
        }
    },
    props: {
        list: {
          type: Array,
          twoWay: true,
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
