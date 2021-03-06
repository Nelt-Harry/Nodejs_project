const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

mongoose.plugin(slug)
const Course = new Schema({
  name: {type: String},
  price: {type: String},
  img: {type: String},
  slug: {type: String, slug: 'name', unique: true},
}, {
  timestamps: true,
});

module.exports = mongoose.model('Course',Course)