import { PrismaClient } from "@prisma/client";
import express from "express"
const prismaClient = new PrismaClient();
const app = express();

app.post("/",async (req,res)=>{
    await prismaClient.user.create({
        data :{
            username:Math.random().toString(),
            password :Math.random().toString()
        }
    })
    res.json({
        "message":"Post Endpoint"
    })
})

app.get("/",async (req,res)=>{
    const data = await prismaClient.user.findMany();
    res.json({
       data
    })
})

