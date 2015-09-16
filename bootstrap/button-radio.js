require('./_buttons.scss');
module.exports = {
    template: require('./button-radio.html'),
    replace: true,
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
        }
    }
};
