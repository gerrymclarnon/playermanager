import Ember from 'ember';

export default Ember.Controller.extend({
    userEmail: null,
    
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

        login3rdParty: function(provider) {
            var loginController = this;
            var thirdPartyProvider = provider;
            this.firebase.authWithOAuthPopup(thirdPartyProvider, function (error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                    loginController.set('errorMessage', error.message);
                } else {
                    console.log("Authenticated successfully with payload:", authData);
                    loginController.set('userEmail', authData[thirdPartyProvider].email);

                    loginController.transitionToRoute('players');
                }
            });
        },

    }
});
