module.exports = {
    template: require('./_button-radio.html'),
    replace: true,
    props: {
    	model: {
    		// type: Object,
    		twoWay: true,
    		required: true
    	},
        list: {
          type: Array, 
          default: [],
          required: true
        }
    }, 
    methods: {
    	select: function(item){
    		this.model = item;
    	}
    }
};
