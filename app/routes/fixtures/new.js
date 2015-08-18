import Ember from 'ember';

export default Ember.Route.extend({
    renderTemplate: function(controller) {
        this.render('fixtures/new', {into: 'application', controller: controller});
    },

    actions: {
        cancel: function() {
            this.controller.setProperties({
                homeTeam: null,
                awayTeam: null,
                date: null,
                venue: null,
                homeTeamGoals: null,
                awayTeamGoals: null
            });

            this.transitionTo('fixtures');
        },
        create: function() {
            var fixture = this.store.createRecord('fixture', {
                homeTeam: this.controller.get('homeTeam'),
                awayTeam: this.controller.get('awayTeam'),
                date: new Date(this.controller.get('date') + " " + this.controller.get('time')),
                venue: this.controller.get('venue'),
                homeTeamGoals: this.controller.get('homeTeamGoals'),
                awayTeamGoals: this.controller.get('awayTeamGoals')
            });

            var route = this;
            fixture.save().then(function() {
                route.transitionTo('fixtures');

                route.controller.setProperties({
                    homeTeam: null,
                    awayTeam: null,
                    date: null,
                    venue: null,
                    homeTeamGoals: null,
                    awayTeamGoals: null
                });
            });
        }
    }
});