const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Requests = mongoose.model('Requests', new Schema({
    User: {type: String, required: true},
    Description: {type: String, required: true},
    InitialDate: {type:Date, default: ''},
    FinalDate: {type: Date, default: ''},
    Type: {type: String, default: 'Otro'},
    Mail: {type: String, required: true},
    AreaCode: {type: Number, required: true},
    State: {type: String, default: "Incompleta"},
}, {
  timestamps: true,
  versionKey: false
}))

module.exports = Requests;
