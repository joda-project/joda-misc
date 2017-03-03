import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:misc/index/index', 'Unit | Route | misc/index/index', {
  // Specify the other units that are required for this test.
  needs: ['service:session']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
