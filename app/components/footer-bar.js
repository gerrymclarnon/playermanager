import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['bar', 'bar-footer'],
    classNameBindings: ['show:show', 'showMenu:showMenu'],
    show: true,
    showMenu: false
});
