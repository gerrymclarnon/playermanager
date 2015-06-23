import Ember from 'ember';

export default Ember.Controller.extend({
    showMenu: false,

    actions: {
        showMenu: function () {
            this.set('showMenu', !this.get('showMenu'));
        }
    }
});
