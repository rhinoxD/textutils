import { useState } from 'react'

import './App.css'
import About from './components/About'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = '#e9eaeb'
    } else {
      setMode('dark')
      // document.body.style.backgroundColor = '#212529'
      document.body.style.backgroundColor = '#272a2c'
    }
  }
  return (
    <>
      <Navbar
        title='TextUtils'
        about='About'
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className='container my-4'>
        <TextForm heading='Enter the text to analyze' mode={mode} />
        {/* <About /> */}
      </div>
    </>
  )
}

export default App
