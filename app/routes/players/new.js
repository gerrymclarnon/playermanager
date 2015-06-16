import Ember from 'ember';

export default Ember.Route.extend({
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