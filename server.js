const dotenv = require('dotenv');
dotenv.config()

const http  = require('http');
const mongodb = require('mongodb')



const connectionString = process.env.MONGO_URL;
 
 

mongodb.connect(connectionString, {
    useNewUrlParser:true, 
    useUnifiedTopology: true
},
(err, client) => {
    if(err) console.log("Error connection on MongoDb");
    else{
        console.log("MongoDB connection succed");
        module.exports = client;
        
        
        const app = require('./app');
        const server = http.createServer(app)    // createServer() bitta parametr qabul qiladi
        let PORT =process.env.PORT ||  3000;
        server.listen(PORT, function() {
        console.log(
            `The server is running succesfully on the port: ${PORT}, http://localhost:${PORT} `);
})
    }
}
);

