import Component from '@ember/component';
import { get, computed } from '@ember/object';
import layout from '../templates/components/scroll-to';

export default Component.extend({
  layout,
  tagName: 'a',
  attributeBindings: ['href'],

  href: computed('context', 'target', function(){
    return `#${get(this, 'context')}-${get(this, 'target')}`;
  }),

  click(e){
    e.preventDefault();
    // get(this).animate({ scrollTop })
  }
});
