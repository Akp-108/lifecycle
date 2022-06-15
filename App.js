import React, { useState } from 'react'
import  Counter from './Counter'

const App = () => {
  // const[count, setCount] = useState(0)
  return (
    <div>
      {/* <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Incremet</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button> */}
      <Counter />
    </div>
  )
}

export default App