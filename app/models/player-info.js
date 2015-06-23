import DS from 'ember-data';

export default DS.Model.extend({
  goals: DS.attr('number', {defaultValue: 0}),
  appearances: DS.attr('number', {defaultValue: 0}),
  player: DS.belongsTo('player')
});
