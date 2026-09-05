const express=require('express')
const app=express()
const port=3000
app.use(express.json()) //middleware that // parses incoming JSON request bodies into js objects

const tasks=[
    {"id":1,
    "name":"eat",
    "done":true
    },
    {"id":2,
    "name":"sleep",
    "done":true
    },
    {"id":3,
    "name":"study",
    "done":true
    }
]

app.get('/',(req,res)=>{        //root endpoint 
    res.json({
        name:"Task API",
        "version":"1.0",
        "endpoints":["/tasks"]
    })
});

app.get('/health',(req,res)=>{      //showing health of server
    res.json({"status":"ok"})
});

app.get("/tasks",(req,res)=>{       //getting all tasks
    res.json(tasks)
});

app.get('/tasks/:id',(req,res)=>{       //getting 1 task w PATH PARAMETERS
    const id=Number(req.params.id);
    const task=tasks.find(task=>
        task.id===id
    )

    if(!task){
        return res.status(404).json(
            {"error":`Task ${id} not found`}
        )
    }
    res.json(task)
})

app.post('/tasks',(req,res)=>{
    if(!req.body.title){
        res.status(400).json(
            {"error":"Title not filled"}
        )
    }
    const newId=tasks.length + 1
    const newTask={
        "id":newId,
        "name":req.body.title,
        "done":false
    }
    tasks.push(newTask)

    return res.status(201).json(
        newTask
    )
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})