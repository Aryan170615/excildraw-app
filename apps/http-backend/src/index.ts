import express from "express";
const app = express();
import jwt from 'jsonwebtoken'
import { middleware } from "./middleware";

app.use(express.json())

const JWT_SECRET = "ILOVEADOBE"

app.post('/signup',(req,res)=> {
    const {email, name , password} = req.body

    // database call to create a user and return user id

    res.json({
        message : "signup successful and here is the userId"
    })
})

app.post('/signin',(req,res)=> {

    //check if user is present in db if not return early
    const userId = 1
    const token = jwt.sign({
        userId: userId
    }, JWT_SECRET)
    res.json({
        message: "Signin successful",
        token
    })
})

app.post('/create-room', middleware, (req,res)=>{
    // @ts-ignore
    const id = req.userId
    res.json({
      message : `room created by ${id}`  
    })
})


app.listen(3000,()=>{
    console.log("server started on port no 3000")
})