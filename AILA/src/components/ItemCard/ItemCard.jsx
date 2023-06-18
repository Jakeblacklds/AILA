
import { Link } from 'react-router-dom'
import './ItemCard.css'

const ItemCard = ({ id, name, description, price, category,img }) => {
  return (
    <div className="itemcard">
      <h3>{name}</h3>
      <img className='itemdetail__img' src={img} alt={name} />
      
      <p>Precio: ${price}</p>
      <div className='itemcard__btn'>
      <Link className='itemcard__link' to={`/item/${id}`}>Ver detalle</Link>
      </div>
    </div>
  )
}

export default ItemCard
