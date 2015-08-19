import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    fullName: Ember.computed('firstName', 'lastName', function () {
        return this.get('firstName') + ' ' + this.get('lastName');
    }),
    photo: DS.attr('string'),
    info: DS.belongsTo('player-info', { async: true }),
    fixtures: DS.hasMany('fixture')
});
