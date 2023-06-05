import { NavLink } from 'react-router-dom'
import img from '/assets/shopping-cart-1923313_1280.png'
import LinkedinIcon from './LinkedinIcon'
import GithubIcon from './GithubIcon' 

function Footer(){

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

    return(
        <footer className='footer'>
            <div>
                <figure className='footer-img'>
                    <img src={img} alt="acomerce" />
                </figure>
            </div>

            <div>
                <nav>
                    <ul className='navbar-footer'>
                        {
                            routes.map(route =>(
                                <li key={route.text}>
                                    <NavLink to={route.to} className={({isActive}) => isActive ? 'nav-item--active' : 'nav-item'}>
                                        {route.text}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>

            <div className='footer-icons'>
                <LinkedinIcon/>
                <GithubIcon/>
            </div>
        </footer>
    )
}

export default Footer