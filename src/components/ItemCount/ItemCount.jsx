import { useState } from "react"
import Swal from 'sweetalert2'


// eslint-disable-next-line react/prop-types
const ItemCount = ( {stock, initial, onAdd} ) => {
    const [qty, setQty] = useState(initial)
    
    const clickMenos = () => {
        //if (qty === 1) {
        //    Swal.fire("No se puede seleccionar menos de 1 producto!");
        //    return}
        if(qty > 1) {
            setQty(qty - 1)
        }

    }

    const clickMas = () => {
        //if (qty === stock) {
        //    Swal.fire({
        //        icon: "error",
        //        title: "Oops...",
        //        text: "No hay mas stock!",
        //        footer: '<a href="#">Why do you have this issue?</a>',
        //    }                
        //);
        //return
        //}
        if (qty < stock) {
            setQty(qty + 1)
        }
    }
    
    // const handleClick = (operator) => {operator === "-" ? clickMenos() : clickMas()}


    

    return (
    <>
        <div className="Counter">
            <div className="Controls">
                <button className="Button" onClick={clickMenos}>-</button>
                <h4 className="Number">{qty}</h4>
                <button className="Button" onClick={clickMas}>+</button>
            </div>
            <div>
                <button className="Button" onClick={() => onAdd(qty)} disabled={!stock}></button>
            </div>

        </div>
                
    </>
    )
}

//<button onClick={() => handleClick("-")}>-</button>
//<span>{qty}</span>
//<button onClick={() => handleClick("+")}>+</button>

export default ItemCount