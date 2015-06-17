import Ember from 'ember';

export default Ember.Route.extend({
    renderTemplate: function(controller) {
        this.render('player/edit/navbar', {outlet: 'header', controller: controller});
        this.render('player/edit/index', {outlet: 'content', controller: controller});
        this.render('player/edit/footer', {outlet: 'footer', controller: controller});
    }
});
