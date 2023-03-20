import { useState } from 'react'

export default function TextForm({ heading, mode, showAlert }) {
  const [text, setText] = useState('')

  const handleUpClick = () => {
    setText(text.trim().toUpperCase())
    text &&
      showAlert(
        'Text converted to uppercase!',
        `${mode === 'dark' ? 'info' : 'success'} `
      )
  }

  const handleLoClick = () => {
    setText(text.trim().toLowerCase())
    text &&
      showAlert(
        'Text converted to lowercase!',
        `${mode === 'dark' ? 'info' : 'success'} `
      )
  }

  const handleTiClick = () => {
    let titleCase = text
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    setText(titleCase.join(' '))
    text &&
      showAlert(
        'Text converted to titlecase!',
        `${mode === 'dark' ? 'info' : 'success'} `
      )
  }

  const handleExClick = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(' '))
    text &&
      showAlert(
        'Removed extra spaces from text!',
        `${mode === 'dark' ? 'info' : 'success'} `
      )
  }

  const handleCoClick = () => {
    navigator.clipboard.writeText(text)
    text &&
      showAlert(
        'Text copied to clipboard!',
        `${mode === 'dark' ? 'info' : 'success'} `
      )
  }

  const handleClClick = () => {
    setText('')
    text &&
      showAlert('Text cleared!', `${mode === 'dark' ? 'info' : 'success'} `)
  }

  const handleSlClick = () => {
    let slug = text.toLowerCase().split(' ').join('-')
    setText(slug)
    text &&
      showAlert(
        'Text converted to slug!',
        `${mode === 'dark' ? 'info' : 'success'} `
      )
  }

  const handleOnChange = (e) => {
    setText(e.target.value)
  }

  const taBg = {
    backgroundColor: '#e9eaeb',
  }

  return (
    <>
      <div
        className={`mb-0 p-2 bg-${mode} text-${
          mode === 'light' ? 'dark' : 'light'
        } p-3 rounded-3`}
      >
        <h1>{heading}</h1>
        <div className=''>
          <textarea
            className='form-control'
            value={text}
            placeholder='Type or paste your content here'
            id='myBox'
            rows='8'
            onChange={handleOnChange}
            style={mode === 'light' ? { backgroundColor: '#fff' } : taBg}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className='btn btn-primary mt-3 me-2'
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className='btn btn-primary me-2 mt-3'
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className='btn btn-primary me-2 mt-3'
          onClick={handleTiClick}
        >
          Convert to Titlecase
        </button>
        <button
          disabled={text.length === 0}
          className='btn btn-primary me-2 mt-3'
          onClick={handleSlClick}
        >
          Convert to Slug
        </button>
        <button
          disabled={text.length === 0}
          className='btn btn-primary me-2 mt-3'
          onClick={handleExClick}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className='btn btn-success me-2 mt-3'
          onClick={handleCoClick}
        >
          Copy to Clipboard
        </button>
        <button
          disabled={text.length === 0}
          className='btn btn-danger me-2 mt-3'
          onClick={handleClClick}
        >
          Clear Text
        </button>
      </div>
      <div
        className={`container text-light p-3 text-${
          mode === 'light' ? 'dark' : 'light'
        }`}
      >
        <h2>Your text summary</h2>
        <p>
          {/* {text.trim().split(' ')[0] === '' ? '0' : text.split(/\s+/).length} */}
          {/* {text.trim().split(' ')[0] === '' ? '0' : text.split(' ').length} */}
          {text.trim().split(' ')[0] === ''
            ? '0'
            : text.split(/\s+/).at(-1) === ''
            ? text.split(/\s+/).length - 1
            : text.split(/\s+/).length}
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
