import Ember from 'ember';
import ENV from 'playermanager/config/environment';

var firebase = new window.Firebase(ENV.firebase_instance);

export default {
    name: 'firebaseConnection',
    initialize: function(container, application) {
        if (!Ember.isNone(container)) {
            application.register('connection:main', firebase, {instantiate: false});
            application.inject('controller:login', 'firebase', 'connection:main');
        }
    }
};