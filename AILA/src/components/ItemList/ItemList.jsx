import ItemCard from "../ItemCard/ItemCard"
import './ItemList.css'


const ItemList = ({items}) => {

    return (
        <div>
            
            <hr/>

            <div className='itemlist'>
                {
                    
                    items.map((prod) => <ItemCard key={prod.id} {...prod}/>)
                }
            </div>


        </div>
    )
}

export default ItemList