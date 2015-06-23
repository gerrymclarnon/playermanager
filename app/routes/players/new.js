import Ember from 'ember';

export default Ember.Route.extend({
    renderTemplate: function(controller) {
        this.render('players/new', {into: 'application', controller: controller});
    },

    actions: {
        cancel: function() {
            this.controller.setProperties({
                firstName: null,
                lastName: null
            });

            this.transitionTo('players');
        },
        create: function() {
            var playerInfo = this.store.createRecord('player-info', {
                appearances: 10,
                goals: 20
            });
            
            var player = this.store.createRecord('player', {
                firstName: this.controller.get('firstName'),
                lastName: this.controller.get('lastName')
            });

            var route = this;
            playerInfo.save().then(function() {
                player.set('info', playerInfo);
                
                player.save();

                route.transitionTo('players');

                route.controller.setProperties({
                    firstName: null,
                    lastName: null
                });
            });
        }
    }
});