import config from 'playermanager/config/environment';
import Firebase from 'firebase';
import Ember from 'ember';

var firebase = new Firebase(config.firebase);

export default {
    name: 'firebaseConnection',
    initialize: function(container, application) {
        if (!Ember.isNone(container)) {
            application.register('connection:main', firebase, {instantiate: false});
            application.inject('controller:login', 'firebase', 'connection:main');
            application.inject('adapter:application', 'firebase', 'connection:main');
        }
    }
};