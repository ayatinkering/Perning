const express=require('express')
const app=express()
const port=3000

app.use(express.json()) // middleware that parses incoming JSON request bodies into JS objects

const tasks=[
    {"id":1, "title":"eat", "done":true},
    {"id":2, "title":"sleep", "done":true},
    {"id":3, "title":"study", "done":true}
]



// GET
app.get('/',(req,res)=>{
    res.json({
        name:"Task API",
        "version":"1.0",
        "endpoints":["/tasks"]
    })
});

app.get('/health',(req,res)=>{
    res.json({"status":"ok"})
});

app.get("/tasks",(req,res)=>{
    res.json(tasks)
});

app.get('/tasks/:id',(req,res)=>{ //get 1 id using path parameters
    const id=Number(req.params.id);

    const task=tasks.find(task =>
        task.id===id
    )

    if(!task){ //task === undefined
        return res.status(404).json(
            {"error":`Task ${id} not found`}
        )
    }

    res.json(task)
})



// POST
app.post('/tasks',(req,res)=>{

    if(!req.body.title){
        return res.status(400).json(
            {"error":"Title not filled"}
        )
    }

    const newId=tasks.length + 1
    const newTask={
        "id":newId,
        "title":req.body.title,
        "done":false
    }
    tasks.push(newTask)
    return res.status(201).json(
        newTask
    )
});



// PUT
app.put("/tasks/:id",(req,res)=>{

    const id=Number(req.params.id);
    const task=tasks.find(task =>
        task.id===id
    )

    if(!task){
        return res.status(404).json(
            {"error":`Task ${id} not found`}
        )
    }

    // Nothing was supplied
    if(req.body.title === undefined && req.body.done === undefined){
        return res.status(400).json({
            error:"Request body must contain title or done"
        });
    }

    if(req.body.title !== undefined){ // title supplied
        if(typeof req.body.title === "string")
            task.title=req.body.title
        else
            return res.status(400).json({
                "error":"title must be string"
            })
    }

    if(req.body.done !== undefined){ // done true/false supplied
        if(typeof req.body.done === "boolean")
            task.done=req.body.done
        else
            return res.status(400).json({
                "error":"done status must be boolean"
            })
    }

    res.json(task);
});



// DELETE
app.delete('/tasks/:id',(req,res)=>{
    const id=Number(req.params.id)
    const index=tasks.findIndex(task =>
        task.id===id
    )

    if(index===-1){
        return res.status(404).json({
            "error":`Task ${id} not found`
        })
    }

    tasks.splice(index,1)
    return res.status(204).send(); //204 means sucessfuly deleted, send returns NOTHING
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})