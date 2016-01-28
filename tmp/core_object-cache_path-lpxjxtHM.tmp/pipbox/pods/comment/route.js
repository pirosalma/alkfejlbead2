define('pipbox/pods/comment/route', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        model: function model(params) {
            console.log(params.itemid);
            var munka = this.store.find('worktime', params.itemid);
            munka.then(function () {
                console.log(munka.leiras);
            });
            return {
                munka: munka,
                munkaId: params.itemid
            };
            /*return {
                munka: munka,
                munkaId: params.itemid
            };*/
            /*return {
                comments: this.store.findAll('comment', { filter: { worktime: params.itemid } }),
                munkaId: params.itemid
            };*/
        }
    });

});