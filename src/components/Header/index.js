import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <h1 className="names">Wave</h1>
    </div>
    <ul className="components">
      <li className="style">
        <Link to="/" className="component">
          Home
        </Link>
      </li>
      <li className="style">
        <Link to="/about" className="component">
          About
        </Link>
      </li>
      <li className="style">
        <Link to="/contact" className="component">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
