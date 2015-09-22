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
	    },
	    size: {
	    	type: String,
	    	default: 'md'
	    },
	    fade: {
	    	type: Boolean,
	    	default: true
	    }
	},
	methods: {
		showModal: function(){
			this.$el.style.display = 'block';
			// wait for the display block, and then add class "in" class on the modal
			setTimeout(function(){
				this.animate = true;
				this.$dispatch('show::modal');
			}.bind(this), 0);
		},
		hideModal: function(){
			var self= this;
			this.animate = false;
			// wait for animation to complete and then hide the modal
			setTimeout(function(){
				self.$el.style.display = 'none';
				self.$dispatch('hide::modal');
			}, TRANSITION_DURATION);
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
	}, 
	ready: function(){
		document.addEventListener('keydown', function (e) {
		    var key = e.which || e.keyCode;
		    if (key === 27) { // 27 is esc
		    	this.show = false;
		    	this.hideModal();
		    }
		}.bind(this));
	}
};