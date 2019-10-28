const mongoose = require('mongoose');
const bcrypt   = require('bcryptjs');
const jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
     firstName: {
         type: String,
         require: 'First name is required'
     },
     lastName: {
         type: String,
         require: 'Last name is required'
     },
     userName: {
         type: String,
         require: 'User name is required'
     },
     email: {
         type: String,
         require: 'Email is required',
         unique: true
     },
     password: {
         type: String,
         require: 'Password is required',
         minlength: [4, 'Password must be atleast 4 characters long']
     },
     saltSecret:  String
});

//custom validation
userSchema.path('email').validate((val) => {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(val);
}, 'Invalid e-mail.');



//Events - encrypt password
userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
     bcrypt.hash(this.password, salt, (err, hash) => {
            this.password   = hash;
            this.saltSecret = salt;
            next();
     });
    });
});

// Methods
userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}

mongoose.model('User', userSchema);