const path = require('path')
const multer = require('multer')
const uuid = require('uuid')


function getTargetImageStore(address) {
    return multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, `../upload/${address}`)
        },
        filename: function(req, file, cb) {
            console.log(file);
            const extension = path.parse(file.originalname).ext;
            const random_name = uuid.v4() + extension 
            cb(null, random_name);
        }
    }
        
    )
}

  makeUpolader = (address)=> {
 const storage = getTargetImageStore(address);
 return multer({storage : storage})
}


// const product_storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, '../upload/products')
//     },
//     filename: function(req, file, cb) {
//         console.log(file);
//         const extension = path.parse(file.originalname).ext;
//         const random_name = uuid.v4() + extension 
//         cb(null, random_name);
//     }
// })

//module.exports.upLoadProductImage = multer({storage: product_storage })
module.exports = makeUploader