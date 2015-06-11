import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.find('player');
    },
    
    actions: {
        showSquad: function () {
            this.get('controller').send('showMenu');
            this.transitionTo('players');
        },

        addPlayer: function () {
            this.transitionTo('players.new');
        },

        logout: function () {
            this.transitionTo('login');
        }
    }
});
