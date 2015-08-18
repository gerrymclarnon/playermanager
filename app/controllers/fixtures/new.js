import Ember from 'ember';

export default Ember.Controller.extend({
    needs: ['application'],

    homeTeam: null,
    awayTeam: null,
    date: null,
    time: null,
    venue: null,
    homeTeamGoals: null,
    awayTeamGoals: null
});
