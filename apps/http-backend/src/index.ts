import express from "express";
const app = express();
import jwt from 'jsonwebtoken'
import { middleware } from "./middleware";
import { JWT_SECRET } from "@repo/backend-common";
import { CreateRoomSchema, CreateUserSchema, SigninSchema } from "@repo/common/index";

import prismaClient from "@repo/db/src/prisma"

app.use(express.json())

app.post('/signup', async(req,res)=> {
    const parsedData = CreateUserSchema.safeParse(req.body);
    if(!parsedData.success){
        res.json({
            message : "incorrect inputs"
        })
        return
    }
    // const {email, name , password} = req.body

    // database call to create a user and return user id
   try{
    const user = await prismaClient.user.create({
        data: {
            email: parsedData.data.email,
            password: parsedData.data.password,
            name: parsedData.data.name,
        }
    })
    res.json({
        message : `signup successful and here is the ${user.id}`
    })} 
    catch(e){
        res.status(403).json({
            message : "email already exists"
        })
    }
})

app.post('/signin',async (req,res)=> {
    const parsedData = SigninSchema.safeParse(req.body);
    if(!parsedData.success){
        res.json({
            message : "incorrect inputs"
        })
        return
    }
    //check if user is present in db if not return early
    const user = await prismaClient.user.findFirst({
        where: {
            email : parsedData.data.email,
            password : parsedData.data.password,
        }
    })
    if(!user) {
        res.json({
            message: "user not exists with this email pls signup"
        })
        return
    }
    const userId = user.id
    const token = jwt.sign({
        userId: userId
    }, JWT_SECRET)
    res.json({
        message: "Signin successful",
        token
    })
})

app.post('/create-room', middleware, async (req,res)=>{
    const parsedData = CreateRoomSchema.safeParse(req.body);
    if(!parsedData.success){
        res.json({
            message : "incorrect inputs"
        })
        return
    }
    // @ts-ignore
    const adminId = req.userId
    try{
    const room = await prismaClient.room.create({
        data: {
            slug: parsedData.data.name,
            adminId
        }
    })
    // @ts-ignore
    const id = room.id
    res.json({
      roomId : `${id}`  
    })
   } catch(e){
    res.status(411).json({
        message : "room already exists with this name"
    })
   }
})

app.get('/chats/:roomId',middleware, async (req,res) => {

   try {
        const roomId = Number (req.params.roomId);

        const messages = await prismaClient.chat.findMany({
            where: {
                roomId
            },
            orderBy: {
                id: "desc"
            },
            take: 50
        })

        res.json({
            messages
        })
   } catch(e){
       res.status(411).json({
           message : "no room with this name exists"
       })
   }
})

app.get('/room/:slug',middleware, async (req,res) => {
    const slug = req.params.roomId;

    const room = await prismaClient.room.findFirst({
        where: {
            slug
        }
    })
    if (!room) {
        res.status(411).json({
            message : "no room with this name exists"
        })
        return
    }
    res.json({
        id: room.id
    })
})


app.listen(3000,()=>{
    console.log("server started on port no 3000")
})