class Definer {
     // general error
    static general_err1 = 'att: something went wrong'
    static general_err2 = 'att: there is nodata with that params'
    static general_err3 = 'att: file upload error'

   /** member auth related */

    static auth_err1 ='att: mongodb validation failed ';
    static auth_err2 ='att: jwt token creation error ';
    static auth_err3 = 'att: no member withthat mb_nick'
    static auth_err4 = 'att: your creadention isnot match'
   // products related error
   
   static product_err1 = 'att: product creation is failed'

}

module.exports = Definer