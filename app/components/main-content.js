import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['content'],
    classNameBindings: ['showMenu:showMenu'],
    showMenu: false
});
