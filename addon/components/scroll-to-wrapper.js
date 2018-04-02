import Component from '@ember/component';
import { set, get } from '@ember/object';
import { throttle } from '@ember/runloop';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';
import layout from '../templates/components/scroll-to-wrapper';

export default Component.extend({

  layout,

  scrollToService: service(),

  init() {
    this._super(...arguments);
    this.registerContext(this.get('name'));
  },

  didInsertElement(){
    this._super(...arguments);
    this.updateEl();
    this.addEventListeners();
    this.updateSelected();
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
    get('scrollToService').updateContext( get(this, context) );
  }

});
