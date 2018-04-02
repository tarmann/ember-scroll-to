import Component from '@ember/component';
import { get, computed } from '@ember/object';
import { inject as service } from '@ember/service';
import layout from '../templates/components/scroll-to-nav';

export default Component.extend({

  layout,

  scrollToService: service()

  // contextObj: computed('scrollToService.context', function(){
  //   console.log(`scrollToService.context.${get(this, 'context')}`)
  //   return get(this, `scrollToService.context.${get(this, 'context')}`);
  // })

});
