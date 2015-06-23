import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['bar', 'bar-standard', 'bar-footer-secondary'],
    classNameBindings: ['showMenu:showMenu'],
    showMenu: false
});
