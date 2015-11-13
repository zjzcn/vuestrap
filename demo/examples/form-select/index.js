import meta from '../../../src/components/form-select/component.json'
import template from './template.html'
import snippet from './snippet.html'
import example from '../../components/example'

export default {
  template: template,
  components: {
    'form-select': vuestrap.formSelect,
    'example': example,
  },
  data() {
    return {
      meta: meta,
      snippet: snippet.replace(/</g, '&lt;'),
      model: "male",
      options: [
        {
          text: 'Male',
          value: 'male',
        }, {
          text: 'Female',
          value: 'female',
        },
      ],
      size: 'md',
      sizes: demo.sizes,
      state: 'success',
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