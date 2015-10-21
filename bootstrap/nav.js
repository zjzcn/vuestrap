require('./_nav.scss');
module.exports = {
  template: require('./nav.html'),
  replace: true,
  data() {
    return {
      updatedList: [],
    };
  },

  computed: {
    navType() {
      return !this.type || this.type === 'default' ? '' : `nav-${this.type}`;
    },

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
    type: {
      type: String,
      default: '',
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
    fade: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    select(newTab) {
      // IGNORE DISABLED
      if (newTab.disabled) return;

      // OLD TAB
      var old = {};

      // deselect previously active tab
      this.updatedList.forEach((tab) => {
        if (tab.active) {
          old = tab;
        }
      }.bind(this));

      // allow animation to complete before old tab gets hiden - fade out
      old.animate = false;

      // let animation finish in 150ms and show new tab
      setTimeout(() => {

        // hide old tab
        old.active = false;

        // SHOW NEW TAB
        newTab.active = true;

        // do some fade-in animation
        newTab.animate = true;

        // notify change to other components
        this.$dispatch('change::tab', newTab);

      }.bind(this), this.type === 'tabs' ? 150 : 0);
    },
  },
  ready() {
    // add animate field if not present on the list objects
    // this is rerquired as Vue needs to bind with data
    var activeTab;
    this.list.forEach((tab) => {

      // extend tab object with extra fields
      var item = {
        id: tab.id,
        name: tab.name,
        disabled: tab.disabled,
        active: tab.active,
        animate: false,
      };

      // add animate field to the active object
      if (item.active) {
        activeTab = item;
        item.animate = true;
      }

      this.updatedList.push(item);
    }.bind(this));

    // we also set first tab if no active tab is found
    if (!activeTab) {
      this.updatedList[ 0 ].active = true;
      this.updatedList[ 0 ].animate = true;
    }
  },
};
