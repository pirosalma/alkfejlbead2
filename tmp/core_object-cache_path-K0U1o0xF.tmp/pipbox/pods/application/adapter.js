define('pipbox/pods/application/adapter', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    exports['default'] = DS['default'].JSONAPIAdapter.extend({
        host: 'https://bvoa7f-bead3-adatbazis-koczkapeter.c9users.io',
        namespace: ''
    });

});