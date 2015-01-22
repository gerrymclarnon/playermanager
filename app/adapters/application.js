import DS from 'ember-data';
import ENV from 'playermanager/config/environment';

var firebase = new window.Firebase(ENV.firebase_instance);

var ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: firebase
});

export default ApplicationAdapter;
