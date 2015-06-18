import Ember from 'ember';

export default Ember.Route.extend({
    renderTemplate: function(controller) {
        this.render('players/new/index', {into: 'application', controller: controller});
    },
//
//    setupController: function(controller, model) {
//        this.controllerFor('players').set('showSecondaryHeader', false);
//    },
//
//    deactivate: function() {
//        this.controllerFor('players').set('showSecondaryHeader', true);
//    },
//
    actions: {
        cancel: function() {
            this.controller.setProperties({
                firstName: null,
                lastName: null
            });

            this.transitionTo('players');
        },
        create: function() {
            this.store.createRecord('player', {
                firstName: this.controller.get('firstName'),
                lastName: this.controller.get('lastName')
            }).save();
            
            this.transitionTo('players');

            this.controller.setProperties({
                firstName: null,
                lastName: null
            });
        }
    }
});