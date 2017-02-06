import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Miscellaneous',

  model: function() {
    return Ember.RSVP.hash({
      types: this.get('store').findAll('misc-type'),
      tags: this.get('store').findAll('tag')
    });
  }
});
