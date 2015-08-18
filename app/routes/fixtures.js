import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.find('fixture');
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

        addFixture: function () {
            this.transitionTo('fixtures.new');
        },

        logout: function () {
            this.get('controller.controllers.application').send('showMenu');
            this.transitionTo('login');
        }
    }
});
