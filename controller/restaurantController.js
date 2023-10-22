const Member = require('../models/Member')

let restaurantController = module.exports;

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
       

       res.json({state: 'succed', data : new_member})
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
        console.log('POST: cont/login');
        const data = req.body;
         member = new Member();
        result = await member.loginData(data)
        
 
        res.json({state: 'succed', data : result})
     } catch (err) {
       console.log(`ERROR, cont/signup,${err.message}`);
       res.json({state : 'fail', message : err.message})
     }
}
restaurantController.logout = (req, res) =>{
    console.log('GET cont.logout');
    res.send('logout sahifasidasiz');
}