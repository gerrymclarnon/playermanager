import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  avatar: DS.attr('string', { defaultValue: 'http://ryanflorence.com/jsconf-avatars/avatars/ryan.jpg'})
});
