import meta from '../../../src/components/pagination/component.json'
import template from './template.html'
import snippet from './snippet.html'
import example from '../../components/example'

export default {
  template: template,
  components: {
    'pagination': vuestrap.pagination,
    'example': example,
  },
  data() {
    return {
      meta: meta,
      snippet: snippet.replace(/</g, '&lt;'),
      size: 'md',
      sizes: demo.sizes,
      variant: 'primary',
      variants: demo.variants,
      totalRows: 100,
      currentPage: 1,
      perPage: 10,
    }
  },
  ready() {
    const elements = document.querySelectorAll('.lang-html')
    for (let i = 0; i < elements.length; i++) {
      hljs.highlightBlock(elements[i])
    }
  },
}
