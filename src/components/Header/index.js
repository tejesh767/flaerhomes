import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        alt="wave"
        className="logo1"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3QxaXGRLr65CwdGTawKfQ4bDvWgkGCxaA2A&s"
      />
    </div>
    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/">
          Home
        </Link>
      </li>

      <li className="link-item">
        <Link className="route-link" to="/MyLibrary">
          My Library
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
