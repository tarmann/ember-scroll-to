import Component from '@ember/component';
import { alias } from '@ember/object/computed';
import { set, get } from '@ember/object';
import $ from 'jquery';
import { throttle } from '@ember/runloop';
import layout from '../templates/components/scroll-to-wrapper';
import _ from 'lodash';

export default Component.extend({

  layout,

  NS: alias('data-toggle-namespace'),

  classNames: ['scroll-to-wrapper'],

  attributeBindings: ['data-toggle-namespace'],

  init() {
    this._super(...arguments);
    this.selected = [];
  },

  didInsertElement(){
    this.$().on(`scroll.${get(this, 'NS')}`, this.onScroll.bind(this));
    set(this, '$elements', this.$().find(`[id^="${get(this, 'NS')}"]`));
    this.setSelected();
  },

  willDestroyElement() {
    this._super(...arguments);
    this.$().off(`scroll.${get(this, 'NS')}`);
  },

  onScroll() {
    throttle(this, this.setSelected.bind(this), 100);
  },

  setSelected() {
    let selectedElement = _(get(this, '$elements'))
      .map( this.mapElements )
      .reduce( this.getTopOffsetElement )
      .id

    set(this, 'selected', `#${selectedElement}`);
  },

  mapElements(item) {
    const offset = $(item).position().top;
    return { id: item.id, offset };
  },

  getTopOffsetElement(acc, val) {
    return (Math.abs(val.offset) < Math.abs(acc.offset)) ? val : acc;
  }

});
