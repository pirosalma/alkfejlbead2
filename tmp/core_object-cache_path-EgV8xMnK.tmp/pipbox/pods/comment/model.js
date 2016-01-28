define('pipbox/pods/comment/model', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    szoveg: DS['default'].attr('string'),
    worktime: DS['default'].belongsTo('worktime', { async: false, inverse: 'comments' })
  });

});