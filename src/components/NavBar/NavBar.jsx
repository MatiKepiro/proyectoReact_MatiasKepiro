import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const NavBar = () => {

    return (
        <nav className="NavBar">
            <Link to='/'>
                <h3>Ecommerce</h3>
            </Link>
            <div className="'Categories'">
                <NavLink to={'/category/remera'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Remeras</NavLink>
                <NavLink to={'/category/buzo'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Buzos</NavLink>
                <NavLink to={'/category/pantalon'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Pantalones</NavLink>
            </div>
            <CartWidget />
        </nav>
            

        
    )
}

export default NavBar