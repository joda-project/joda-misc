import Ember from 'ember';
import { translationMacro as t } from "ember-i18n";

export default Ember.Route.extend({
  titleToken: t('misc.miscellaneous'),
  i18n: Ember.inject.service(),

  model: function() {
    return Ember.RSVP.hash({
      types: this.get('store').findAll('misc-type'),
      tags: this.get('store').findAll('tag')
    });
  }
});
