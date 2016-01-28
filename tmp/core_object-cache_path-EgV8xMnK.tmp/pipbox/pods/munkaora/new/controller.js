define('pipbox/pods/munkaora/new/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        actions: {
            newMunkaora: function newMunkaora(munkaData) {
                var _this = this;
                var munkaora = this.store.createRecord('worktime', munkaData);
                munkaora.save().then(function () {
                    console.log("mentve");
                    _this.transitionTo('munkaora');
                });
            }
        }
    });

});