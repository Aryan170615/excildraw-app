export default function AuthPage({isSignin}: {
    isSignin : boolean
}){
    if(isSignin === true){
        return <div className="flex justify-center items-center w-screen h-screen">
             <div className="p-6 flex flex-col gap-2 border-green-700 border-4 items-center rounded-2xl">
                <input type="text" placeholder="enter your login id" className="border p-2 rounded-xl" />
                <input type="password" placeholder="enter your password" className="border p-2 rounded-xl" />
                <button className="bg-red-500 w-20">Signin</button>
             </div>
        </div>
    }
    else return <div className="flex justify-center items-center w-screen h-screen">
             <div className="p-6 flex flex-col gap-2 border-green-700 border-4 items-center rounded-2xl">
                <input type="text" placeholder="enter your login id" className="border p-2 rounded-xl" />
                <input type="text" placeholder="enter your name" className="border p-2 rounded-xl" />
                <input type="password" placeholder="enter your password" className="border p-2 rounded-xl"/>
                <button className="bg-red-500 w-20">Signup</button>
             </div>
        </div>
}