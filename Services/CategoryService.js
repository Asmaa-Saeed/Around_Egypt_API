const slugify = require('slugify');
const asyncHandler = require('express-async-handler')
const Category = require('../Models/categoryModel');

//desc Get a list of categories
//route  Get method =>  api/v1/categories
// access public  => everyone can see/read the categories
exports.getCategories = asyncHandler(async (req, res) => {
    const page = req.query.page * 1 ||  1;
    const limit = req.query.limit * 1 || 2;
    //console.log(page);
    //console.log(limit);
    const skip =(page-1) * limit; //2-1 * 5 => this will skip the first 5 documents
    // and give me the next 5 documents
    const categories = await Category.find({}).skip(skip).limit(limit);
    res.status(200).json({results:categories.length ,page, data : categories});
});

//desc  create a specific category by id
//route Create method => api/v1/categories/id
//access public => api/v1/categories

exports.getCategory = asyncHandler( async (req, res) => {
  const category = await Category.findById(req.params.id);
  if(!category){
    res.status(404).json({meg: `No category for this ${id}` })
}
res.status(200 ).json({data: category})});

 //desc create category
 // Route(API) => post method  => api/v1/categories
 // @access private, only the manager or admin who can create the category
 exports.createCategory = asyncHandler(async (req, res) => {
  const name = req.body.name;

  //Async Await syntax
  const category = await Category.create({name, slug:slugify(name)});
  res.status(201).json({data : category});
});

 // desc => update specific category
 // route => put method => api/v1/categories/:id
 //access => private, onlu the manager or the admin who can update the category
 exports.updateCategory = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const name = req.body.name;

  const category = await Category.findOneAndUpdate({_id: id},{name, slug: slugify(name) },{new : true});
  if(!category){
    res.status(404).json({meg: `No category for this ${id}` })
    
  }else{
    res.status(200).json({data: category});
  }
});

 // desc => delete specific category
 // route => delete method => api/v1/categories/:id
 //access => private, onlu the manager or the admin who can delete the category

 exports.deleteCategory = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const category = await Category.findOneAndDelete({_id: id});
  if(!category){
    res.status(404).json({meg: `No category for this ${id}` })
    
  }else{
    res.status(200).json({msg: "Deleted successfully"});
  }
 })