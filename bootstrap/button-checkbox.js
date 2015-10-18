require('./_buttons.scss');
module.exports = {
    template: require('./button-checkbox.html'),
    replace: true,
    computed: {
    	btnVariant: function(){
    		return !this.variant || this.variant === 'default' ? 'btn-primary' : 'btn-' + this.variant;
    	},
        btnSize: function(){
    		return !this.size || this.size === 'default' ? '' : 'btn-' + this.size;
    	}
    },
    props: {
        list: {
          type: Array,
          twoWay: true,
          default: [],
          required: true
      },
      // sm | md | lg
      size: {
          type: String,
          default: 'md'
      },
      // default | primary | success | info | warning | danger
      variant: {
          type: String,
          default: 'primary'
      },
    }
};
