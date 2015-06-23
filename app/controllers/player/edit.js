import Ember from 'ember';

export default Ember.Controller.extend({
    needs: ['application'],

    actions: {
        cancel: function(player) {
            player.rollback();
            this.transitionTo('player');
        },
        update: function(player) {
            var info = player.get('info');
            
            if (Ember.isNone(info)) {
                info = this.store.createRecord('player-info', {
                    appearances: 10,
                    goals: 20
                });
            
                player.set('info', info);
            }
            
            player.save();
            this.transitionTo('player');
        },
        delete: function(player) {
            player.destroyRecord();
            this.transitionTo('players');
        }
    }
});
