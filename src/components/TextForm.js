import { useState } from 'react'

export default function TextForm({ heading }) {
  const [text, setText] = useState('Enter text here...')
  const handleUpClick = () => {
    setText(text.toUpperCase())
    console.log('Uppercase was clicked')
  }
  const handleOnChange = (e) => {
    setText(e.target.value)
  }

  return (
    <>
      <div className='container my-4 bg-dark text-light p-3'>
        <h1>{heading}</h1>
        <div className='mb-3'>
          <textarea
            className='form-control'
            value={text}
            id='myBox'
            rows='8'
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>
          Convert to Uppercase
        </button>
      </div>
    </>
  )
}
