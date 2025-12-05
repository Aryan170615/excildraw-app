import { WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common";

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws, request) {
    // `wss://yourserver.com/websocket?token=${token}`
    const url = request.url
    if(!url) return

    const myParams = new URLSearchParams(url.split('?')[1])
    if (!myParams) {
        return
    }
    const token = myParams.get("token")

    if(!token) {
        console.log("null token")
        return
    }
     // Authenticate the token using jwt verification

     
     const decoded = jwt.verify(token, JWT_SECRET)

     if(typeof decoded === "string") {
        ws.close()
        return
     }

     if (!decoded || !decoded.userId) {
        console.log('Client connected with valid token');
        // Proceed with WebSocket communication
      } else {
        console.log('Client connected with invalid token, closing connection');
        ws.close();
      }

     ws.on('message', function message(data){
        ws.send('pong')
     })
})