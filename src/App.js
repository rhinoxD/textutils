import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import About from './components/About'
import Alert from './components/Alert'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      message,
      type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = '#e9eaeb'
      showAlert('Light mode has been enabled', 'info')
    } else {
      setMode('dark')
      // document.body.style.backgroundColor = '#212529'
      document.body.style.backgroundColor = '#272a2c'
      showAlert('Dark mode has been enabled', 'info')
    }
  }
  return (
    <Router>
      <Navbar
        title='TextUtils'
        about='About'
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className='container my-4'>
        <Routes>
          <Route exact path='/about' element={<About />} />
          <Route
            exact
            path='/'
            element={
              <TextForm
                heading='Enter the text to analyze'
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
