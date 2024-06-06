import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <h1 className='text-green-400'>
      Hello world!
    </h1>
   </div>
  )
}

export default App
