const Definer = require("../lib/mistake");
const assert = require('assert');
const Product = require('../models/Product')


let productController = module.exports

productController.getAllProducts = async(req,res) => {
  try{
    console.log('GET: cont/getAllProducts ')
  } catch{
    console.log(`ERROR, cont/getAllProducts, ${err.message}`);
    res.json({state : 'fail', message : err.message})
  }
}
productController.addNewProduct = async(req,res) => {
  try{
    console.log('POST: cont/addNewProduct ')
    console.log(req.files);
    assert(req.files, Definer.general_err3)
    const product = new Product()
    let data = req.body
    data.product_images  = req.files.map(ele =>{
      return ele.path
    })
    console.log(data);
    res.send('ok')
  } catch{
    console.log(`ERROR, cont/addNewProduct, ${err.message}`);
    
  }
}
productController.updateChosenProduct = async(req,res) => {
  try{
    console.log('POST: cont/updateChosenProduct ')
  } catch{
    console.log(`ERROR, cont/updateChosenProduct, ${err.message}`);
    
  }
}