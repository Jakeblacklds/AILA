import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { pedirData } from '../../Pedirdata'
import './ItemListContainer.css'
import loadingif from '../../assets/loadingif.gif'

const ItemListContainer = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        pedirData()
            .then(res => {
                if (categoryId) {
                    setData(res.filter(prod => prod.category === categoryId))
                } else {
                    setData(res)
                }
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return ( 
        <div>
        <h2> </h2>
        <div className={`container ${loading ? 'loading' : 'show'}`} >
            <img src={loadingif} alt="gif" className={loading ? 'visible' : 'hidden'} />
            {loading ? <h2 className='loading' > Cargando {categoryId}</h2> : <ItemList items={data} />}
        </div>
        </div>
    )
    
} 


export default ItemListContainer