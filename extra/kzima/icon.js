require('./_icon.scss');
module.exports = {
    template: require('./icon.html'),
    replace: true,
    computed: {
      iconsSize(){
        return !this.size ? `icons-sm` : `icons-${this.size}`
      },
      iconsAlign(){
        return !this.align ? `` : `icons-${this.align}`
      },
      iconsVariant(){
        return !this.variant ? `` : `icons-${this.variant}`
      },
      iconsBackground(){
        let bg = this.background.split('-');
        bg = (bg[1]) ? bg[1] : 'filled';
        return !this.background ? `` : `icons-${bg}`
      },
    },
   	props: {
   		name: {
        type: String
      }, 
      background: {
        type: String, 
        default: '',
      },
      align: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: 'sm'
      },
      type: {
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