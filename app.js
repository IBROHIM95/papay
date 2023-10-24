const express = require('express') 
const app = express();  
const router = require('./router.js')
const router_bssr = require('./router_bssr.js')

let session = require('express-session')

const MongoDBStore = require('connect-mongodb-session')(session);
const store = new MongoDBStore({
    uri:process.env.MONGO_URL,
    collection : 'sessions',
})




//1 KIRISH codlar

app.use(express.static('public'))  // har qanaqa browzerdan kirib kelgan zabros uchun folder ochiq degani 
app.use(express.json()) // kirib kelayotgan json fotmatdagi datani object holatiga o'girib beradi
app.use(express.urlencoded({extended:true})); // html form express qabul qilish uchun ishlatilinadi
// 2 : session codlar
app.use(
    session({
      secret: process.env.SESSION_SECRET,
      cookie: {
        maxAge: 1000 * 60 * 30, //for 30 minutes
      },
      store: store,
      resave: true,
      saveUninitialized: true,
    })
  );

  app.use( function(req, res, next) {
    res.locals.member = req.session.number;
    next();
  } )
//3 views codlar
app.set('views', 'views')  
app.set('view engine', 'ejs') 

//4 routing codlar
app.use('/resto', router_bssr); // react, admin va userlar uchun kerak
app.use('/', router); // haridorlar uchun kerak 

module.exports = app