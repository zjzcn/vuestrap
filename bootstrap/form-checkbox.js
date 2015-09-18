require('./_forms.scss');
module.exports = {
    template: require('./form-checkbox.html'),
    replace: true,
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
