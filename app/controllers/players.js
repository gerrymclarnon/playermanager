import Ember from 'ember';

export default Ember.Controller.extend({
    needs: ['login'],

    selectedPlayer: null,
    showMenu: false,
    showSecondaryHeader: true,

    actions: {
        showMenu: function() {
            this.set('showMenu', !this.get('showMenu'));
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
