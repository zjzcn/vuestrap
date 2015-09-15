require('./_alert.scss');
require('./_buttons.scss');
module.exports = {
    template: require('./_alert.html'),
    replace: true,
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
        type: {
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
