import Route from '@ember/routing/route';
import { Promise as EmberPromise } from 'rsvp';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  titleToken: 'Edit',

  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('commonModel', this.modelFor('misc'));
  },

  model: function(params) {
    return this.store.findRecord('misc-document', params.document_id);
  },

  actions: {
    willTransition: function() {
      let commonModel = this.get('controller.commonModel');
      commonModel.types.forEach((type) => {
        if (!type.get('id')) {
          type.deleteRecord();
        }
      });

      commonModel.tags.forEach((tag) => {
        if (!tag.get('id')) {
          tag.deleteRecord();
        }
      });

      return true;
    },

    save() {
      let controller = this.get('controller');
      let item = controller.get('model');

      item.get('miscType').then((type) => {
        let promises = [];
        if (type && !type.get('id')) {
          promises.push(type.save());
        }

        item.get('tags').forEach((tag) => {
          if (!tag.get('id')) {
            promises.push(tag.save());
          }
        });

        EmberPromise.all(promises).then(() => {
          item.save().then(() => {
            controller.transitionToRoute('misc.view', item);
          }).catch(() => {
            // TODO: handle the error
          });
        });
      });
    }
  }
});
