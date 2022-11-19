// Write your code here
import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <div className="header-main-container">
    <div className="header-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="page-logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="hamburger-button"
            testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="hamburger-icon" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="popup-main-container">
            <div className="popup-container">
              <button
                type="button"
                className="close-icon-button"
                testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose className="close-icon" />
              </button>
              <ul className="link-items-container">
                <li>
                  <Link className="link-item" to="/">
                    <AiFillHome className="home-icon" />
                    <h1 className="popup-home">Home</h1>
                  </Link>
                </li>
                <li>
                  <Link className="link-item" to="/about">
                    <BsInfoCircleFill className="info-icon" />
                    <h1 className="popup-about">About</h1>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
