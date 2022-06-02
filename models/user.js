const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName:{
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, 
  },
  password: {
    type: String, 
    required: true,
  },
  events :{
    type: Array,
    required: false,
  },
  houseInfo : {
    type: Object,
    required: false,
    default: {
      hasHouse: false, 
      houseData : {
        houseName: null,
        houseId : null
      },
    },
  },
  roles: {
    type: [String],
    enum: ['user', 'admin', 'super_admin'],
    default: ['user'],
  }


})
const User = mongoose.model('User', userSchema);

module.exports = User;