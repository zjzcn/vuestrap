require('./_alert.scss');
require('./_buttons.scss');
module.exports = {
    template: require('./alert.html'),
    replace: true,
    computed: {
    	alertState: function(){
    		return !this.state || this.state === 'default' ? 'alert-success' : 'alert-' + this.state;
    	}
    },
    props: {
        // required
        show: {
            type: Boolean,
            default: false,
            required: true
        },
        message: {
            type: String,
            default: '',
            required: true
        },
        state: {
            type: String,
            default: 'success'
        },
        dismissible: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        dismiss: function() {
            // hide an alert
            this.show = false;
            // Dispatch an event from the current vm that propagates all the way up to its $root
            this.$dispatch('dismiss::alert');
        }
    }
};
