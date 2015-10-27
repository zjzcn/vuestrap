require('./_truncate.scss');
module.exports = {
  template: require('./truncate.html'),
  replace: true,
  computed: {
    truncateWidth() {
      return (isNaN(this.width)) ? this.width : `${this.width}px`;
    },
  },
  props: {
    width: {
      default: '100px',
    },
  },
};
