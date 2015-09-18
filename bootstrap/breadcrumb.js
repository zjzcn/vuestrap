require('./_breadcrumb.scss');
module.exports = {
    template: require('./breadcrumb.html'),
    replace: true,
    props: {
        list: {
          type: Array, 
          default: [],
          required: true
        }
    }
};
