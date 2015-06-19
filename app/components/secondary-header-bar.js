import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['bar', 'bar-standard', 'bar-header-secondary'],
    classNameBindings: ['showMenu:showMenu'],
    showMenu: false
});
