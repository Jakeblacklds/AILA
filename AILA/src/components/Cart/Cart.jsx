import Cartimg from '../../assets/cart.png'
import './Cart.css'
const Cart = () => {
  return (
      <div className="cartWidget">
          <img className="cartWidget__img" src={Cartimg} alt="cart" />
      </div>
  );
  }

export default Cart