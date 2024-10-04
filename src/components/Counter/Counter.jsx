import React, { useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(0)

    const aumentarContador = () => {
        setCounter( counter + 1)
    }

  return (
      <div>
          <p>Contador: {counter}</p>
          <button onClick={aumentarContador}>+</button>
      </div>
  )
}

export default Counter