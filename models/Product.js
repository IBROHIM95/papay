const { exec } = require('child_process');
const { shapeIntoMongooseObjectId } = require('../lib/config');
const Definer = require('../lib/mistake');
const ProductModel = require('../scheme/product.module')
const assert = require('assert');

class Product {
    constructor() {
      this.productModel = ProductModel
    }

    async getAllProductsDataResto(member) {
      try{
        member._id = shapeIntoMongooseObjectId(member._id)
        const result = await this.productModel.find({
          restaurant_mb_id : member._id,
        })
        assert.ok(result, Definer.general_err1)
        console.log('sassa', result);
        return result
      }catch(err){
        throw err
      }
    }

     async addNewProductData(data, member){
      try{
        data.restaurant_mb_id = shapeIntoMongooseObjectId(member._id);
        console.log(data);

        const new_product  =new  this.productModel(data);
        const result = await new_product.save();

        assert.ok(result, Definer.general_err1)
        return result
      }catch(err) {
     throw err
    }
    }


     async updateChosenProductData(id, updated_data, mb_id){
      try{
        id = shapeIntoMongooseObjectId(id);
        mb_id = shapeIntoMongooseObjectId(mb_id);

        const result = await this.productModel
        
        .findByIdAndUpdate({_id: id, restaurant_mb_id : mb_id}, updated_data, {
          runValidators: true,
          lean: true,
          returnDocument: 'after'
          
        })
        .exec();
          
        assert.ok(result, Definer.general_err1)
        return result
      } catch(err) {
        throw err
    }
    }
}

module.exports = Product