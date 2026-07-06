//separate logic for diff type of API endpoints

import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from '../db.js'

const router=express.Router()


//register a new user /auth/register
router.post('/register',(req,res)=>{
    console.log("Reached register route");
    console.log(req.body);

    const { username, password } = req.body;
    console.log(username, password);

    //save username and one-way encrypted pssword xavshUSVSVDJ using SPECIAL KEY
    const hashedPassword=bcrypt.hashSync(password,8)


    //save new user and hashed password to db
    try{
        const insertUser=db.prepare(` 
            INSERT INTO users (username,password)
            VALUES (?,?)`) //function to add to SQL db
        const result=insertUser.run(username,hashedPassword)

        //now that we have a user, let them to add first todo
        const defaultTodo=`Hello :) Add your first todo!`
        const insertTodo=db.prepare(`INSERT INTO todos (user_id,task)
            VALUES (?,?)`)
        insertTodo.run(result.lastInsertRowid,defaultTodo)

        //CREATE JWT TOKEN to make sure user authenticated
        const token=jwt.sign({id: result.lastInsertRowid}, process.env.JWT_SECRET,
            {expiresIn:'24h'})
            res.json({token})


    }catch (err){
        console.log(err.message)
        res.sendStatus(503)
    }

})


//login existing user
router.post('/login', (req, res) => {
    // we get their email, and we look up the password associated with that email in the database
    // but we get it back and see it's encrypted, which means that we cannot compare it to the one the user just used trying to login
    // so we encrypt the password the user just entered using the SECRET KEY, and then COMPARE

    const {username,password} = req.body

    try {
        const getUser = db.prepare('SELECT * FROM users WHERE username = ?')
        const user = getUser.get(username)

        // if we cannot find a user associated with that username, return out from the function
        if (!user) { return res.status(404).send({ message: "User not found" }) }

        const passwordIsValid = bcrypt.compareSync(password, user.password)

        // if the password does not match, return out of the function
        if (!passwordIsValid) { return res.status(401).send({ message: "Invalid password" }) }
        console.log(user)

        // then we have a successful authentication
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' })
        res.json({ token })
    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }

})




export default router //to use in server.js