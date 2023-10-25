const path = require('path')
const multer = require('multer')
const uuid = require('uuid')


// function getTargetImageStore(address) {
//     return multer.diskStorage({
//         destination: function(req, file, cb){
//             cb(null, `./upload/${address}`)
//         },
//         filename: function(req, file, cb) {
//             console.log(file);
//             const extension = path.parse(file.originalname).ext;
//             const random_name = uuid.v4() + extension 
//             cb(null, random_name);
//         }
//     }
        
//     )
// }

//   makeUploader = (address)=> {
//  const storage = getTargetImageStore(address);
//  return multer({storage : storage})
// }

function getTargetImageStorage(address) {
    return multer.diskStorage({
      destination: function (req, file, cb) {
        // where
        cb(null, `./uploads/${address}`); //where to upload (members/community/products)
      },
      filename: function (req, file, cb) {
        // what
        console.log(file);
        const extension = path.parse(file.originalname).ext; //parsing file name to get extension
        const random_name = uuid.v4() + extension; // generating random name
        cb(null, random_name);
      },
    });
  }
  
  const makeUploader = (address) => {
    const storage = getTargetImageStorage(address);
    return multer({ storage: storage });
  };
  
  module.exports = makeUploader;    


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

//module.exports.upLoadProducmodule.exports = makeUploader