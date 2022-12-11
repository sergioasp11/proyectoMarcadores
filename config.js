require('dotenv').config(); 

module.exports = {
    app: {
        port: process.env.PORT || 3000 
    },
    mongodb: {
        uri: process.env.MONGODB_URI
    } 
}
