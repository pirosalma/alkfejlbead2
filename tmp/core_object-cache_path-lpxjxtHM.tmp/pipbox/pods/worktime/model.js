define('pipbox/pods/worktime/model', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    exports['default'] = DS['default'].Model.extend({
        leiras: DS['default'].attr('string'),
        nap: DS['default'].attr('string', {
            defaultValue: function defaultValue() {
                return new Date().localDate.toLocaleDateString();
            }
        }),
        mettol: DS['default'].attr('string', {
            defaultValue: function defaultValue() {
                return new Date().localDate.toLocaleDateString();
            }
        }),
        meddig: DS['default'].attr('string', {
            defaultValue: function defaultValue() {
                return new Date().localDate.toLocaleDateString();
            }
        }),
        jovahagyva: DS['default'].attr('boolean', {
            defaultValue: function defaultValue() {
                return false;
            }
        }),
        comments: DS['default'].hasMany('comment', { async: false, inverse: 'worktime' })
    });

});