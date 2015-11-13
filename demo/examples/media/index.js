import meta from '../../../src/components/media/component.json'
import template from './template.html'
import snippet from './snippet.html'
import example from '../../components/example'

export default {
  template: template,
  components: {
    'media': vuestrap.media,
    'example': example,
  },
  data() {
    return {
      meta: meta,
      snippet: snippet.replace(/</g, '&lt;'),
      position: 'top left',
      positions: [
        {text: 'top left', value: 'top left'},
        {text: 'top right', value: 'top right'},
        {text: 'middle left', value: 'middle left'},
        {text: 'middle right', value: 'middle right'},
        {text: 'bottom left', value: 'bottom left'},
        {text: 'bottom right', value: 'bottom right'},
      ],
    }
  },
  ready() {
    const elements = document.querySelectorAll('.lang-html')
    for (let i = 0; i < elements.length; i++) {
      hljs.highlightBlock(elements[i])
    }
  },
}