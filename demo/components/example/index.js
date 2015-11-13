// import dependencies
import './_example.scss'
import template from './example.html'

// export component object
export default {
    template: template,
    replace: true,
    props: {
        meta: {
            type: Object,
            default: {},
            required: true
        },
        snippet: {
            type: String,
            default: '',
            required: true
        },
    },
    components: {
        'badge': vuestrap.labels,
        'alert': vuestrap.alert,
        'icon': vuestrap.icons,
    }
}
