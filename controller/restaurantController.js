const Member = require('../models/Member')
const Product = require('../models/Product')

let restaurantController = module.exports;


restaurantController.getMyRestaurantProducts = async(req,res) =>{
  try{
    console.log('GET: cont/getMyRestaurantData ');
    const product = new Product()
    const data = await product.getAllProductsDataResto(res.locals.member);
    res.render('restaurant-menu', {restaurant_data : data})
    
  }catch(err) {
    console.log(`ERROR, cont/getMyRestaurantData, ${err.message}`);
      res.json({state : 'fail', message : err.message})
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
       const data = req.body;
        member = new Member();
        new_member = await member.signupData(data)
       
        req.session.member = new_member;
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
        console.log('POST: cont/login-page');
        const data = req.body;
         member = new Member();
        result = await member.loginData(data)
        
        req.session.member = result;
        req.session.save(function() {
          res.redirect('/resto/products/menu')
        })
 
        
     } catch (err) {
       console.log(`ERROR, cont/login-page,${err.message}`);
       res.json({state : 'fail', message : err.message})
     }
}
restaurantController.logout = (req, res) =>{
    console.log('GET cont.logout');
    res.send('logout sahifasidasiz');
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

// restaurantController.validateAuthRestaurant = (req,res,next) => {
//   if(req.session?.member?.mb_type === 'RESTAURANT'){
//     req.member = req.session.member;
//     next();
//   }else {
//     res.json({
//       state : 'fail',
//       error : 'only authenticated members with restaurant type  '
//     })
//   }
// }

restaurantController.checkSessions = (req, res) =>{
    if(req.session?.member) {
      res.json({state: 'succed', data: req.session.member})
    }else{
      res.json({state: 'fail' , message: 'you arenot authenticated' })
    }
}