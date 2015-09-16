require('./_buttons.scss');
module.exports = {
    template: require('./_button-checkbox.html'),
    replace: true,
    props: {
        list: {
          type: Array, 
          twoWay: true,
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
