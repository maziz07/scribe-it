import React from 'react'

export default function Information() {
  return (
    <main className='flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 md:gap-5 
    justify-center pb-20 w-72 sm:w-96 max-w-full mx-auto'>
        <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl'>
        Your<span className='text-blue-400 bold'>File</span></h1>
    </main>
  )
}
