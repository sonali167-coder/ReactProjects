import { useState } from 'react'


function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen"
    style={{ backgroundColor: color }}>
    <div className="fixed flex flex-wrap justify-center bottom-11 insert-x-0">
      <div className="flex flex-wrap justify-center gap-4 bg-slate-200 shadow-lg px-3 py-4 rounded-xl">
        <button
        onClick={() => setColor("red")}
         className="outline-none shadow-sm outline-black bg-red-600 text-white rounded-xl px-3 py-2">RED</button>
        <button onClick={() => setColor("blue")}
         className="outline-none shadow-md outline-black bg-blue-600 text-white rounded-xl px-3 py-2">BLUE</button>
        <button onClick={() => setColor("green")}
         className="outline-none shadow-sm outline-black bg-green-600 text-white rounded-xl px-3 py-2">GREEN</button>
        <button onClick={() => setColor("yellow")}
         className="outline-none outline-black shadow-sm bg-yellow-600 text-white rounded-xl px-3 py-2">YELLOW</button>
        <button onClick={() => setColor("white")}
         className="outline-none outline-black shadow-sm bg-white-600 text-black rounded-xl px-3 py-2">WHITE</button>
      </div>
    </div>
    </div>
  )
}

export default App
