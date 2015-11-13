import '../../../src/components/alert/_alert.scss'
import meta from '../../../src/components/alert/component.json'
import template from './template.html'
import snippet from './snippet.html'
import example from '../../components/example'

export default {
  template: template,
  components: {
    'alert': vuestrap.alert,
    'example': example,
  },
  data() {
    return {
      meta: meta,
      snippet: snippet.replace(/</g, '&lt;'),
      show: true,
      dismissible: true,
      message: '<strong>Note</strong> This is an html message',
      state: 'success',
      states: [
        {text: 'default', value: 'default'},
        {text: 'success', value: 'success'},
        {text: 'danger', value: 'danger'},
        {text: 'warning', value: 'warning'},
        {text: 'info', value: 'info'},
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
