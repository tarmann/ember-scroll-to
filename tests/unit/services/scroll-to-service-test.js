import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | scroll-to-service', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let service = this.owner.lookup('service:scroll-to-service');
    assert.ok(service);
  });

  module(`registerContext`, function(){
    test(`it register a new context`, function(assert) {
      let contextName = 'myContext';
      let service = this.owner.lookup('service:scroll-to-service');
      let context = service.registerContext('myContext')

      assert.equal(context.active, null);

      assert.equal(context.active, null);
      assert.equal(context.name, contextName);
      assert.equal(context.sections.length, false);
    });
  })

  module(`getContext`, function(){
    test('it exists', function(assert) {
      let service = this.owner.lookup('service:scroll-to-service');
      assert.ok(service);
    });
  })

  module(`unregisterContext`, function(){
    test('it exists', function(assert) {
      let service = this.owner.lookup('service:scroll-to-service');
      assert.ok(service);
    });
  })


  module(`registerSection`, function(){
    test('it exists', function(assert) {
      let service = this.owner.lookup('service:scroll-to-service');
      assert.ok(service);
    });
  })


  module(`updateContext`, function(){
    test('it exists', function(assert) {
      let service = this.owner.lookup('service:scroll-to-service');
      assert.ok(service);
    });
  })


  module(`updateSections`, function(){
    test('it exists', function(assert) {
      let service = this.owner.lookup('service:scroll-to-service');
      assert.ok(service);
    });
  })


  module(`updateSelected`, function(){
    test('it exists', function(assert) {
      let service = this.owner.lookup('service:scroll-to-service');
      assert.ok(service);
    });
  })


  module(`updateOffset`, function(){
    test('it exists', function(assert) {
      let service = this.owner.lookup('service:scroll-to-service');
      assert.ok(service);
    });
  })


  module(`reduceTopElement`, function(){
    test('it exists', function(assert) {
      let service = this.owner.lookup('service:scroll-to-service');
      assert.ok(service);
    });
  })

});

