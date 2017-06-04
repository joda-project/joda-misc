import DocumentIndexRoute from 'joda-core/routes/document/index';

export default DocumentIndexRoute.extend({
  queryParams: {
    'misc_type': {
      refreshModel: true,
      replace: true
    }
  },

  model: function() {
    return this.modelFor('misc');
  }
});
