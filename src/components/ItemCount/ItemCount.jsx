import { useState } from "react"
import Swal from 'sweetalert2'


// eslint-disable-next-line react/prop-types
const ItemCount = ( {stock, initial} ) => {
    const [qty, setQty] = useState(initial)
    
    const clickMenos = () => {
        if (qty === 1) {
            Swal.fire("No se puede seleccionar menos de 1 producto!");
            return
        }
        setQty(qty - 1)
    }

    const clickMas = () => {
        if (qty === stock) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No hay mas stock!",
                footer: '<a href="#">Why do I have this issue?</a>',
            }                
        );
        return
        
        }
        setQty(qty + 1)
    }
    
    const handleClick = (operator) => {operator === "-" ? clickMenos() : clickMas()}


    

    return (
    <>
        <button onClick={() => handleClick("-")}>-</button>
        <span>{qty}</span>
        <button onClick={() => handleClick("+")}>+</button>
    </>
    )
}


export default ItemCount