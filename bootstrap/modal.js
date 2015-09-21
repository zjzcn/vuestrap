require('./_modal.scss');

// css transition duration
const TRANSITION_DURATION = 300;

module.exports = {
    template: require('./modal.html'),
    replace: true, 
    data: function(){
    	return {
    		animate: false
    	};
    },
 	props: {
	    show: {
			type: Boolean,
			required: true,
			twoWay: true,
			default: false    
	    },
	    id: {
	    	type: String,
	    	defult: ''
	    }
	},
	methods: {
		showModal: function(){
			this.$el.style.display = 'block';
			// wait for the display block, and then add class "in" class on the modal
			setTimeout(function(){
				this.animate = true;
			}.bind(this),0);
		},
		hideModal: function(){
			this.animate = false;
			// hide modal block after animation is completed
			setTimeout(function(){
				this.$el.style.display = 'none';
			}.bind(this), TRANSITION_DURATION);
		}
	},
	watch: {
		'show': function(val){
			if (val) {
				this.showModal();
			} else {				
				this.hideModal();
			}
		}
	}
};