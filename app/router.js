import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {
      path: '/'
  });

  this.route("login");
  this.resource('players', { path: '/players' });
  this.resource('player', { path: '/players/:id' }, function() {
    this.route('edit', { path: '/edit' });
  });
});

export default Router;
