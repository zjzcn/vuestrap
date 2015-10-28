require('./_offcanvas-menu.scss');
module.exports = {
  template: require('./offcanvas-menu.html'),
  replace: true,
  data() {
    return {
      show: false,
    };
  },
  props: {
    id: {
        type: String,
        required: true,
        default: ''
    },
    width: {
      default: '15em',
    },
    animation: {
      default: 'ease',
    },
    align: {
      default: 'left',
    },
  },
  methods: {
      toggle() {
          this.show = !this.show;
          if (this.show) {
            this.$dispatch('show::offcanvas-menu');
          } else {
            this.$dispatch('hide::offcanvas-menu');
          }
      },
  },
  events: {
      'toggle::offcanvas-menu': function(id) {
          if (id === this.id){
              this.toggle();
          }
      }
  }
};
