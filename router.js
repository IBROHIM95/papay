const express = require('express')
const router = express.Router();
const memberController = require('./controller/memberController')
 
             // REST API
router.post("/signup", memberController.signup );
router.post("/login", memberController.login );
router.get("/logout", memberController.logout );
router.get("/check-me", memberController.checkMyAuthentication );

router.get('/menu', (req,res) => {
    res.send('menu sahifadasiz')
}  );

router.get('/community', (req,res) => {
    router.send('jamiyat sahifasidasiz')
}  );
 module.exports = router