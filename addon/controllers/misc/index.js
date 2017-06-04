import Ember from 'ember';
import DocumentIndexController from 'joda-core/controllers/document/index';

export default DocumentIndexController.extend({
  filters: ['search', 'tags', 'misc_type'],

  misc_type: null,
  typeItem: null,

  typeObserver: Ember.observer('misc_type', function() {
    let type = this.get('misc_type');
    if (!type) {
      this.set('typeItem', null);
      return;
    }

    let result = this.store.peekRecord('misc-type', type);
    if (this.get('typeItem') !== result) {
      this.set('typeItem', result);
    }
  }),

  typeItemObserver: Ember.observer('typeItem', function() {
    let type = this.get('typeItem');
    this.set('misc_type', type ? type.get('id') : null);
  })
});
