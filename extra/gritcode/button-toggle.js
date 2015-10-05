require('./_button-toggle.scss');
module.exports = {
    template: require('./button-toggle.html'),
    replace: true, 
    props: {
        model: {
            type: Boolean,
            twoWay: true,
            required: true
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