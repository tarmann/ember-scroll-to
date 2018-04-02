import Component from '@ember/component';
import { get, getProperties, set, computed } from '@ember/object';
import { inject as service } from '@ember/service';
import layout from '../templates/components/scroll-to-section';

export default Component.extend({

  layout,

  scrollToService: service(),

  didInsertElement(){
    this._super(...arguments);
    this.createSection();
    this.registerSection();
  },

  willDestroyElement(){
    this.unregisterSection();
  },

  attributeBindings: ['id'],

  id: computed('context', 'target', function(){
    return `#${get(this, 'context')}-${get(this, 'name')}`;
  }),

  createSection(){
    this.set('section', {
      name: this.get('name'),
      el: this.$().get(0),
      offset: null
    });
  },

  registerSection(){
    const { scrollToService, context, section } = getProperties('scrollToService', 'context', 'section');
    const sectionObj = scrollToService.registerSection( context, section );
    set(this, 'section', sectionObj);
  },

  unregisterSection(){
    const { scrollToService, context, section } = getProperties('scrollToService', 'context', 'section');
    scrollToService.unregisterSection( context, section );
  }

});
