import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.find('player');
    },

    renderTemplate: function(controller) {
//        controller.get('controllers.application').set('showSecondaryHeader', true);
        this.render('players/navbar', {outlet: 'header'});
        this.render('players/search-bar', {outlet: 'secondary-header', controller: controller.get('controllers.application')});
        this.render('players/index', {outlet: 'content'});
    },
    
    actions: {
        showSquad: function () {
            this.get('application').send('showMenu');
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
