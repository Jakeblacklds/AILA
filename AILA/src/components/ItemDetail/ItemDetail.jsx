import './ItemDetail.css'

const ItemDetail = ({ id ,name, description, price, img, category }) => {

  return (
    <div className="itemdetail">
      <img className='itemdetail__img' src={img} alt={name} />
      <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Precio: ${price}</p>
      <p>Categoria: {category}</p>
      </div>
    </div>
  )
}

export default ItemDetail
