import DS from 'ember-data';

export default DS.Model.extend({
  scorers: DS.attr('string'),
  team: DS.hasMany('player'),
  fixture: DS.belongsTo('fixture')
});
