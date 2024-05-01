const express = require('express');

const {
  createSubCategory,
  getSubCategory,
  getSubCategories,
  updateSubCategory,
  deleteSubCategory,
  setCategoryIdToBody,
  createFilterObj,
} = require('../Services/subCategoryService');
const {
  createSubCategoryValidator,
  getSubCategoryValidator,
  updateSubCategoryValidator,
  deleteSubCategoryValidator,
} = require('../utils/validators/subCategoryValidator');
const authService = require('../Services/authService');

const router = express.Router({ mergeParams: true });

// Middleware function to check if the user is authenticated
const protect = (req, res, next) => {
  // Call the protect method from authService to check authentication
  authService.protect(req, res, next);
};

// Middleware function to check if the user has permission
const allowedTo = (role1, role2) => {
  return (req, res, next) => {
    // Call the allowedTo method from authService to check permission
    authService.allowedTo(role1, role2)(req, res, next);
  };
};

router
  .route('/')
  .post(
    protect,
    allowedTo('admin', 'manager'), // Middleware to check permission
    setCategoryIdToBody,
    createSubCategoryValidator,
    createSubCategory
  )
  .get(createFilterObj, getSubCategories);

router
  .route('/:id')
  .get(getSubCategoryValidator, getSubCategory)
  .put(
    protect,
    allowedTo('admin', 'manager'), // Middleware to check permission
    updateSubCategoryValidator,
    updateSubCategory
  )
  .delete(
    protect,
    allowedTo('admin'), // Middleware to check permission
    deleteSubCategoryValidator,
    deleteSubCategory
  );

module.exports = router;
