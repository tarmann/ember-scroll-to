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

  href: computed('section', '_context.name', function(){
    return `#${get(this, '_context.name')}-${get(this, 'section')}`;
  }),

  isActive: computed('section', '_context.active', function(){
    return get(this, 'section') === get(this, '_context.active');
  }),

  click(e){
    e.preventDefault();
  }
});
