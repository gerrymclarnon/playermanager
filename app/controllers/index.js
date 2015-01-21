import Ember from 'ember';

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
        var commentsRef = new Firebase('https://playermanager.firebaseio.com/teams/broomhillrovers');
//Create an Firebase Simple Login client so we can do Facebook auth
        var auth = new FirebaseSimpleLogin(commentsRef, function(error, user) {
            if (error) {
                // an error occurred while attempting login
                console.log(error);
            } else if (user) {
//                myUserID = user.id;
                $("#loginDiv").text(user.first_name + " " + user.last_name + " (" + user.email + ")");
            } else {
                // User logged out
            }
        });

        auth.login("password", { email: "admin@playermanager.net", password: "thegaffer", rememberMe: false });
    }
  }
});
