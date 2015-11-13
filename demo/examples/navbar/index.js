import meta from '../../../src/components/navbar/component.json'
import template from './template.html'
import snippet from './snippet.html'
import example from '../../components/example'

export default {
  template: template,
  components: {
    'navbar': vuestrap.navbar,
    'example': example,
  },
  data() {
    return {
      meta: meta,
      snippet: snippet.replace(/</g, '&lt;'),
      fixed: '',
      fixeds: [{text: 'default', value: ''}, {text: 'top', value: 'top'}, {text: 'bottom', value: 'bottom'}],
      type: 'default',
      types: [{text: 'default', value: 'default'}, {text: 'dark', value: 'dark'}],
      variant: 'default',
      variants: demo.variants.concat([{text: 'inverse', value: 'inverse'}]),
    }
  },
  ready() {
    const elements = document.querySelectorAll('.lang-html')
    for (let i = 0; i < elements.length; i++) {
      hljs.highlightBlock(elements[i])
    }
  },
  watch: {
    type(val) {
      if (val === 'dark' && this.variant !== 'primary' && this.variant !== 'inverse') {
        this.variant = 'inverse'
      }
    },
    variant(val) {
      if (val === 'primary' || val === 'inverse') {
        this.type = 'dark'
      }
    }
  }
}
