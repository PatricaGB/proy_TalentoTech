const mongoose = require('mongoose');
const UserSchema = mongoose.Schema;

const UsuarioMDB = new UserSchema({
    username: {
      type: String,
      required: true,
      unique: true    
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    }
});

module.exports=mongoose.model('UsuarioMDB', UsuarioMDB);