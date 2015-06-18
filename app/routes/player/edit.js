import Ember from 'ember';

export default Ember.Route.extend({
    renderTemplate: function(controller) {
        this.render('player/edit', {into: 'application', controller: controller});
    }
});
