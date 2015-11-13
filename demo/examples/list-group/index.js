import meta from '../../../src/components/list-group/component.json'
import template from './template.html'
import snippet from './snippet.html'
import example from '../../components/example'

export default {
  template: template,
  components: {
    'listGroup': vuestrap.listGroup,
    'badge': vuestrap.labels,
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
