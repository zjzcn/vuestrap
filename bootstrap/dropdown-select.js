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
            return !this.variant || this.variant === 'default' ? '' : 'btn-' + this.variant;
        },
        btnSize: function(){
            return !this.size || this.size === 'default' ? '' : 'btn-' + this.size;
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
        alignment: {
            type: String,
            default: "left"
        },
        size: {
            type: String,
            default: ''
        },
        variant: {
            type: String,
            default: ''
        },
        defaultOption: {
            type: String,
            default: ''
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
        },
        select: function(item) {
            this.model = item;
            this.show = false;
            // Dispatch an event from the current vm that propagates all the way up to its $root
            this.$dispatch('select::dropdown', item);
        }
    },
    events: {
      'close::dropdown': function(val){
          this.show = false;
      }
    }
};
