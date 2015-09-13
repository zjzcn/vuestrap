require('./_button-group.scss');
require('./_buttons.scss');
module.exports = {
    template: require('./_button-group.html'),
    replace: true,
    props: {
        vertical: {
            type: Boolean,
            default: false
        }
    }
};
