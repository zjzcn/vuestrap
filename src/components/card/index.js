// import dependencies
import './_card.scss'
import '../buttons/_buttons.scss'
import '../images/_images.scss'
import '../list-group/_list-group.scss'
import template from './card.html'

// export component object
export default {
  template: template,
  replace: true,
  computed: {
    cardVariant() {
      return !this.variant || this.variant === `default` ? `card-default` : `card-${this.variant}`
    },
    cardInverse() {
      return (this.type === `image-overlay` || this.type === `inverse`) ? `card-inverse` : ``
    },
    cardAlign() {
      return `text-${this.align}`
    }
  },
  props: {
    align: {
      type: String,
      default: 'left'
    },
    type: {
      type: String,
      default: 'default'
    },
    variant: {
      type: String,
      default: 'default'
    },
  },
  watch: {
    'type'(val) {
      // get first card-block or div and apply a card-image-overlay class if image-overlay slected
      let div = this.$el.getElementsByClassName('card-block')[0] || this.$el.getElementsByTagName('div')[0];
      if (val === 'image-overlay') {
        div.classList.add('card-img-overlay');
      } else {
        div.classList.remove('card-img-overlay');
      }
    }
  }
}
