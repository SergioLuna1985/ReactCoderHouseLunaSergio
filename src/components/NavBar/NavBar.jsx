import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './navbar.css'

const NavBar = () => {
    return(
        <nav className='navbar'>
            <div className="navbar-container container">
                <ul className="menu-items">
                    <li>
                        <Link className="link-styles" to="/category/arduino">Arduino</Link>
                    </li>
                    <li>
                        <Link className="link-styles" to="/category/raspberry">Raspberry pi</Link>
                    </li>
                    <li>
                        <Link className="link-styles" to="/category/esp">Esp32</Link>
                    </li>
                    <CartWidget />
                </ul>
                <Link to={"/"}>
                    <img src={logo} alt="logo" className='logo' />
                </Link>
            </div>
        </nav>
    )
}

export default NavBar