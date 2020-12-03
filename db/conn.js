const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/myapp',{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true
})
.then(()=> {
    console.log("Connection successful");
})
.catch((err) => {
    console.log("connection failed");
})

module.exports = {mongoose};