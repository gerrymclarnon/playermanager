import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        var fixture = this.store.find('fixture', params.fixture_id);

        fixture.then(function() {
            fixture.get('info').then(function() {
            }, function(error) {
                console.error("Unable to get fixture-info");
                throw error;
            });
        }, function(error) {
            console.error("Unable to get fixture");
            throw error;
        });

        return fixture;
    }
});
