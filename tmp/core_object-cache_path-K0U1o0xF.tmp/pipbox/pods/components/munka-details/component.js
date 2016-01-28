define('pipbox/pods/components/munka-details/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        tagName: 'tr',
        classNameBindings: ['munka.jovahagyva:text-success:text-warning'],
        actions: {
            onDel: function onDel() {
                this.get('onDel')({
                    id: this.data.id
                });
                /*this.get('onSave')({
                    id: $('[name="id"]').val(),
                    leiras: $('[name="leiras"]').val(),
                    nap: $('[name="nap"]').val(),
                    mettol: $('[name="mettol"]').val(),
                    meddig: $('[name="meddig"]').val()
                });*/
                //this.onSave();
            }
        }
    });

});