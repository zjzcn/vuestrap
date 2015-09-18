require('./_button-group.scss');
require('./_buttons.scss');
module.exports = {
    template: require('./button-group.html'),
    replace: true,
    props: {
        vertical: {
            type: Boolean,
            default: false
        }
    }
};
