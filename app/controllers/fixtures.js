import Ember from 'ember';

export default Ember.Controller.extend({
    needs: ['login', 'application'],

    selectedPlayer: null,

    filter: '',

    filteredContent: function(){
        var filter = this.get('filter');
        var fixtures = this.get('model');

        if (!Ember.isNone(filter) && filter.length > 0) {
            var regexp = new RegExp(filter, 'gi');

            return fixtures.filter(function(fixture) {
                return fixture.get('homeTeam').match(regexp) || fixture.get('awayTeam').match(regexp);
            });
        }

        return fixtures;
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
