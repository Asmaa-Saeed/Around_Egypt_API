const express = require('express');

const {
    getCategories,
     createCategory, 
     getCategory,
     updateCategory,
     deleteCategory,
    } = require("../Services/CategoryService");


    const router = express.Router();

    router.route('/:id')
    .get(getCategory)
    .put(updateCategory)
    .delete(deleteCategory);
    
    router.route('/' )
    .get(getCategories)
    .post(createCategory);

    module.exports = router;