require('./_forms.scss');
var uniqueId = require('./make-id.js');
module.exports = {
    template: require('./_form-select.html'),
    replace: true,
    computed: {
        'allOptions': function(){
            return this.options;//.unshift(this.defaultOption);
        }
    },
    props: {
    	id: {
    		type: String,
    		default: uniqueId
    	}, 
    	model: {
    		twoWay: true,
    		required: true
    	},
    	options: {
    		type: Array,
    		required: true,
    	},
    	label: {
    		type: String,
    		default: false
    	},
    	type: {
    		type: String,
    		default: 'text'
    	},
    	defaultOption: {
    		type: Object,
    		default: ''
    	},
    	description: {
    		type: String,
    		default: false
    	}
    }
};