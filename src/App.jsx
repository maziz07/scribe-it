import { useState } from 'react'
import HomePage from './components/HomePage'
import Header from './components/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='flex flex-col max-w-[1000p] mx-auto w-full'>
    <section className='min-h-screen flex flex-col'>
      <Header />
      <HomePage />
    </section>
      <h1 className='text-green-400'>
      Hello
    </h1>
   </div>
  )
}

export default App
