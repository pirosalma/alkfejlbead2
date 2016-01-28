define('pipbox/pods/components/munkaora-edit/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        actions: {
            onSubmit: function onSubmit() {
                console.log("mentve");
                this.get('onSave')({
                    id: $('[name="id"]').val(),
                    leiras: $('[name="leiras"]').val(),
                    nap: $('[name="nap"]').val(),
                    mettol: $('[name="mettol"]').val(),
                    meddig: $('[name="meddig"]').val()
                });
                //this.onSave();
            }
        }
    });

});