const express = require("express");
const { model } = require("mongoose");
//const {studentModel} = require("./models/studentModels");
const {studentModel} = require("../models/studentModels");
//1. create router
const router = express.Router();


//2. define router
router.get("/",(req,res)=> {
    res.end("Home page");
})

// let insertDoc = async(info) => {
//     try {
        
//         let studentInfo = new studentModel(info);
//         let result = await studentInfo.save();
//         res.status(201).send(result); 

//     } catch (error) {
//         res.status(400).send(error);
//     }
// }


// app.post("/student",(req,res) => {
//     console.log(req.body);
    
//     insertDoc(req.body)

    
// });


router.post("/student",async(req,res) => {
        try {
        
                let studentInfo = new studentModel(req.body);
                let result = await studentInfo.save();
                console.log(result);
                res.status(201).send(result); 
        
        } catch (error) {
            console.log(error);
                res.status(400).send(error);
        }
})


router.get("/student",async(req,res) => {
    try {
        
        let infomation = await studentModel.find();
        console.log(infomation);
        res.status(201).send(infomation);


    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});


//to get specific student information using id

router.get("/student/:id",async(req,res) => {

    try {

        // for student/:name using req.params.name
        console.log(req.params); 

        const _id = req.params.id;
        console.log(_id);

        const information = await studentModel.findById(_id);
        if(!information)
        {
            res.status(400).send({});
        }
        console.log(information);
        
        res.status(201).send(information);



    } catch (error) {
        console.log(error);
        res.status(400).send(error);   
    }

})

// to delete the document

router.delete("/student/:id", async(req,res) => {
    console.log("hello");
    try {
        let id = req.params.id;
        console.log(id);
        let result = await studentModel.findByIdAndDelete(id);
        console.log(result);
        if(!result){
            res.status(200).send({})
        }

        res.status(200).send(result);


    } catch (error) {
        res.status(400).send(error);
    }
})


router.patch("/student/:id",  async(req,res) => {
    try {
        
        let id = req.params.id;
        let updateInfo = req.body;
        let result = await studentModel.findByIdAndUpdate(id,updateInfo,{
            new : true
        });
        console.log(result);
        if(result == null){
            res.status(200).send({});
        }
        res.status(200).send(result);



    } catch (error) {
        res.status(400).send(error);
    }
})



// 3. register router wiil be done in index page

module.exports = {router};