define('pipbox/pods/munkaora/edit/route', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        model: function model(params) {
            console.log(params);
            return this.store.find('worktime', params.itemid);
        }
    });

});