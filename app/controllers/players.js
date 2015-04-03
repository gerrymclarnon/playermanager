import Ember from 'ember';

export default Ember.Controller.extend({
    selectedPlayer: null,

    actions: {
        selectPlayer: function (player) {
            this.set('selectedPlayer', player);
        },
        cancel: function(){
            var selectedPlayer = this.get('selectedPlayer');
            selectedPlayer.rollback();
            this.set('selectedPlayer', null);
        },
        update: function(){
            var selectedPlayer = this.get('selectedPlayer');
            selectedPlayer.save();
        },
        destroyUser: function(model) {
            model.destroyRecord();
        }
    }
});
