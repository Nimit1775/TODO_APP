const express = require ('express');
const { createTODO } = require ('./types');
const { updateTODO } = require ('./types');
const {Todo } = require ('./db');
const cors = require ('cors');
const app = express(); 

app.use(express.json());
app.use(cors());

app.post("/todo", async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTODO.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }

await Todo.create  ({
    title  : createPayload.title,
    description : createPayload.description,
    completed : false
})
res.json  ({
    msg :" Todo created successfully",
})

})



app.get("/todo" ,  async function (req, res) {

       const Todos = await Todo.find({});
       console.log(Todos);

       res.json({
           Todos,
       })   

})

app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTODO.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }

    await Todo.update({
        _id   : req.body.id,
    },{
        completed : true,
    
    })

    res.json  ({
        msg :" Todo  marked as completed successfully ",
    })

})


app.listen(3000);

