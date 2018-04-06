import Component from '@ember/component';
import { get, set } from '@ember/object';
import { throttle } from '@ember/runloop';
import { inject as service } from '@ember/service';
import layout from '../templates/components/scroll-to-context';

export default Component.extend({

  layout,

  scrollToService: service(),

  didInsertElement(){
    this._super(...arguments);
    this.updateEl();
    this.registerContext();
    this.addEventListeners();
    this.updateContext();
  },

  willDestroyElement() {
    this._super(...arguments);
    this.removeEventListeners();
  },

  registerContext(){
    const options = { el: get(this, 'el'), on: get(this, 'on') }
    get(this, 'scrollToService').registerContext( get(this, 'context'), options);
  },

  updateEl(){
    const el = get(this, 'on') === 'window' ? window : this.$().get(0)
    set(this, 'el', el);
  },

  addEventListeners(){
    this.get('el').addEventListener('scroll', this.onScroll.bind(this));
  },

  removeEventListeners(){
    this.get('el').removeEventListener('scroll', this.onScroll.bind(this));
  },

  updateContext() {
    get(this, 'scrollToService').updateContext( get(this, 'context') );
  },

  onScroll() {
    throttle(this, this.updateContext.bind(this), 500);
  }

});

