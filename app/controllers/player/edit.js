import Ember from 'ember';

export default Ember.Controller.extend({
    needs: ['application'],

    actions: {
        cancel: function(player) {
            player.rollback();
            this.transitionTo('player');
        },
        update: function(player) {
            player.save();
            this.transitionTo('player');
        },
        delete: function(player) {
            player.destroyRecord();
            this.transitionTo('players');
        }
    }
});
