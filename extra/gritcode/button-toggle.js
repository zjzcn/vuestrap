require('./_button-toggle.scss');
module.exports = {
    template: require('./button-toggle.html'),
    replace: true,
    computed: {
    	btnVariant: function(){
    		return !this.variant || this.variant === 'default' ? 'btn-primary' : 'btn-' + this.variant;
    	},
    	btnSize: function(){
    		return !this.size || this.size === 'default' ? '' : 'btn-' + this.size;
    	}
    },
    props: {
        model: {
            type: Boolean,
            twoWay: true,
            required: true
        },
        // sm | md | lg
        size: {
            type: String,
            default: 'md'
        },
        // default | primary | success | info | warning | danger
        variant: {
            type: String,
            default: 'primary'
        },
        text: {
            type: Object,
            default: ''
        }
    },
    methods: {
        show: function(){
            this.active = true;
        },
        hide: function(){
            this.active = false;
        }
    }
};
