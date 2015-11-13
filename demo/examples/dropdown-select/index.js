import meta from '../../../src/components/dropdown-select/component.json'
import template from './template.html'
import snippet from './snippet.html'
import example from '../../components/example'

export default {
  template: template,
  components: {
    'dropdown-select': vuestrap.dropdownSelect,
    'example': example,
  },
  data() {
    return {
      meta: meta,
      snippet: snippet.replace(/</g, '&lt;'),
      model: {
          text: 'First',
          value: 'first',
        },
      list: [
        {
          text: 'First',
          value: 'first',
        }, {
          text: 'Second',
          value: 'second',
        }, {
          text: 'Third',
          value: 'third',
        },
      ],
      caret: true,
      position: 'left',
      positions: demo.positions,
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