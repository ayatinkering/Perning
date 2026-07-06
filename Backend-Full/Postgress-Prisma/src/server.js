import express from 'express' //mdodule syntax instead of commonjs syntax
import path, {dirname} from 'path'
import { fileURLToPath } from 'url' //enable server.js to look for html files and send them as response
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'
import authMiddleware from './middleware/authMiddleware.js'

const app=express()
const PORT= process.env.PORT || 5000 //backup


//get filepath from URL of current module
const __filename=fileURLToPath(import.meta.url)
const __dirname=dirname(__filename)

//middleware
app.use(express.json())
app.use(express.static(path.join(__dirname,'../public')))

app.get('/',(req,res)=>{ //send html file to network
    res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

//routes
app.use('/auth',authRoutes) //uses routes from authROutes.js
app.use('/todos',authMiddleware,todoRoutes) //todo routs PROTECTED By MIDDLEWARE


app.listen(PORT,()=>{
    console.log(`server started on PORT: ${PORT}`)
})
