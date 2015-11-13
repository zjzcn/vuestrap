import meta from '../../../src/components/form-radio/component.json'
import template from './template.html'
import snippet from './snippet.html'
import example from '../../components/example'

export default {
  template: template,
  components: {
    'form-radio': vuestrap.formRadio,
    'example': example,
  },
  data() {
    return {
      meta: meta,
      snippet: snippet.replace(/</g, '&lt;'),
      model: 'second',
        list: [
          {
            name: 'First',
            value: 'first',
          }, {
            name: 'Second',
            value: 'second',
          }, {
            name: 'Third (disabled)',
            value: 'third',
            disabled: true,
          },
        ],
        vertical: true,
        custom: true,
        state: 'default',
        states: demo.states,
    }
  },
  ready() {
    const elements = document.querySelectorAll('.lang-html')
    for (let i = 0; i < elements.length; i++) {
      hljs.highlightBlock(elements[i])
    }
  },
}