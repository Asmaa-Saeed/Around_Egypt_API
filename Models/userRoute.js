const express = require('express');
const routers = require('../Services/handlersFactory');
const {
  
  createUserValidator ,
 
  updateUserValidator,
  
  deleteUserValidator,
  getUserValidator,
} = require('../utils/validators/userValidator');

//const authService = require('../services/authService');

const {
  getUsers,
  getUser,
 
  createUser,
  
  updateUser,
  deleteUser,

  uploadUserImage,
  resizeImage,
  changeUserPassword,
} = require('../Services/userService');

const router = express.Router();
//router.get('/getMe', getLoggedUserData, getUser);
router.put('/changeMyPassword');
//router.put('/updateMe', updateLoggedUserValidator, updateLoggedUserData);
//router.delete('/deleteMe', deleteLoggedUserData);




router.route('/').get(getUsers).post( createUserValidator ,createUser)
    ;
    // router.route('/id')
    // .get(getuserValidator,getUser)
    // .put(uploadUserImage,
    //     resizeImage,updateUserValidator,updateuser)
    //     .delete(deleteUserValidator,deleteuser);
/*router
  .route('/')
  .get()
  .post(
  
    uploadUserImage,
    resizeImage,
    //createBrandValidator,
    createUser
  );*/
  router.route('/:id').get(getUserValidator, getUser).put(uploadUserImage, resizeImage, updateUserValidator, updateUser).delete( deleteUserValidator,deleteUser);







  /*router/
  .route('/:id')
  .get(getUserValidator, getUser)
  .put(uploadUserImage, resizeImage, updateUserValidator, updateUser)
  .delete(deleteUserValidator, deleteUser);*/
/*router
  .route('/:id')
  .get(getUser) 
  .put(
    //authService.protect,
    //authService.allowedTo('admin', 'manager'),
    uploadUserImage,
    resizeImage,
   // updateBrandValidator,
    updateuser
  )
  .delete(
    deleteuser
    //authService.protect,
    //authService.allowedTo('admin'),
    //deleteBrandValidator,
  );*/
  
module.exports = router;