const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Support = mongoose.model('Support', new Schema({

}, {
  timestamps: true,
  versionKey: false
}))

module.exports = Support;
