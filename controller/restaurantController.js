const Member = require('../models/Member')
const Product = require('../models/Product')
const assert = require('assert');
const Definer = require("../lib/mistake");
const Restaurant = require('../models/Restaurant');


let restaurantController = module.exports;


restaurantController.home = (req, res) => {
  try{
    console.log('GET: cont/home');
    res.render('home-page')

  }catch(err){
    console.log(`ERROR, cont/home, ${err.message}`);
    res.json({state : 'fail', message : err.message})
  }
}

restaurantController.getMyRestaurantProducts = async(req,res) =>{
  try{
    console.log('GET: cont/getMyRestaurantData ');
    const product = new Product()
    const data = await product.getAllProductsDataResto(res.locals.member);
    res.render('restaurant-menu', {restaurant_data : data})
    
  }catch(err) {
    console.log(`ERROR, cont/getMyRestaurantData, ${err.message}`);
      res.redirect('/resto')
  }
}


restaurantController.getSignupMyRestaurant = async(req,res) =>{
  try{
    console.log('GET: cont/getSignupMyRestaurant ');
    res.render('signup')
  }catch {
    console.log(`ERROR, cont/getSignupMyRestaurant, ${err.message}`);
      res.json({state : 'fail', message : err.message})
  }
}

restaurantController.signupProccess = async (req, res) =>{
    try{
       console.log('POST: cont/signup');
       assert(req.file, Definer.general_err3)
       

       let new_member = req.body;
       new_member.mb_type = 'RESTAURANT';
       new_member.mb_image = req.file.path
       
        member = new Member();
        result = await member.signupData(new_member)
       
        req.session.member = result;
        res.redirect('/resto/products/menu')
        
       
    } catch (err) {
      console.log(`ERROR, cont/signup, ${err.message}`);
      res.json({state : 'fail', message : err.message})
    }
}

restaurantController.getLoginMyRestaurant = async(req,res) =>{
  try{
    console.log('GET: cont/getLoginMyRestaurant ');
    res.render('login-page')
  }catch {
    console.log(`ERROR, cont/getLoginMyRestaurant, ${err.message}`);
      res.json({state : 'fail', message : err.message})
  }
}

restaurantController.loginProccess = async (req, res) =>{
    try{
        console.log('POST: cont/loginProccess');
        const data = req.body;
        member = new Member();
        result = await member.loginData(data)
        
        req.session.member = result;
        req.session.save(function() {
          result.mb_type ==='ADMIN' 
          ? res.redirect('/resto/all-restaurant')   
          : res.redirect('/resto/products/menu');
        })
 
        
     } catch (err) {
       console.log(`ERROR, cont/login-page,${err.message}`);
       res.json({state : 'fail', message : err.message})
     }
}
restaurantController.logout = async(req, res) =>{
    try{
      console.log('GET cont/logout');
    req.session.destroy(function() {
      res.redirect('/resto')
    })
    }catch (err) {
      console.log(`ERROR, cont/logout,${err.message}`);
       res.json({state : 'fail', message : err.message})
    }

    
}
restaurantController.validateAuthRestaurant = (req, res, next) => {
  if (req.session?.member?.mb_type === "RESTAURANT") {
    req.member = req.session.member;
    next();
  } else
    res.json({
      state: "fail",
      message: "Only authenticated members with restaurant type are allowed",
    });
};

restaurantController.checkSessions = (req, res) =>{
    if(req.session?.member) {
      res.json({state: 'succed', data: req.session.member})
    }else{
      res.json({state: 'fail' , message: 'you arenot authenticated' })
    }
}

restaurantController.validateAdmin = (req, res, next) => {
  if (req.session?.member?.mb_type === "ADMIN") {
    req.member = req.session.member;
    next();
  } else{
const html = `<script> 
          alert('Admin Page: Permission denied')
          window.location.replace('/resto')
              </script>`

    res.end(html)
  }
   
};

restaurantController.getAllRestaurants = async (req, res) =>{
  try{
    console.log('GET cont/getAllRestaurants');

    const restaurant = new Restaurant()
    const restaurants_data = await restaurant.getAllRestaurantsData()
    console.log(restaurants_data);

    res.render('all-Restaurants', {restaurants_data: restaurants_data})
  
  }catch (err) {
    console.log(`ERROR, cont/logout, ${err.message}`);
     res.json({state : 'fail', message : err.message})
  }
}