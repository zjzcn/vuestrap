require('./_card.scss');
require('./_buttons.scss');
require('./_images.scss');
require('./_list-group.scss');
module.exports = {
    template: require('./card.html'),
    replace: true,
    computed: {
    	cardVariant: function(){
            var custom = this.variant === 'inverse' ?  ' card-custom' : ''; // add custom background for inverse option 
    		return !this.variant || this.variant === 'standard' ? '' : 'card-' + this.variant + custom;
    	},
    	isInverse: function(){
    		return this.type == 'image-overlay';
    	}
    },
    props: {
    	header: {
    		type: String,
    		default: false
    	},
    	image: {
    		type: Object,
    		default: false
    	},
        title: {
            type: String,
            default: false
        },
        text: {
            type: String,
            default: false
        },
        list: {
        	type: Array,
        	default: false
        },
        buttons: {
        	type: Array,
        	default: false
        },
        links: {
        	type: Array,
        	default: false
        },
        // left | right | center
        align: {
        	type: String,
            default: 'left'
        },
        footer: {
        	type: String,
        	default: false
        },
        // image-overlay | inverse
        type: {
        	type: String,
            default: false
        },
        // primary | success | info | warning | danger 
        variant: {
        	type: String,
            default: false
        }
    }
};