require('./_pagination.scss');
require('./_button-group.scss');
module.exports = {
    template: require('./pagination.html'),
    replace: true, 
    computed: {
    	links: function(){
    		var numberOfPages = Math.ceil(this.totalRows / this.perPage);
    		return (numberOfPages < 1) ? 1 : numberOfPages;
    	}
    },
    props: {
      totalRows: {
        type: Number,
        default: 20
      }, 
      currentPage: {
        type: Number,
        default: 1 
      },
      perPage: {
        type: Number,
        default: 20
      },
      variant: {
        type: String, 
        default: 'primary'
      }
    }
};