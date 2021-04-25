const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: String,
  username: String,
  first_name: String,
  last_name: String,
  observableDelegates: [
    {
      type: String,
      ref: 'Delegate'
    }
  ],
  lastActivity: Number,
  language: String,
  totalAddresses: Number
},
{
  _id: false,
  timestamps: true,
});

userSchema
  // .pre('find', function() {
  //   this.populate('observableAddresses');
  // })
  .pre('findOne', function() {
    this.populate('observableDelegates');
  });

const User = mongoose.model('User', userSchema);

module.exports = User
