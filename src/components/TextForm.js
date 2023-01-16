import { useState } from 'react'

export default function TextForm({ heading }) {
  const [text, setText] = useState('')
  const handleUpClick = () => setText(text.trim().toUpperCase())
  const handleLoClick = () => setText(text.trim().toLowerCase())
  const handleTiClick = () => {
    let titleCase = text
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    setText(titleCase.join(' '))
  }
  const handleCoClick = () => navigator.clipboard.writeText(text)
  const handleClClick = () => setText('')
  const handleOnChange = (e) => {
    setText(e.target.value)
  }

  return (
    <>
      <div className='mb-0 bg-dark text-light p-3'>
        <h1>{heading}</h1>
        <div className='mb-3'>
          <textarea
            className='form-control'
            value={text}
            placeholder='Type or paste your content here'
            id='myBox'
            rows='8'
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className='btn btn-primary ms-2' onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className='btn btn-primary ms-2' onClick={handleTiClick}>
          Convert to Titlecase
        </button>
        <button className='btn btn-success ms-2' onClick={handleCoClick}>
          Copy to Clipboard
        </button>
        <button className='btn btn-danger ms-2' onClick={handleClClick}>
          Clear Text
        </button>
      </div>
      <div className='container text-light p-3'>
        <h2>Your text summary</h2>
        <p>
          {text.trim().split(' ')[0] === '' ? '0' : text.split(' ').length}
          {text.trim().split(' ')[0] === ''
            ? ' words and '
            : text.trim().split(' ').length === 1
            ? ' word and '
            : ' words and '}
          {text.length} {text.length === 1 ? ' character' : 'characters'}
        </p>
        <p>
          {(0.0077 * text.trim().split(' ').length).toFixed(0)}
          {(0.0077 * text.trim().split(' ').length).toFixed(0) === '1'
            ? ' minute read'
            : ' minutes read'}
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
