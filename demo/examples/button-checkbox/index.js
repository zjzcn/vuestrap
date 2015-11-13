import meta from '../../../src/components/button-checkbox/component.json'
import template from './template.html'
import snippet from './snippet.html'
import example from '../../components/example'

export default {
  template: template,
  components: {
    'button-checkbox': vuestrap.buttonCheckbox,
    'example': example,
  },
  data() {
    return {
      meta: meta,
      snippet: snippet.replace(/</g, '&lt;'),
      list: [
        {
          text: 'First',
          checked: false,
        }, {
          text: 'Second',
          checked: true,
        }, {
          text: 'Third',
          checked: false,
        },
      ],
      size: 'md',
      sizes: demo.sizes,
      variant: 'primary',
      variants: demo.variants,
    }
  },
  ready() {
    const elements = document.querySelectorAll('.lang-html')
    for (let i = 0; i < elements.length; i++) {
      hljs.highlightBlock(elements[i])
    }
  },
}
