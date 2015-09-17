require('./_dropdown.scss');
module.exports = {
    template: require('./dropdown.html'),
    replace: true,
    data: function() {
        return {
            show: false
        };
    },
    computed: {
    	btnVariant: function(){
    		return !this.variant || this.variant === 'standard' ? '' : 'btn-' + this.variant;
    	}
    },
    props: {
        icon: {
            type: String,
            default: ''
        },
        caret: {
        	type: Boolean,
        	default: true
        },
        value: {
        	type: String,
            default: ''
        },
        variant: {
        	type: String,
            default: ''
        }
    },
    methods: {
        toggle: function() {
            // hide an alert
            this.show = !this.show;
            // Dispatch an event from the current vm that propagates all the way up to its $root
            if (this.show) {
            	this.$dispatch('show::dropdown');
            } else {
            	this.$dispatch('hide::dropdown');
            }
        }
    }
};
