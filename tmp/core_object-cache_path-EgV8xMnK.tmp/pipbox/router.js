define('pipbox/router', ['exports', 'ember', 'pipbox/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('munkaora', { path: '/munkaora' }, function () {
      this.route('new', { path: '/new' });
      this.route('edit', { path: ':itemid' });
    });
    this.route('munkaora.new');
    this.route('comment', { path: ':itemid' });
  });

  exports['default'] = Router;

});