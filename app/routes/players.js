import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.find('player');
    },

    actions: {
        showSquad: function () {
            this.get('controller.controllers.application').send('showMenu');
            this.transitionTo('players');
        },

        showMatches: function () {
            this.get('controller.controllers.application').send('showMenu');
            this.transitionTo('fixtures');
        },

        addPlayer: function () {
            this.transitionTo('players.new');
        },

        logout: function () {
            this.get('controller.controllers.application').send('showMenu');
            this.transitionTo('login');
        }
    }
});
