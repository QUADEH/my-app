import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] =useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className = "navbar">
        <div className = "navbar-container">
          <Link to = "/" className="navbar-logo" onClick= {closeMobileMenu}>
            QUADE HUDSON <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick= {handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="page1" className='nav-links' onClick={closeMobileMenu}>
                About Me
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="page2" className='nav-links' onClick={closeMobileMenu}>
                Achievements/Goals
              </Link>
            </li><li className='nav-item'>
              <Link to="page3" className='nav-links' onClick={closeMobileMenu}>
                Hobbies
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar
