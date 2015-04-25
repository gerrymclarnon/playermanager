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
                    controller.set('errorMessage', error.message);
                } else {
                    console.log("Authenticated successfully with payload:", authData);
                    controller.transitionToRoute('players');
                }
            });
        },

        loginFacebook: function(username, password) {
            var controller = this;
            this.firebase.authWithOAuthPopup("facebook", function (error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                    controller.set('errorMessage', error.message);
                } else {
                    console.log("Authenticated successfully with payload:", authData);
                    controller.transitionToRoute('players');
                }
            });
        },

    }
});
