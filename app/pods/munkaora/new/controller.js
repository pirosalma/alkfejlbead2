import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newMunkaora: function (munkaData) {
            var _this = this;
            var munkaora = this.store.createRecord('worktime', munkaData);
            munkaora.save().then(function(){
                console.log("mentve");
                _this.transitionTo('munkaora');
            });
            
        }
    }
});
