// Use mongoose for views
const mongoose = require('mongoose');
// Connect to database
const connectDB = () => {
    try{
        mongoose.connect(process.env.CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology:true
        });
        console.log('DB - connected')
    } catch(error) {
        console.log('error occured while trying to connect to database', error)
        throw error;
    }
}

module.exports = connectDB;