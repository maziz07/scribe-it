import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='flex flex-col'>
    <section className='min-h-screen flex flex-col'>
      <header>
        <h1>Scribe<span className='text-blue-400'>It</span></h1>
        <button>
          <p>New</p>
        </button>
      </header>
      <main className='flex-1'>
        
      </main>
    </section>
      <h1 className='text-green-400'>
      Hello
    </h1>
   </div>
  )
}

export default App
