import DS from 'ember-data';
import Document from 'joda-core/models/document';

export default Document.extend({
  miscType: DS.belongsTo('misc-type')
});
