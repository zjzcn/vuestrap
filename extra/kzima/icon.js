require('./icon.scss');
module.exports = {
    template: require('./icon.html'),
    replace: true,
   	props: {
   		name: {
        type: String
      }, 
      size: {
   			type: String,
        default: 'sm'
   		}, 
      align: {
        type: String,
        default: ''
      },
      variant: {
        type: String,
        default: 'standard'
      },
      path: {
        type: String, 
        default: function () { return 'node_modules/vuestrap/core/icons/sprite.svg'; }
      }
   	}
};