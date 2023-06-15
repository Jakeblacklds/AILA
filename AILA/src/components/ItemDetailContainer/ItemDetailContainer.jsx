import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { pedirData } from '../../Pedirdata'
import loadingif from '../../assets/loadingif.gif'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const { itemId } = useParams()
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setLoading (true)
        pedirData()

            .then(res => {
                setItem(res.find(prod => prod.id === Number(itemId)))
            }
            )
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            }
            )
    }, [itemId])

    return ( 
        <div>
        <h2> </h2>
        <div className={`container ${loading ? 'loading' : 'show'}`} >
            <img src={loadingif} alt="gif" className={loading ? 'visible' : 'hidden'} />
            {loading ? <h2 className='loading' > Cargando </h2> : <ItemDetail {...item} />}
        </div>
        </div>
    )
}

export default ItemDetailContainer
