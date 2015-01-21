import Ember from 'ember';
import ENV from 'playermanager/config/environment';
import {firebase} from 'playermanager/adapters/application';

var sum = Ember.computed.sum;
var mapBy = Ember.computed.mapBy;

export default Ember.ArrayController.extend({
  itemController: 'player',
  scores: mapBy('@this', 'score'),
  total: sum('scores'),
  selectedPlayer: null,
  actions: {
    cancel: function(){
      this.set('selectedPlayer', null);
    },
    selectPlayer: function(player) {
      this.set('selectedPlayer', player);
    },
    givePoints: function(model, points) {
      model.incrementProperty('score', points);
      model.save();
    },
    takePoints: function(model, points) {
      model.incrementProperty('score', -1 * points);
      model.save();
    },
    destroyUser: function(model) {
      model.destroyRecord();
    },
    onLoginButtonClicked: function(model) {
//        var ref = new window.Firebase(ENV.firebase_instance);
        var ref = firebase.get('firebase');
        ref.authWithPassword({
            "email": "admin@playermanager.net",
            "password": "thegaffer",
            "rememberMe": false
        }, function (error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
            }
        });
    }
  }
});
