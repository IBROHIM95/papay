const assert = require('assert');
const Member = require('../models/Member')
const jwt = require('jsonwebtoken');
const Definer = require('../lib/mistake');



let memberController = module.exports;



memberController.signup = async (req, res) =>{
    try{
       console.log('POST: cont/signup');
       const data = req.body;
       const member = new Member();
       const new_member = await member.signupData(data)
       
       const token = memberController.createToken(new_member);
        res.cookie('access_token', token, {
          maxAge: 6 * 3600 * 1000,
          httpOnly: true,
        })
 

       res.json({state: 'succed', data : new_member})
    } catch (err) {
      console.log(`ERROR, cont/signup, ${err.message}`);
      res.json({state : 'fail', message : err.message})
    }
}
memberController.login = async (req, res) =>{
    try{
        console.log('POST: cont/login');
        const data = req.body;
        const member = new Member();
        result = await member.loginData(data)
         
        
        const token = memberController.createToken(result);
        res.cookie('access_token', token, {
          maxAge: 6 * 3600 * 1000,
          httpOnly: true,
        })

        res.json({state: 'succed', data : result})
     } catch (err) {
       console.log(`ERROR, cont/signup,${err.message}`);
       res.json({state : 'fail', message : err.message})
     }
}
memberController.logout = (req, res) =>{
    console.log('GET cont.logout');
    res.send('logout sahifasidasiz');
}

memberController.createToken = (result) => {
  try{
   
    const upload_data = {
      _id: result._id,
      mb_nick: result.mb_nick,
      mb_type: result.mb_type,
    };

    const token = jwt.sign(
      upload_data,
      process.env.SECRET_TOKEN,{
        expiresIn: '6h',
      });

      assert.ok(token, Definer.auth_err2);
      return token
   
  }catch(err){
    throw err

  }

}
