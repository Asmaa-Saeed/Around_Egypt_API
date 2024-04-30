const mongoose = require('mongoose');

 //schema : it map the mongodb collection after creating the schema we convert
 // the schema into model and use this model to make some operations

//1- creating the schema9l
const userSchema = new mongoose.Schema({
    name:{ //the name of the field and his type

      type: String,
      required:[true, 'Category required'],
      unique: [true, 'Category must be unique'],
      minlength:[3, 'Too short category name'],
      maclength:[32, 'Too long category name']
    }, 
    
       //any category have any spaces the slug put a slash at that space
    slug:{
      type: String,
      lowercase: true,
    },
   // image: String,
// the job of timestamp that it will create two fields in the db (created app, updated app) 
  }, {timestamps: true});
  
  //2-convert the schema into model
  const CategoryModel = mongoose.model("Category",userSchema);
  //const CategoryModel = mongoose.model("Category", userSchema);

  module.exports = CategoryModel;