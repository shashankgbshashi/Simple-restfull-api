const express = require("express");
const {mongoose} = require("./db/conn");

const {router} = require("./routers/route");

const app = express();

// while hosting it uses process.env.PORT
const PORT = process.env.PORT || 8000;


// if the request incoming is json then use express.json()

// registering router and express json
app.use(express.json());
app.use(router);




app.listen(PORT,() => {
    console.log(`Listening at port Number : ${PORT}`);
});


