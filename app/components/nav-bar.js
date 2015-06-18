import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['bar', 'bar-nav'],
    classNameBindings: ['show:show', 'showMenu:showMenu'],
    show: true,
    showMenu: false
});
