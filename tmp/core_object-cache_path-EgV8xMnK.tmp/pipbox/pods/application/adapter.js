define('pipbox/pods/application/adapter', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    exports['default'] = DS['default'].JSONAPIAdapter.extend({
        host: 'https://api-dulyts.c9users.io',
        namespace: ''
    });

});