require('./_dropdown.scss');
module.exports = {
    template: require('./dropdown-select.html'),
    replace: true,
    data: function() {
        return {
            show: false
        };
    },
    computed: {
        btnVariant: function(){
            return !this.variant || this.variant === 'standard' ? '' : 'btn-' + this.variant;
        },
        btnSize: function(){
            return !this.size || this.size === 'standard' ? '' : 'btn-' + this.size;
        }
    },
    props: {
        model: {
            type: Object, 
            default: false,
            required: true
        }, 
        list: {
            type: Array, 
            default: [],
            required: true
        },
        icon: {
            type: String,
            default: ''
        },
        caret: {
            type: Boolean,
            default: true
        },
        variant: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: ''
        }
    },
    methods: {
        select: function(item) {
            this.model = item;
            this.show = false;
            // Dispatch an event from the current vm that propagates all the way up to its $root
            this.$dispatch('hide::dropdown');
        }
    }
};
