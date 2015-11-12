require('./_labels.scss');
module.exports = {
    template: require('./labels.html'),
    replace: true,
    computed: {
        labelVariant: function(){
            return !this.variant || this.variant === 'default' ? 'label-default' : 'label-' + this.variant;
        },
        labelType: function(){
            return !this.type ? '' : 'label-' + this.type;
        }
    },
    props: {
        variant: {
        	type: String,
        	default: 'primary'
        },
        type: {
            type: String,
            default: ''
        }
    }
};
