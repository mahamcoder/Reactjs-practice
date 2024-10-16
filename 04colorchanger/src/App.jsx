import { useState } from 'react'
function App() {
  const [Color, setColor] = useState("olive")
  // const [text,setText]=useState("hello")

  return (
    <>
     <div className='w-full h-screen' style={{backgroundColor:Color}}>
<div className='fixed flex flex-wrap inset-x-32 justify-center bottom-10 p-4  rounded-full' >
  <div className='flex flex-wrap justify-center gap-3 bg-green-900 px-3 py-2 rounded-full'>
  <button onClick={()=>{setColor("red")}} className="text-white bg-red-400 px-10 text-xl capitalize font-bold py-2 rounded-full outline-none shadow-lg">red</button>
  <button onClick={()=>{setColor("pink")}} className="text-white bg-pink-400 px-10 text-xl capitalize font-bold py-2 rounded-full outline-none shadow-lg">pink</button>
  <button onClick={()=>{setColor("yellow")}} className="text-white bg-yellow-400 px-10 text-xl capitalize font-bold py-2 rounded-full outline-none shadow-lg">yellow</button>
  <button onClick={()=>{setColor("purple")}} className="text-white bg-purple-400 px-10 text-xl capitalize font-bold py-2 rounded-full outline-none shadow-lg">purple</button>
  <button onClick={()=>{setColor("orange")}} className="text-white bg-orange-400 px-10 text-xl capitalize font-bold py-2 rounded-full outline-none shadow-lg">orange</button>
  <button onClick={()=>{setColor("blue")}} className="text-white bg-blue-400 px-10 text-xl capitalize font-bold py-2 rounded-full outline-none shadow-lg">blue</button>
  <button onClick={()=>{setColor("green")}} className="text-white bg-green-400 px-10 text-xl capitalize font-bold py-2 rounded-full outline-none shadow-lg">green</button>
</div>
     </div>
     </div>
    </>
  )
}

export default App
