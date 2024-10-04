import CartWidget from './CartWidget'
import './navbar.css'

const NavBar = () => {
    return(
        <nav className='navbar'>
            <div className="navbar-container container">
                <ul className="menu-items">
                <li>Inicio</li>
                <li>Acerca</li>
                <li>Categoria</li>
                <li>Menú</li>
                <li>Testimonios</li>
                <li>Contacto</li>
                <CartWidget />
                </ul>
                <h1 className="logo">Turing</h1>
            </div>
        </nav>
    )
}

export default NavBar