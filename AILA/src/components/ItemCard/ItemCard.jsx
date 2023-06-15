
import { Link } from 'react-router-dom'
import './ItemCard.css'

const ItemCard = ({ id, name, description, price, category,img }) => {
  return (
    <div className="itemcard">
      <h3>{name}</h3>
      <img className='itemdetail__img' src={img} alt={name} />
      
      <p>Precio: ${price}</p>
      
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </div>
  )
}

export default ItemCard
