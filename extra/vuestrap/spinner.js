require('./spinner.scss');
module.exports = {
    template: require('./spinner.html'),
    replace: true, 
    data: function(){
    	return {
	    	active: false,
            size: 'md'
    	};
    },
    props: ['id','size','variant','overlay','fixed'],
    methods: {
    	show: function(){
    		this.active = true;
    	},
    	hide: function(){
    		this.active = false;
    	}
    }, 
    events: {
    	'show-spinner': function(id){
            if (id === this.id){
                this.show();
            }
    	},
    	'hide-spinner': function(id){
    		if (id === this.id){
                this.hide();
            }
    	}
    }
};