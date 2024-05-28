import React, { useState } from 'react'

function App() {

  let [visible, setVisible] = useState(false)

  let [num, setNum] = useState(50);

  const updater = ()=>{
    setNum(num=num+1);

    setVisible(!visible);
  }

  return (
    <>
    
      <h1>{num}</h1>

      {
        visible ? <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, similique.</p> : null
      }

      <button onClick={updater}>Click</button>
    
    </>
  )
}

export default App