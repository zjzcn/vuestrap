import meta from '../../../src/components/pager/component.json'
import template from './template.html'
import snippet from './snippet.html'
import example from '../../components/example'

export default {
  template: template,
  components: {
    'pager': vuestrap.pager,
    'example': example,
  },
  data() {
    return {
      meta: meta,
      snippet: snippet.replace(/</g, '&lt;'),
    }
  },
  ready() {
    const elements = document.querySelectorAll('.lang-html')
    for (let i = 0; i < elements.length; i++) {
      hljs.highlightBlock(elements[i])
    }
  },
}