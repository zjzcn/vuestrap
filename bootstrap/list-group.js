require('./_list-group.scss');
module.exports = {
    template: require('./list-group.html'),
    replace: true,
    // computed: {
    //     labelVariant: function(){
    //         return !this.variant || this.variant === 'standard' ? '' : 'label-' + this.variant;
    //     },
    //     labelType: function(){
    //         return !this.type ? '' : 'label-' + this.type;
    //     }
    // },
    // props: {
    //     variant: {
    //     	type: String,
    //     	default: 'primary'
    //     },
    //     type: {
    //         type: String,
    //         default: ''
    //     }
    // }
};
