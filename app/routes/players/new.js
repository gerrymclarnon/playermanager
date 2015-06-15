import Ember from 'ember';

export default Ember.Route.extend({
    renderTemplate: function(controller) {
        this.render('players/new/navbar', {outlet: 'header', controller: controller});
        this.render('players/new/index', {outlet: 'content', controller: controller});
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