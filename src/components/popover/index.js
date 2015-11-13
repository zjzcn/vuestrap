// import dependencies
import './_popover.scss'
// TODO import {Tether} from 'vuestrap-tether'
import '../buttons/_buttons.scss'
import template from './popover.html'

// export component object
export default {
  template: template,
  replace: true,
  data() {
    return {
      show: false,
    }
  },
  computed: {
    popoverAlignment() {
      return !this.position || this.position === `default` ? `popover-top` : `popover-${this.position}`
    }
  },
  props: {
    position: {
      type: String,
      default: 'top',
    },
    triggers: {
      type: Array,
      default() {
        return ['click', 'focus']
      }
    },
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
  methods: {

    /**
     * Toggle 'show' state
     * @param  {Object} e 
     * @param  {Boolean} newState (if set use it's value)
     */
  	toggle(e, newState) {

      // change state
      this.show = (typeof newState !== 'undefined') ? newState : !this.show

      // Dispatch an event from the current vm that propagates all the way up to its $root
      // element is shown
      if (this.show) {
        let position = {
          attachment: 'bottom center',
          targetAttachment: 'top center'
        }
        if (this.position === 'bottom') {
          position = {
            attachment: 'top center',
            targetAttachment: 'bottom center'
          }
        }
        if (this.position === 'left') {
          position = {
            attachment: 'middle right',
            targetAttachment: 'middle left'
          }
        }
        if (this.position === 'right') {
          position = {
            attachment: 'middle left',
            targetAttachment: 'middle right'
          }
        }
        
        // let tether do the magic, after element is shown
        Vue.nextTick(() => {
          this._tether = new Tether({
            element: this._popover,
            target: this._trigger,
            attachment: position.attachment,
            targetAttachment: position.targetAttachment,
          })
          this.$dispatch('show::popover')
        })

      // element gets hidden
      } else {
        if (this._tether) {
          this._tether.destroy()
        }
        this.$dispatch('show::popover')
      }
    },

    /**
     * Handle multiple event triggers
     * @param  {Object} e 
     */
    _eventHandler(e) {

      // stop propagation to avoid accidental closing on close::popover event
      e.stopPropagation();
      
      // if both click and hover are set, on desktop devices click will take precedence
      if ((e.type === 'mouseenter' || e.type ==='mouseleave') && this.triggers.indexOf('click') !== -1) {
        return
      }
      // if both click and focus are set, focus will take precedence
      if (e.type === 'click' && this.triggers.indexOf('focus') !== -1) {
        return
      }

      // hide popover
      if (e.type === 'click') {
        this.toggle(e)
      } else {
        if (e.type === 'mouseenter' || e.type === 'focus') {
          this.toggle(e, true)
        } else {
          this.toggle(e, false)
        }
      }
    }
  },
  events: {
    'close::popover'() {
      this.toggle(null, false)
    },
  },
  ready() {
    
    // TODO 
    // animations
  
    // configure tether
    this._trigger = this.$els.trigger.children[0]
    this._popover = this.$els.popover
    const _this = this

    // add listeners for specified triggers anb complementary click event
    this._trigger.addEventListener('click', (e) => _this._eventHandler(e))

    if (this.triggers.indexOf('hover') !== -1) {
      this._trigger.addEventListener('mouseenter', (e) => _this._eventHandler(e))
      this._trigger.addEventListener('mouseleave', (e) => _this._eventHandler(e))
    }
    if (this.triggers.indexOf('focus') !== -1) {
      this._trigger.addEventListener('focus', (e) => _this._eventHandler(e))
      this._trigger.addEventListener('blur', (e) => _this._eventHandler(e))
    }
    
  },
  beforeDestroy() {

    // clean up listeners
    this._trigger.removeEventListener('click');
    this._trigger.removeEventListener('mouseenter');
    this._trigger.removeEventListener('mouseleave');
    this._trigger.removeEventListener('focus');
    this._trigger.removeEventListener('blur');
  }
}
