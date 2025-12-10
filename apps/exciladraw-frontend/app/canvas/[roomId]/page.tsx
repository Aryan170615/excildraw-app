"use client"
import { useEffect, useRef } from "react"

interface Shapes {
    startX : number
    startY : number
    width  : number
    height : number
}

const shapes : Shapes[] = []

export default function Canvas(){
   const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(()=> {

    if(canvasRef.current){
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')

      let startX = 0
      let startY = 0
      let width = 0
      let height = 0
      let clicked = false
      if(!ctx) return

      canvas.addEventListener("mousedown",(e)=> {
         clicked = true
         startX = e.clientX
         startY = e.clientY

         console.log(startX, startY)
      })

      canvas.addEventListener("mouseup",(e)=> {
         clicked = false
                  
         shapes.push({
            startX,
            startY,
            width,
            height
         })

      
      })

      canvas.addEventListener("mousemove",(e)=> {
        if (clicked){
         ctx.clearRect(0,0,canvas.width, canvas.height)
         width = e.clientX-startX
         height = e.clientY-startY
         shapes.map(shape => {
            ctx.strokeStyle = "white"
            ctx.strokeRect(shape.startX, shape.startY, shape.width, shape.height) 
         })
         ctx.strokeStyle = "white"
         ctx.strokeRect(startX, startY, width, height)     
        }
      })
      
    }
   },[canvasRef])

   return (
    <div>
      <canvas ref={canvasRef} width={2000} height={2000}></canvas>
    </div>
  )
}
