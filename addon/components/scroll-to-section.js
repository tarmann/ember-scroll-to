import Component from '@ember/component';
import layout from '../templates/components/scroll-to-section';

export default Component.extend({

  layout,

  didInsertElement(){
    this._super(...arguments);

    this.set('section', {
      name: this.get('name'),
      el: this.$().get(0),
      offset: null
    });

    this.get('sections').pushObject( this.get('section') );
  }

});
