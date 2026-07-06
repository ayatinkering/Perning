//handle all authentication bw client and server side
import jwt from 'jsonwebtoken'
import db from '../db.js'

//intercept req and verify if token correct
function authMiddleware(req,res,next){
    const token=req.headers['authorization']
    if(!token){return res.status(401).json({message: "no token provided"})}

    jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
        if (err) {return res.status(401).json({message:"invalid token"})}

        try {
            const getUser = db.prepare('SELECT id FROM users WHERE id = ?')
            const user = getUser.get(decoded.id)
            if (!user) {
                return res.status(401).json({message: "user no longer exists"})
            }
            req.userId = decoded.id;   
            next() //they are the correct person, can proceed to the endpoint
        } catch (dbErr) {
            console.error(dbErr.message)
            return res.status(503).json({message: "database error"})
        }
    })
}

export default authMiddleware