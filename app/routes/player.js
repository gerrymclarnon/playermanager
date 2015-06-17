import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        return this.store.find('player', params.player_id);
    },

    renderTemplate: function(controller) {
//        controller.get('controllers.application').set('showSecondaryHeader', false);
        this.render('player/navbar', {outlet: 'header'});
        this.render('player/index', {outlet: 'content'});
    }
});
