import { useState, useEffect } from 'react'
import HomePage from './components/HomePage'
import Header from './components/Header'
import FileDisplay from './components/FileDisplay'
import Information from './components/Information'
import Transcribing from './components/Transcribing'


function App() {
  const [file, setFile] = useState(null)
  const [audioStream, setAudioStream] = useState(null)
  const [output, setOutput] = useState(true)
  const [loading, setLoading] = useState(true)

  const isAudioAvailable = file || audioStream

  function handleAudioReset(){
    setFile(null)
    setAudioStream(null)
  }

  useEffect(() => {
    console.log(audioStream)
  }, [audioStream])

  return (
   <div className='flex flex-col max-w-[1000p] mx-auto w-full'>
    <section className='min-h-screen flex flex-col'>
      <Header />
      {output ? (
        <Information/>
      ) : loading ? (
        <Transcribing/>
     
      ): isAudioAvailable? (
        <FileDisplay handleAudioReset={handleAudioReset} 
        file={file} audioStream={setAudioStream} />
      ) : (
      <HomePage setFile={setFile} setAudioStream={setAudioStream} />
      )}
    </section>
      <h1 className='text-green-400'>
      Hello
    </h1>
   </div>
  )
}

export default App
