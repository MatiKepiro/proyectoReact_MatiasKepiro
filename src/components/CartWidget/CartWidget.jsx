import icon_cart from './assets/icon_cart.svg'
import ItemCount from '../ItemCount/ItemCount'

const CartWidget = () => {
    return (

        <div>
            <img src={ icon_cart } alt='cart-widget'/>
            <ItemCount stock={10} initial={1
            }/>
        </div>

    )
}

export default CartWidget 