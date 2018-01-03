import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { inject as service } from '@ember/service';
import { translationMacro as t } from "ember-i18n";

export default Route.extend({
  titleToken: t('misc.miscellaneous'),
  i18n: service(),

  model: function() {
    return hash({
      types: this.get('store').findAll('misc-type'),
      tags: this.get('store').findAll('tag')
    });
  }
});
