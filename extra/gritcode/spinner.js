require('./_spinner.scss');
module.exports = {
    template: require('./spinner.html'),
    replace: true, 
    data: function(){
        return {
            active: false
        };
    },
    props: {
        id: {
            type: String,
            required: true,
            default: ''
        },
        size: {
            type: String,
            default: 'md'
        },
        variant: {
            type: String,
            default: 'primary'
        },
        // if false spinner will be inline
        overlay: {
            type: Boolean,
            default: false
        },
        // if fixed spinner-wrapper will have position: fixed set
        fixed: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        show: function(){
            this.active = true;
        },
        hide: function(){
            this.active = false;
        }
    }, 
    events: {
        'show-spinner': function(id){
            if (id === this.id){
                this.show();
            }
        },
        'hide-spinner': function(id){
            if (id === this.id){
                this.hide();
            }
        }
    }
};