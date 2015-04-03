import Ember from 'ember';

export default Ember.Component.extend({
    classNameBindings: [':player', 'selected'],

    selected: Ember.computed('selectedPlayer', function() {
        return this.get('selectedPlayer') === this.get('player');
    }).readOnly(),

    actions: {
        selectPlayer: function (player) {
            this.sendAction('selectPlayer', player);
        }
    }
});
