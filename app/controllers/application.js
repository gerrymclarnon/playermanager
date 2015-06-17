import Ember from 'ember';

export default Ember.Controller.extend({
    showMenu: false,
    showSecondaryHeader: false,

    actions: {
        showMenu: function () {
            this.set('showMenu', !this.get('showMenu'));
        }
    }
});
