import Image from "next/image";
import logo from "@/app/assets/logo.png"


export default function Navbar(){
  return(

      <div className="bg-black text-white flex items-center justify-around h-12 font-semibold">
        <h1 className="text-xl cursor-pointer">GIAIC</h1>

        <ul className="hidden sm:flex gap-3">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>

        <button className="bg-yellow-400 px-3 py-1 rounded-lg hover:bg-yellow-500">Join</button>
      </div>

    
  )
}