const mongoose = require("mongoose");
const db = "mongodb://localhost:27017/react-redux-a-2"
module.exports = () => {
    return mongoose.connect(db)
}