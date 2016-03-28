import Ember from 'ember';

export default Ember.Component.extend({
  
  tagName: 'div',

  click(e) {
    this._super(e);
    this.sendAction('action', this.get('param'));
  }
});
