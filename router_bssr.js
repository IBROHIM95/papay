const express = require('express')
const router_bssr = express.Router();
const restaurantController = require('./controller/restaurantController')
 
           //BSSR EJS

router_bssr.get("/signup", restaurantController.getSignupMyRestaurant );
router_bssr.post("/signup", restaurantController.signupProccess );

router_bssr.get("/login", restaurantController.getLoginMyRestaurant );
router_bssr.post("/login", restaurantController.loginProccess );

router_bssr.get("/logout", restaurantController.logout );


 module.exports = router_bssr