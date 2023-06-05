import { Link, NavLink } from 'react-router-dom'
import img from '/assets/shopping-cart-1923313_1280.png'
import ShoppingCarIcon from './ShoppingCarIcon'
import { useEffect, useState } from 'react'

function Header(){

    const [active, setActive] = useState(false)
    const routes = [
        {
            text: 'Home',
            to: '/'
        },
        {
            text: 'Products',
            to: '/products'
        }
    ]

    useEffect(() =>{
        window.addEventListener('scroll', () =>{
            window.scrollY > 0 ? setActive(true) : setActive(false)
         })
    }, [])

    const headerClass = active ? 'header--active' : 'header-container'
    return(
        <header className={headerClass}>
            <div className='header'>
                <div>
                    <figure className='header-img'>
                        <img src={img} alt="" />
                    </figure>
                </div>

                <div>
                    <nav className='navbar'>
                        <ul className='nav-items'>
                            {
                                routes.map(route => (
                                    <ul key={route.text}>
                                        <NavLink to={route.to} className={({isActive}) => isActive ? 'nav-item--active' : 'nav-item'}>
                                            {route.text}
                                        </NavLink>
                                    </ul>
                                ))
                            }
                        </ul>
                    </nav>
                </div>

                <div className='header-icons-container'>
                    <Link to='/shopping-car'>
                        <ShoppingCarIcon/>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header