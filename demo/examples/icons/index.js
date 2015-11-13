import meta from '../../../src/components/icons/component.json'
import template from './template.html'
import snippet from './snippet.html'
import example from '../../components/example'

export default {
  template: template,
  components: {
    'icon': vuestrap.icons,
    'example': example,
  },
  data() {
    return {
      meta: meta,
      snippet: snippet.replace(/</g, '&lt;'),
      size: 'xxl',
      sizes: demo.sizes.concat([{text: 'xl', value: 'xl'}, {text: 'xxl', value: 'xxl'}]),
      variant: 'info',
      variants: demo.variants.concat([{text: 'light', value: 'light'}, {text: 'dark', value: 'dark'}]),
    }
  },
  ready() {
    const elements = document.querySelectorAll('.lang-html')
    for (let i = 0; i < elements.length; i++) {
      hljs.highlightBlock(elements[i])
    }
  },
}
