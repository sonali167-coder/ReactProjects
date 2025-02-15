import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  //let counter = 0

  function addValue() {
    counter += 1;
    if(counter < 0)
    {
      setCounter(0)
    }
    else if(counter > 20)
    {
      setCounter(20)
    }
    else{
      setCounter(counter)
    }
    console.log('addvaalue', counter)
  }

  function removeValue()
  {
    counter = counter - 1;
    if(counter > 20)
    {
      setCounter(20)
    }
    else if(counter < 0)
      {
        setCounter(0)
      }
      else{
        setCounter(counter)
      }
    console.log('remove value', counter)
  }

  return (
    <>
      <h1>Counter = {counter}</h1>

      <button onClick={addValue}>ADD</button>
      <br></br>      
      <button onClick={removeValue}>SUBTRACT</button>

    </>
  )
}

export default App
