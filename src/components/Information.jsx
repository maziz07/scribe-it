import React, { useState } from 'react'

export default function Information() {
  const [tab, setTab] = useState('transcription')
  return (
    <main className='flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 md:gap-5 
    justify-center pb-20 max-w-prose w-full mx-auto'>
        <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl whitespace-nowrap'>
        Your<span className='text-blue-400 bold'>Transcription</span></h1>

        <div className='flex mx-auto bg-white shadow rounded-full overflow-hiddent
        items-center gap-2'>
          <button className={'px-4 py-1 font-medium' + 
          (tab === 'transcription' ? ' bg-blue-400 text-white'
             : ' text-blue-400 hover:text-blue-600 ')}
          >Transcription</button>
          <button className={'px-4 py-1 font-medium' +
           (tab === 'transcription' ? ' bg-blue-400 text-white'
             : ' text-blue-400 hover:text-blue-600 ')}>Translation</button>
        </div>
    </main>
  )
}
