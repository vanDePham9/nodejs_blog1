const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Infomation = new Schema({
  name: { type: String, required: true },
  age: { type: String },
  img: { type: String },
  description: { type: String },
  slug: {type: String, slug: "name", unique: true}
}, {
  timestamps: true,
});

module.exports = mongoose.model('Infomation', Infomation);