import Ember from 'ember';

var sum = Ember.computed.sum;
var mapBy = Ember.computed.mapBy;

export default Ember.ArrayController.extend({
  itemController: 'player',
  scores: mapBy('@this', 'score'),
  total: sum('scores'),
  actions: {
    givePoints: function(model, points) {
      model.incrementProperty('score', points);
      model.save();
    },
    takePoints: function(model, points) {
      model.incrementProperty('score', -1 * points);
      model.save();
    }
  }
});
