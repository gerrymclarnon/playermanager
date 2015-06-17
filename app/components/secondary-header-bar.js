import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['bar', 'bar-standard', 'bar-header-secondary'],
    classNameBindings: ['show:show', 'showMenu:showMenu'],
    show: false,
    showMenu: false
});
