"use client"

export default function Button(){

function handleClick(){
console.log("you Clicked")
  }

  return (
    <div className="flex h-screen items-center justify-center w-fullas">
      <button 
      onClick={handleClick}
      className="bg-blue-500 p-2 rounded-lg text-white hover:bg-blue-600">Click</button>
    </div>
  )
}