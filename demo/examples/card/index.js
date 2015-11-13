import meta from '../../../src/components/card/component.json'
import template from './template.html'
import snippet from './snippet.html'
import example from '../../components/example'

export default {
  template: template,
  components: {
    'card': vuestrap.card,
    'example': example,
  },
  data() {
    return {
      meta: meta,
      snippet: snippet.replace(/</g, '&lt;'),
      type: 'default',
      types: [{text: 'default', value: 'default'}, {text: 'inverse', value: 'inverse'}, {text: 'image-overlay', value: 'image-overlay'}],
      variant: 'default',
      variants: demo.variants,
      align: 'left',
      aligns: [{text: 'left', value: 'left'}, {text: 'center', value: 'center'}, {text: 'right', value: 'right'}],
    }
  },
  ready() {
    const elements = document.querySelectorAll('.lang-html')
    for (let i = 0; i < elements.length; i++) {
      hljs.highlightBlock(elements[i])
    }
  }
}