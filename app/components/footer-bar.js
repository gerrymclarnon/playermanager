import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['bar', 'bar-footer'],
    classNameBindings: ['showMenu:showMenu'],
    showMenu: false
});
