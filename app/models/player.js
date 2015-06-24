import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  fullName: Ember.computed('firstName', 'lastName', function () {
        return this.get('firstName') + ' ' + this.get('lastName');
  }),
  avatar: DS.attr('string', { defaultValue: 'http://ryanflorence.com/jsconf-avatars/avatars/ryan.jpg'}),
  info: DS.belongsTo('player-info', { async: true })
});
