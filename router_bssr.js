const express = require('express')
const router_bssr = express.Router();
const restaurantController = require('./controller/restaurantController')
const productController = require('./controller/productController')
           //BSSR EJS

router_bssr
.get("/signup", restaurantController.getSignupMyRestaurant )
.post("/signup", restaurantController.signupProccess );

router_bssr
.get("/login-page", restaurantController.getLoginMyRestaurant )
.post("/login-page", restaurantController.loginProccess );

router_bssr.get("/logout", restaurantController.logout );
router_bssr.get("/check-me", restaurantController.checkSessions );

router_bssr.get("/products/menu", restaurantController.getMyRestaurantData );
router_bssr.get("/products/create", 
restaurantController.validateAuthRestaurant,
productController.addNewProduct );
router_bssr.get("/products/edit/:id", productController.updateChosenProduct );


 module.exports = router_bssr