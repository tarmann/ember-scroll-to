import Component from '@ember/component';
import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';
import layout from '../templates/components/scroll-to-nav';

export default Component.extend({

  layout,

  scrollToService: service(),

  didReceiveAttrs(){
    this._super(...arguments);
    console.log('hello');
    this.registerContext();
  },

  registerContext(){
    const context = get(this, 'scrollToService').registerContext( get(this, 'context') );
    set(this, '_context', context);
    console.log(context);
  }

});
