const About = ({ mode }) => {
  return (
    <div
      className={`mb-0 p-2 bg-${mode} text-${
        mode === 'light' ? 'dark' : 'light'
      } p-3 rounded-3`}
    >
      <h1 className={`text-${mode === 'light' ? 'dark' : 'light'}`}>
        About Us
      </h1>
      <div className='accordion' id='accordionExample'>
        <div
          className={`accordion-item 
        text-${mode === 'light' ? 'dark' : 'light'}
        bg-dark
        `}
        >
          <h2 className='accordion-header' id='headingOne'>
            <button
              className={`accordion-button bg-${
                mode === 'light' ? 'light' : 'dark'
              } text-${mode === 'light' ? 'dark' : 'light'} `}
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseOne'
              aria-expanded='true'
              aria-controls='collapseOne'
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id='collapseOne'
            className='accordion-collapse collapse show'
            aria-labelledby='headingOne'
            data-bs-parent='#accordionExample'
          >
            <div
              className={`accordion-body 
              bg-${mode === 'light' ? 'light' : 'dark'}
              text-${mode === 'light' ? 'dark' : 'light'}`}
            >
              TextUtils gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count, uppercase,
              lowercase, titlecase that can be copied to clipboard.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingTwo'>
            <button
              className={`accordion-button collapsed bg-${
                mode === 'light' ? 'light' : 'dark'
              } text-${mode === 'light' ? 'dark' : 'light'}`}
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id='collapseTwo'
            className='accordion-collapse collapse'
            aria-labelledby='headingTwo'
            data-bs-parent='#accordionExample'
          >
            <div
              className={`accordion-body 
              bg-${mode === 'light' ? 'light' : 'dark'}
              text-${mode === 'light' ? 'dark' : 'light'}`}
            >
              TextUtils is a free character counter tool that provides instant
              character count & word count statistics for a given text.
              TextUtils reports the number of words and characters. Thus it is
              suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingThree'>
            <button
              className={`accordion-button collapsed bg-${
                mode === 'light' ? 'light' : 'dark'
              } text-${mode === 'light' ? 'dark' : 'light'}`}
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseThree'
              aria-expanded='false'
              aria-controls='collapseThree'
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id='collapseThree'
            className='accordion-collapse collapse'
            aria-labelledby='headingThree'
            data-bs-parent='#accordionExample'
          >
            <div
              className={`accordion-body 
              bg-${mode === 'light' ? 'light' : 'dark'}
              text-${mode === 'light' ? 'dark' : 'light'}`}
            >
              This word counter software works in any web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in FaceBook, blog, books, excel document, pdf
              document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
