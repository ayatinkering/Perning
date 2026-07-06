const express = require('express') //import express framework
const app = express() //app is the web server
const PORT=8383 // address of server 
// URL -> http://localhost:8383
// IP -> 127.0.0.1:8383

let data=['james'] //simple DATABASE for us

//MIDDLEWARE- tells server to expect json data
app.use(express.json())

//WEBSITE endpoints- for senidng back HTML, come when user enters url in browser
app.get('/',(req,res)=>{
    console.log('yay i hit an endpoint',req.method)
    res.send(`
        <body style="background:pink; color:blue;">
        <h1>DATA: </h1>
            <p>${JSON.stringify(data)}</p> 
            <a href="/dashboard">dashboard</a>
        </body>
        `)
}) //configure server to handle incomging get requests to HOME endpoint / route

app.get('/dashboard',(req,res)=>{
    console.log('now i hit the /dashboard endpoint!!')
    res.send(`
        <body>
        <h1>dashboard</h1>
        <a href="/">home</a>
        </body>
        `)
})

//API endpoints- when user enters detials, send the details
//CRUD actions- POST, GET, PUT/PATCH, DELETE

app.get('/api/data',(req,res)=>{
    res.send(data)
})

app.post('/api/data',(req,res)=>{
    //create a user when clcik signup button, browser sends req to server
    const newEntry=req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)

})

app.delete('/api/data',(req,res)=>{
    data.pop()
    console.log('we deleted element off the end of array')
    res.sendStatus(203)
})


app.listen(PORT, ()=>{
    console.log(`server has started on PORT ${PORT}`)
}) //listen to incoming IP address in this port

