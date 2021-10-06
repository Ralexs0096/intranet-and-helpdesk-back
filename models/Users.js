const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = mongoose.model('Users', new Schema({
    name: {
      first: String,
      LastName: String
    },
    Email: {type: String, required:true, unique: true, lowercase: true, trim: true},
    UsersStatus: {type: String, required: false, default: 'active'},
    PasswordEmail: {type: String, required: false, default: ''},
    Position: { type: String, default: 'user' },
    Area: { type: String, required: true},
    Ext: { type: Number, required: false, default: ''},
    StatusPbx: { type: String, default: "active", lowercase: true, trim: true}
}, {
  timestamps: true,
  versionKey: false
}))

module.exports = Users;
