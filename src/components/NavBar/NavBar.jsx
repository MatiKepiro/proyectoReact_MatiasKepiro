import CartWidget from "../CartWidget/CartWidget"

// eslint-disable-next-line react/prop-types
const NavBar = ({categories, title}) => {

    return (
        <>
            <div>
                <img src=""/>
                <h1>{title}</h1>
            </div>
            <div>
                <a href="#">{categories[0]}</a>
                <a href="#">{categories[1]}</a>
                <a href="#">{categories[2]}</a>
            </div>
            <CartWidget />
        </>

        
    )
}

export default NavBar