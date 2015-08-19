import Ember from 'ember';

export default Ember.Controller.extend({
    needs: ['application'],

    players: function() {
        var store = this.store;
        var team = new Array();

        return new Ember.RSVP.Promise(function(resolve, reject) {
            store.find('player')
                .then(function(players) {

//                    if (!Ember.isEmpty(players.content)) {
//                        for (var i = 0; i < players.content.length; i++) {
//                            var player =  players.content.get(i);
//                            team.pushObject({player: player, goals: 0});
//                        }
//                    }
                    
                    resolve(players.content);
                }, function(reason) {
                    if (reason.status === 401) {
                        alert("help");
                    }

                    reject(reason);
                });
        });
    }.property(),

    actions: {
        cancel: function(player) {
            player.rollback();
            this.transitionTo('fixture');
        },
        update: function(fixture) {
            var info = fixture.get('info.content');

            info.save().then(function() {
                fixture.save();
            });

            this.transitionTo('fixture');
        },
        delete: function(player) {
            player.destroyRecord();
            this.transitionTo('fixtures');
        }
    }
});
