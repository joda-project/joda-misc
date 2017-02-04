import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('misc-document', 'Unit | Model | misc document', {
  // Specify the other units that are required for this test.
  needs: ['model:file', 'model:misc-type', 'model:tag']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
