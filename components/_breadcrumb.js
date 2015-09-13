require('./_breadcrumb.scss');
module.exports = {
    template: require('./_breadcrumb.html'),
    replace: true,
    props: {
        list: {
          type: Array, 
          default: [],
          required: true
        }
    }
};
