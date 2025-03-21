import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-red-500 text-3xl font-bold">Taiwind Test</h1>
      <Card/>

    </>
  )
}

export default App
