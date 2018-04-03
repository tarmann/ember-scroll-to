import Component from '@ember/component';
import { get } from '@ember/object';
import { throttle } from '@ember/runloop';
import { inject as service } from '@ember/service';
import layout from '../templates/components/scroll-to-context';

export default Component.extend({

  layout,

  scrollToService: service(),

  init() {
    this._super(...arguments);
    get(this, 'scrollToService').registerContext( get(this, 'context') );
  },

  didInsertElement(){
    this._super(...arguments);
    this.updateEl();
    this.addEventListeners();
    this.updateContext();
  },

  willDestroyElement() {
    this._super(...arguments);
    this.removeEventListeners();
  },

  onScroll() {
    throttle(this, this.updateContext.bind(this), 500);
  },

  updateEl(){
    this.set('el', get(this, "on") === 'window' ? window : this.$().get(0));
  },

  addEventListeners(){
    this.get('el').addEventListener('scroll', this.onScroll.bind(this));
  },

  removeEventListeners(){
    this.get('el').removeEventListener('scroll', this.onScroll.bind(this));
  },

  updateContext() {
    get(this, 'scrollToService').updateContext( get(this, 'context') );
  }

});

