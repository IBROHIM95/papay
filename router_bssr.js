const express = require('express')
const router_bssr = express.Router();
const restaurantController = require('./controller/restaurantController')
const productController = require('./controller/productController');
const makeUploader_product = require('./utils/upload-multer')('products');
const uploader_members = require('./utils/upload-multer')('members');

           //BSSR EJS

router_bssr
.get("/sign-up", restaurantController.getSignupMyRestaurant )
.post("/sign-up", uploader_members.single('restaurant_img'),
 restaurantController.signupProccess );

router_bssr
.get("/login-page", restaurantController.getLoginMyRestaurant )
.post("/login-page", restaurantController.loginProccess );

router_bssr.get("/logout", restaurantController.logout );
router_bssr.get("/check-me", restaurantController.checkSessions );

router_bssr.get('/', restaurantController.home)

router_bssr.get("/products/menu", restaurantController.getMyRestaurantProducts );

router_bssr.post(
    "/products/create",
    restaurantController.validateAuthRestaurant,
    makeUploader_product.array("product_images", 5),
    productController.addNewProduct
  );
router_bssr.post("/products/edit/:id",
restaurantController.validateAuthRestaurant,
productController.updateChosenProduct );

router_bssr.get("/all-restaurant" , 
restaurantController.validateAdmin,
restaurantController.getAllRestaurants)

router_bssr.post("/all-restaurant/edit" , 
restaurantController.validateAdmin,
restaurantController.upDateRestaurantByAdmin)


 module.exports = router_bssr