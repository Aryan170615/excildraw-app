import { WebSocket, WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common";
import { PrismaClient } from "@prisma/client/extension";

const wss = new WebSocketServer({ port: 8080 });

interface User {
    userId: string,
    rooms : string[],
    ws: WebSocket
}

// it looks like this in our approach
// {
//     userId: 1,
//     rooms : ["room1", "room2"],
//     ws: socket
//   },
//   {
//     userId: 2,
//     rooms : ["room1"],
//     ws: socket
//   },
//   {
//     userId: 3,
//     rooms : ["room2"],
//     ws: socket
// }
const users: User[] = []


function authenticateUser(token: string): string | null { 
     const decoded = jwt.verify(token, JWT_SECRET)

     if(typeof decoded === "string") {
        return null
     }
    
     if (!decoded || !decoded.userId) {
        return null
      } 
    return decoded.userId 
}

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

    const userId = authenticateUser(token)
    if (!userId){
      ws.close()
      return
    }

    users.push({
      userId,
      rooms : [],
      ws
    })

     ws.on('message', async function message(data){
        // what kind of message it can be
        // 1)  {
        //   type: "Join_room",
        //   roomId: "123"
        // }
        // 2) {
        //    type: "leave_room",
        //    roomId: "45"
        // }
        // 1)  {
        //   type: "chat",
        //   message : "hi there"
        //   roomId: "123" 
        // }

        const userData = JSON.parse(data.toString());

        if(userData.type === "join_room"){
          users.forEach(x => {
             if (x.ws === ws){
              x.rooms.push(userData.roomId)
             }
        })

        } else if (userData.type === "leave_room"){

          users.forEach(x => {
             if (x.ws == ws && x.rooms.includes(userData.roomId) ){
              let index = x.rooms.indexOf(userData.roomId); // Find the index of the element

              if (index !== -1) { // Check if the element exists
                x.rooms.splice(index, 1); // Remove 1 element at the found index
            }
             }
        })

        } else if (userData.type === "chat"){
          const message = userData.message;
          const roomId = userData.roomId;
          
          await PrismaClient.chat.create({
            data:{
              roomId,
              message,
              userId
            }
          })
          
          users.map(user => {
            if(user.rooms.includes(roomId)) {
              user.ws.send(JSON.stringify({
                type : "chat",
                message,
                roomId
              }))
            }
          })
        }

     })
})