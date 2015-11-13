import meta from '../../../src/components/form-checkbox/component.json'
import '../../../src/components/custom-forms/_custom-forms.scss'
import template from './template.html'
import snippet from './snippet.html'
import example from '../../components/example'

export default {
  template: template,
  components: {
    'form-checkbox': vuestrap.formCheckbox,
    'example': example,
  },
  data() {
    return {
      meta: meta,
      snippet: snippet.replace(/</g, '&lt;'),
      list: [{
          text: 'First',
          checked: false,
        }, {
          text: 'Second',
          checked: true,
        }, {
          text: 'Third',
          checked: false,
          disabled: true
        },
      ],
      custom: true,
      vertical: true, 
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