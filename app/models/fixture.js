import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    homeTeam: DS.attr('string'),
    awayTeam: DS.attr('string'),
    date: DS.attr('date'),
    time: DS.attr('date'),
    venue: DS.attr('string'),
    homeTeamGoals: DS.attr('number'),
    awayTeamGoals: DS.attr('number')
});
