require('./_forms.scss');
var uniqueId = require('./_make-id.js');
module.exports = {
    template: require('./_form-input.html'),
    replace: true,
    props: {
    	id: {
    		type: String,
    		default: uniqueId
    	}, 
        model: {
            twoWay: true,
            required: true
        },
    	label: {
    		type: String,
    		default: false
    	},
    	type: {
    		type: String,
    		default: 'text'
    	},
    	placeholder: {
    		type: String,
    		default: ''
    	},
    	description: {
    		type: String,
    		default: false
    	}
    }
};