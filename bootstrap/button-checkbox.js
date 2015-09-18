require('./_buttons.scss');
module.exports = {
    template: require('./button-checkbox.html'),
    replace: true,
    props: {
        list: {
          type: Array, 
          twoWay: true,
          default: [],
          required: true
        }
    }
};
