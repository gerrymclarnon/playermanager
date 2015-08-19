import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    fixture: DS.belongsTo('fixture-info'),
    scorer:  DS.belongsTo('player'),
    time: DS.attr('date')
});
