import Ember from 'ember';

export default Ember.Component.extend({

  /*
    The style object can be also accessed by className binding to apply styles to the components root-element (div):

        classNameBindings: ['styles.normal'],


    By computed alias attribute:

        classNameBindings: ['normal'],

        normal: Ember.computed.alias('styles.normal'),


    Or by computed function:

        classNameBindings: ['normal'],

        normal: Ember.computed('styles.normal', function() {
          return this.get('styles.normal');
        }),
   */

  click(e) {
    this._super(e);
    this.sendAction('action', this.get('param'));
    console.log(this.get('styles'));
  }
});
