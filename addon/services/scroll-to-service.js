import Service from '@ember/service';
import { set, get } from '@ember/object';
import { A } from '@ember/array';

export default Service.extend({

  context: {},

  registerContext(contextName){
    const context = { active: null, sections: A() };
    set(this, `context.${contextName}`, context);
    return context;
  },

  unregisterContext(context){
    console.log(context);
  },

  registerSection(contextName, section){
    get(this, `context.${contextName}.sections`).pushObject( section );
  },

  unregisterContext(){
    // ...
  },

  updateContext(context){
    console.log('updateContext', context)
    this.updateSections(context);
    this.updateSelected(context);
  },

  updateSections(context){
    get(this, `context.${context}.sections`).forEach(section => this.updateOffset(section))
  },

  updateSelected(context){
    const sections = get(this, `context.${context}.sections`);
    const selected = sections.reduce( this.reduceTopElement );
    set(this, `context.${context}.active`, `#${selected.name}`);
  },

  updateOffset(section){
    console.log(get(section, 'el').getBoundingClientRect().top);
    set(section, 'offset', get(section, 'el').getBoundingClientRect().top);
  },

  reduceTopElement(prev, curr) {
    return Math.abs(get(prev, 'offset')) > Math.abs(get(curr, 'offset')) ? curr : prev;
  }

});
