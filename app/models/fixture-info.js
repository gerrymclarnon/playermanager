import DS from 'ember-data';

export default DS.Model.extend({
    homeTeamGoals: DS.hasMany('goal'),
    awayTeamGoals: DS.hasMany('goal'),
    team: DS.hasMany('player'),
//    team: DS.attr('player', {
//        defaultValue: function() { return new Date(); }
//    }),
    fixture: DS.belongsTo('fixture')
});
