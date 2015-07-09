import Ember from 'ember';

export default Ember.Controller.extend({
    needs: ['application'],

    actions: {
        cancel: function(player) {
            player.rollback();
            this.transitionTo('player');
        },
        update: function(player) {
            var info = player.get('info.content');

            info.save().then(function() {
                player.save();
            });

            this.transitionTo('player');
        },
        delete: function(player) {
            player.destroyRecord();
            this.transitionTo('players');
        },
        takePhoto: function (player) {

            function onGetPictureSuccess(imageData) {
                player.set('photo', 'data:image/jpeg;base64,' + imageData);
            }

            function onGetPictureError(message) {
                console.log('photo not taken: ' + message);
            }

            navigator.camera.getPicture(onGetPictureSuccess, onGetPictureError, {
                destinationType:    Camera.DestinationType.DATA_URL,
                encodingType:       Camera.EncodingType.JPEG,
                correctOrientation: true
            });
        }
    }
});
