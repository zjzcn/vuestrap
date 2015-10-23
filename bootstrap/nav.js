require('./_nav.scss');
module.exports = {
  template: require('./nav.html'),
  replace: true,
  computed: {
    btnVariant() {
      return !this.variant || this.variant === 'default' ? 'btn-default' : `btn-${this.variant}`;
    },

    btnSize() {
      return !this.size || this.size === 'default' ? '' : `btn-${this.size}`;
    },
  },
  props: {
    list: {
      type: Array,
      default: [],
      required: true,
    },
    state: {
      type: String,
      default: 'standard',
    },
    size: {
      type: String,
      default: 'md',
    },
    variant: {
      type: String,
      default: 'primary',
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    select(newTab) {

      // IGNORE DISABLED
      if (newTab.disabled) return;

      // if item has dropdown, just toggle it
      if (newTab.dropdown) {
        newTab.$set('open', newTab.open = !newTab.open);
        return;
      }

      // deselect previously active tab
      this.list.forEach((tab) => {
        if (tab.active) {
          // HIDE old Tab
          tab.$set('active', false);
        }

        if (tab.dropdown) {
          tab.$set('open', false);
          tab.dropdown.forEach((tab) => {
            if (tab.active) {
              // HIDE old Tab
              tab.$set('active', false);
            }
          }.bind(this));
        }
      }.bind(this));

      // SHOW NEW TAB
      newTab.$set('active', true);

      // notify change to the other components
      this.$dispatch('change::tab', newTab);

    },
  },
  ready() {

    var activeTab;
    this.list.forEach((tab) => {

      // check if any type is active
      if (tab.active) {
        activeTab = tab;
      }

    }.bind(this));

    // we also set first tab if no active tab is found
    if (!activeTab) {
      this.list[ 0 ].active = true;
      this.list[ 0 ].animate = true;
    }
  },
};
