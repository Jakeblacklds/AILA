import './Navbar.css';
import logo from '../../assets/aila.png';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TypingEffect from '../TypingEffect/TypingEffect';

const Navbar = () => {
  return (
    <div className='nav'>
      <img className="logo" src={logo} alt="logo"  />
      <div>
      <h1 className="titlelogo">
        <TypingEffect text="AILA STORE" />
      </h1>
      </div>
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
