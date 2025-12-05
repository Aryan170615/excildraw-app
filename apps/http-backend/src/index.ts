import express from "express";
const app = express();
import jwt from 'jsonwebtoken'
import { middleware } from "./middleware";
import { JWT_SECRET } from "@repo/backend-common";
import { CreateRoomSchema, CreateUserSchema, SigninSchema } from "@repo/common/index";

app.use(express.json())

app.post('/signup',(req,res)=> {
    const data = CreateUserSchema.safeParse(req.body);
    if(!data.success){
        res.json({
            message : "incorrect inputs"
        })
        return
    }
    // const {email, name , password} = req.body

    // database call to create a user and return user id

    res.json({
        message : "signup successful and here is the userId"
    })
})

app.post('/signin',(req,res)=> {

    const data = SigninSchema.safeParse(req.body);
    if(!data.success){
        res.json({
            message : "incorrect inputs"
        })
        return
    }
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
    const data = CreateRoomSchema.safeParse(req.body);
    if(!data.success){
        res.json({
            message : "incorrect inputs"
        })
        return
    }
    // @ts-ignore
    const id = req.userId
    res.json({
      message : `room created by ${id}`  
    })
})


app.listen(3000,()=>{
    console.log("server started on port no 3000")
})