import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
const JWT_SECRET = "ILOVEADOBE"

export function middleware(req: Request, res: Response, next: NextFunction) {
    // @ts-ignore 
   const token = req.headers.authorization || "";
   if(token == ""){
    res.status(403).json({
        message : "unauthorized and token missing"
    })
    return
   }

   const decoded = jwt.verify(token, JWT_SECRET);
   // @ts-ignore
   if(decoded) {
    // @ts-ignore
    req.userId = decoded.userId
    next()
   }
   else {
    res.status(403).json({
        message : "unauthorized"
    })
   }
}