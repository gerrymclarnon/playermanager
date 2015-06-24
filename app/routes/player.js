import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        var player = this.store.find('player', params.player_id);
        
        player.then(function() {
            player.get('info').then(function() {
            }, function(error) {
                console.error("Unable to get player-info");
                throw error;
            });
        }, function(error) {
            console.error("Unable to get player");
            throw error;
        });

        return player;
    }
});
