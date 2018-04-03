import Service from '@ember/service';
import { set, get } from '@ember/object';
import { A } from '@ember/array';

export default Service.extend({

  foo: 'bar',

  init() {
    this._super(...arguments);
    this.set('context', {});
    this.set('contexts', A());
  },

  registerContext(contextName){
    let context = this.getContext(contextName);
    if(!context) {
      context = { name: contextName , active: null, sections: A() };
      get(this, 'contexts').pushObject(context);
    }
    return context;
  },

  getContext(contextName){
    return get(this, 'contexts').findBy('name', contextName);
  },

  unregisterContext(contextName){
    const context = this.getContext(contextName);
    get(this, 'contexts').removeObject( context );
  },

  registerSection(contextName, section){
    const context = this.getContext(contextName);
    get(context, 'sections').pushObject( section );
  },

  updateContext(contextName){
    const context = this.getContext(contextName);
    this.updateSections(context);
    this.updateSelected(context);
  },

  updateSections(context){
    get(context, 'sections').forEach(section => this.updateOffset(section))
  },

  updateSelected(context){
    const selected = get(context, 'sections').reduce( this.reduceTopElement );
    set(context, 'active', selected.name);
  },

  updateOffset(section){
    set(section, 'offset', get(section, 'el').getBoundingClientRect().top);
  },

  reduceTopElement(prev, curr) {
    return Math.abs(get(prev, 'offset')) > Math.abs(get(curr, 'offset')) ? curr : prev;
  }

});
