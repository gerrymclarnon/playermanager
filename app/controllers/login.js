import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        login: function(username, password) {
            var controller = this;
            this.firebase.authWithPassword({
                "email": username,
                "password": password,
                "rememberMe": false
            }, function (error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    console.log("Authenticated successfully with payload:", authData);
                    controller.transitionTo('players');
                }
            });
        }
    }
});
