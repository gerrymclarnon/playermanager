import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        return this.store.find('player', params.player_id);
    },

//    renderTemplate: function(controller) {
//        this.render('player/navbar', {outlet: 'header', controller: controller});
//        this.render('player/index', {outlet: 'content', controller: controller});
//    }
});
