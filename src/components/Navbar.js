import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({ title, about, mode, toggleMode }) => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${mode} bg-${mode} border-bottom border-light border-opacity-10`}
    >
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/textutils'>
          {title}
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='/navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link
                className='nav-link active'
                aria-current='page'
                to='/textutils'
              >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/textutils/about'>
                {about}
              </Link>
            </li>
          </ul>
          <div className='form-check form-switch'>
            <input
              className='form-check-input'
              type='checkbox'
              role='switch'
              id='flexSwitchCheckDefault'
              onClick={toggleMode}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About text here',
}

export default Navbar
