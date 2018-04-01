import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('scroll-to-wrapper', 'Integration | Component | scroll to wrapper', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{scroll-to-wrapper}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#scroll-to-wrapper}}
      template block text
    {{/scroll-to-wrapper}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
