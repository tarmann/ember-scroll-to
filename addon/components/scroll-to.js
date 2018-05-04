import Component from '@ember/component';
import { get, computed } from '@ember/object';
import layout from '../templates/components/scroll-to';
import { inject as service } from '@ember/service';
import $ from 'jquery';

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

    const contextEl = get(this, '_context.el');
    const sectionEl = get(this, '_context.sections').findBy('name', get(this, 'section')).el;
    const context   = get(this, '_context.on') === 'window' ? 'html' : contextEl;

    const scrollTop = `${sectionEl.offsetTop}px`;

    $(context).animate({ scrollTop });
  }

});
