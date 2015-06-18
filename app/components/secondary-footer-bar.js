import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['bar', 'bar-standard', 'bar-footer-secondary'],
    classNameBindings: ['show:show', 'showMenu:showMenu'],
    show: false,
    showMenu: false
});
