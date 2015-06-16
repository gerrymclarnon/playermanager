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
    
  this.resource('players', { path: '/players' }, function() {
      this.resource('player', { path: '/:player_id' }, function() {
          this.route('edit', { path: '/edit' });
      });
      this.route("new", { path: "/new" });
  });
});

export default Router;
