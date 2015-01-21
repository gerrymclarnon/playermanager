import Ember from 'ember';

export default Ember.Controller.extend({
  firstName: null,
  lastName: null,
  actions: {
    createUser: function() {
      this.store.createRecord('player', {
        firstName: this.get('firstName'),
        lastName: this.get('lastName')
      }).save();

      this.setProperties({
        firstName: null,
        lastName: null
      });
    }
  }
});
