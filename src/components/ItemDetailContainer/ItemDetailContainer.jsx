import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import { getProductById } from "../../mock/mockData"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
        //getProductById("1")
        //    .then(response => {
        //        setProduct(response)
        //    })
        //    .catch(error => {
        //        console.error(error)
        //    })
    }, [itemId])

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer