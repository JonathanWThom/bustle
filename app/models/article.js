import DS from 'ember-data';

export default DS.Model.extend({
  headline: DS.attr(),
  article: DS.attr(),
  image: DS.attr(),
  authors: DS.attr()
});
