import Ember from 'ember';

export default Ember.Route.extend({
    renderTemplate: function(controller) {
        this.render('player/edit/index', {into: 'application', controller: controller});
    }
});
