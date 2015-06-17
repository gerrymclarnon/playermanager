import Ember from 'ember';

export default Ember.Controller.extend({
    needs: ['login', 'application'],

    showSecondaryHeader: true,
    selectedPlayer: null,

    actions: {
        showMenu: function() {
            var appController = this.get('controllers.application');
            appController.set('showMenu', !appController.get('showMenu'));
        },
        selectPlayer: function(player) {
            this.set('selectedPlayer', player);
        },
        cancel: function(player) {
            player.rollback();
            this.set('selectedPlayer', null);
        },
        update: function(player) {
            player.save();
        },
        delete: function(player) {
            player.destroyRecord();
            this.set('selectedPlayer', null);
        }
    }
});
