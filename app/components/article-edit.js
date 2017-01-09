import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(article) {
      if(confirm('Delete this???')) {
        this.sendAction('destroyArticle', article);
      }
    }
  }
});
