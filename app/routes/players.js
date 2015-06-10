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
        
        logout: function () {
            this.transitionTo('login');
        }
    }
});
