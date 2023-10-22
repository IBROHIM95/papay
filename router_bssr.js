const express = require('express')
const router_bssr = express.Router();
const restaurantController = require('./controller/restaurantController')
 
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


 module.exports = router_bssr