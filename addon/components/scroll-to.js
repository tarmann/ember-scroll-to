import Component from '@ember/component';
import { get, computed } from '@ember/object';
import layout from '../templates/components/scroll-to';
import { inject as service } from '@ember/service';

export default Component.extend({

  layout,

  scrollToService: service(),

  tagName: 'a',

  attributeBindings: ['href'],

  classNameBindings: ['isActive'],

  href: computed('context', 'target', function(){
    return `#${get(this, 'context')}-${get(this, 'target')}`;
  }),

  isActive: computed.equal('href', 'context.active'),

  click(e){
    e.preventDefault();
  }
});
