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
    		return !this.variant || this.variant === 'default' ? 'btn-primary' : 'btn-' + this.variant;
    	},
        btnSize: function(){
    		return !this.size || this.size === 'default' ? '' : 'btn-' + this.size;
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
        aligment: {
        	type: String,
            default: 'left'
        },
        size: {
        	type: String,
            default: 'default'
        },
        variant: {
        	type: String,
            default: 'default'
        }
    },
    methods: {
        toggle: function(e) {
            // hide an alert
            this.show = !this.show;
            // Dispatch an event from the current vm that propagates all the way up to its $root
            if (this.show) {
            	this.$dispatch('show::dropdown');
                e.stopPropagation();
            } else {
            	this.$dispatch('hide::dropdown');
            }
        }
    },
    events: {
      'close::dropdown': function(val){
          this.show = false;
      }
    }
};
