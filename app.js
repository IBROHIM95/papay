const express = require('express') 

const app = express();  
const http  = require('http')


// ModeDB chaqirish
const db = require("./server").db();
const mongodb = require('mongodb')


//1 KIRISH codlar

app.use(express.static('public'))  // har qanaqa browzerdan kirib kelgan zabros uchun folder ochiq degani 
app.use(express.json()) // kirib kelayotgan json fotmatdagi datani object holatiga o'girib beradi
app.use(express.urlencoded({extended:true})); // html form express qabul qilish uchun ishlatilinadi
//2 : session codlar

//3 views codlar
app.set('views', 'views')  
app.set('view engine', 'ejs') 

//4 routing codlar

module.exports = app