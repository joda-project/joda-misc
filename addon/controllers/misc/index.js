import { observer } from '@ember/object';
import DocumentIndexController from 'joda-core/controllers/document/index';

export default DocumentIndexController.extend({
  init() {
    this.filters = ['search', 'tags', 'misc_type', 'sort'];
    this._super(...arguments);
  },

  misc_type: null,
  typeItem: null,

  typeObserver: observer('misc_type', function() {
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

  typeItemObserver: observer('typeItem', function() {
    let type = this.get('typeItem');
    this.set('misc_type', type ? type.get('id') : null);
  })
});
