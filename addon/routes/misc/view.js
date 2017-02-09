import Ember from 'ember';
import SessionLoginStayMixin from 'joda-core/mixins/session-login-stay';

export default Ember.Route.extend(SessionLoginStayMixin, {
  titleToken: function(model) {
    return model.get('title');
  },

  model: function(params) {
    return this.store.findRecord('misc-document', params.document_id);
  },
});
