define('pipbox/pods/components/comment-form/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        actions: {
            onSubmit: function onSubmit() {
                console.log("mentve");
                this.get('onSave')({
                    worktime: $('[name="munkaId"]').val(),
                    szoveg: $('[name="szoveg"]').val()
                });
                //this.onSave();
            }
        }
    });

});