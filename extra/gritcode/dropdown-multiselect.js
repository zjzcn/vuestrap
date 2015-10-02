require('./_dropdown-multiselect.scss');
require('../../bootstrap/_dropdown.scss');
require('../kzima/icon.js');
module.exports = {
    template: require('./dropdown-multiselect.html'),
    replace: true,
    data: function() {
        return {
            show: false,
            _originalList: []
        };
    },
    computed: {
        btnVariant: function(){
            return !this.variant || this.variant === 'standard' ? '' : 'btn-' + this.variant;
        },
        btnSize: function(){
            return !this.size || this.size === 'standard' ? '' : 'btn-' + this.size;
        },
        display: function(){
            var checkedItems = [];
            this.list.forEach(function(item){
                if (item.checked) {
                    checkedItems.push(item.name);
                }
            }.bind(this));

            // if zero show default message
            if (checkedItems.length === 0){
                return this.defaultOption;
            }
            // if more than limit show "X items selected"
            if (checkedItems.length > this.maxCount) {
                return checkedItems.length + ' ' + this.defaultOptionMultiple;
            // otherwise show all items selected with coma seperated
            } else {
                return checkedItems.join(', ');
            }
        }
    },
    props: {
        list: {
            type: Array, 
            default: [],
            required: true
        },
        icon: {
            type: String,
            default: ''
        },
        caret: {
            type: Boolean,
            default: true
        },
        variant: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: ''
        },
        defaultOption: {
            type: String,
            default: 'Nothing selected'
        },
        defaultOptionMultiple: {
            type: String,
            default: 'items selected'
        },
        maxCount: {
            type: Number,
            default: 3
        }
    },
    methods: {
        isChanged: function(){
            var result = false;
            this.list.forEach(function(item, index){
                if (item.checked !== this._originalList[index].checked) {
                    result = true;
                }
            }.bind(this));
            return result;
        },
        select: function(item) {
            item.checked = !item.checked;
        }, 
        toggle: function() {
            this.show = !this.show;
            if (!this.show) {
                this.$dispatch('hide::dropdown-multiselect', this.isChanged());
            } else {
                // store local copy of the list and compare later for changes
                this._originalList = JSON.parse(JSON.stringify(this.list));
            }
        }
    }
};
