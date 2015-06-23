import Ember from 'ember';

export default Ember.Controller.extend({
    needs: ['login', 'application'],

    selectedPlayer: null,

    filter: '',

    filteredContent: function(){
        var filter = this.get('filter');
        var players = this.get('model');

        if (!Ember.isNone(filter) && filter.length > 0) {
            var regexp = new RegExp(filter, 'gi');

            return players.filter(function(player) {
                return player.get('firstName').match(regexp) || player.get('lastName').match(regexp);
            });
        }

        return players;
    }.property('model', 'filter'),

    actions: {
        showMenu: function() {
            var appController = this.get('controllers.application');
            appController.set('showMenu', !appController.get('showMenu'));
        },
        selectPlayer: function(player) {
            this.set('selectedPlayer', player);
        },
        cancel: function(player) {
            player.rollback();
            this.set('selectedPlayer', null);
        },
        update: function(player) {
            player.save();
        },
        delete: function(player) {
            player.destroyRecord();
            this.set('selectedPlayer', null);
        }
    }
});
