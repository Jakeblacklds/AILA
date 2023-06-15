import './Navbar.css';
import logo from '../../assets/aila.png';
import { Link } from 'react-router-dom';

import Cart from '../Cart/Cart';



const Navbar = () => {
  return (
    <div className='nav'>
      <img className="logo" src={logo} alt="logo" />
      <nav className='nav-container' >
        <Link className="nav-link" to="/">Inicio</Link>
        <Link className="nav-link" to="/category/Laptop">Laptops</Link>
        <Link className="nav-link" to="/category/Celular">Celulares</Link>
        <Link className="nav-link" to="/category/Tablet">Tablets</Link>
        <Cart />
      </nav>
    </div>
  );
}

export default Navbar;
