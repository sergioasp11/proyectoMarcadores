const mongoose = require('mongoose');
const config = require('./config');

const URI = config.mongodb.uri;

const conectarDB = () => {
    try {
        mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(db => console.log('BD conectada'))
        .catch(err => console.log(err));
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = conectarDB();
