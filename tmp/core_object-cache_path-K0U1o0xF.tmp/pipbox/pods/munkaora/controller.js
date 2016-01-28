define('pipbox/pods/munkaora/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        actions: {
            deleteMunkaora: function deleteMunkaora(munkaData) {
                console.log(munkaData.id);
                this.store.find('worktime', munkaData.id).then(function (post) {
                    post.destroyRecord();
                });
                /*var munkaora = this.store.createRecord('worktime', munkaData);
                munkaora.save().then(function(){
                    console.log("mentve");
                });*/
            }
        }
    });

});