define('pipbox/pods/munkaora/edit/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        actions: {
            saveMunkaora: function saveMunkaora(munkaData) {
                console.log(munkaData.id);
                var munkaora = this.store.find('worktime', munkaData.id).then(function (munka) {
                    munka.set('nap', munkaData.nap);
                    munka.set('mettol', munkaData.mettol);
                    munka.set('meddig', munkaData.meddig);
                    munka.set('leiras', munkaData.leiras);
                    munka.save();
                });
            }
        }
    });

});