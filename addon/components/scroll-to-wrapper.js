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
    this.set('sections', A());
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
    throttle(this, this.updateSelected.bind(this), 500);
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

  updateSelected() {
    // update offset for children
    this.get('sections').forEach(section => this.updateOffset(section))

    // update selected
    let selected = get(this, 'sections').reduce( this.reduceTopElement );
    set(this, 'selected', `#${selected.name}`);
    set(this, `scrollToService.context.${get(this, 'name')}`, selected.name);
  },

  updateOffset(section){
    set(section, 'offset', get(section, 'el').getBoundingClientRect().top);
  },

  reduceTopElement(prev, curr) {
    return Math.abs(get(prev, 'offset')) > Math.abs(get(curr, 'offset')) ? curr : prev;
  }

});
