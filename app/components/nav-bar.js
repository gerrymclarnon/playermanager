import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['bar', 'bar-nav'],
    classNameBindings: ['showMenu:showMenu'],
    showMenu: false
});
