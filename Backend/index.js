const express = require ('express');
const { createTODO } = require ('./types');
const { updateTODO } = require ('./types');
const app = express(); 

app.use(express.json());

app.post("/todo" , function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTODO.parse(createPayload);
    if  (!parsedPayload.sucess) {
        res.status(411).json ({
            msg : " you sent the wrong inputs ",

        })
        return;
    }    
})


app.get("/todo" , function (req, res) {

})

app.put("/completed" , function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTODO.parse(updatePayload);
    if  (!parsedPayload.sucess) {
        res.status(411).json ({
            msg : " you sent the wrong inputs ",

        })
        return;
    } 
})




const port = 3000;
