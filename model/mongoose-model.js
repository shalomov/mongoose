var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:7777/blog');


var userScheme = new Schema({
    name: {
        type: String,
        required: true,
        minlength:3,
        maxlength:20
    },
    age: {
        type: Number,
        required: true,
        min: 1,
        max:100
    }
});
var User = mongoose.model("User", userScheme);
User.create({name: "Tom", age: 34}, function(err, doc){
    mongoose.disconnect();
      
    if(err) return console.log(err);
      
    console.log("Сохранен объект user", doc);
});