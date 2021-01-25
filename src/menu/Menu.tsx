import { FC, useState } from 'react'
import {Link} from 'react-router-dom'
import './menu.css';
import Logo from '../img/logo.png';
import * as FaIcons from "react-icons/fa";
import { menuLinks } from './menu-links';


export const Menu: FC = () => {
  const [menu, setMenu] = useState(false)
  const showMenu = () => setMenu(!menu);
  return (

    <header className='header'>
      <div className='navbar'>
      <Link to='#' className='menu-hamburger'>
      <FaIcons.FaBars onClick={showMenu}/>
      </Link>
      </div>

        <nav className={menu ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showMenu}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-close'>
                <FaIcons.FaTimes />
              </Link>
            </li>
            

            {menuLinks.map((link, index) => {
              return (
                <li key={index} className={link.className}>
                  <Link to={link.path}>
                    {<link.icon/>}
                    <span className="nav-link__title">{link.title}</span>
                  </Link>
                </li>
              );
            })}

            <img src={Logo} className='menu-logo' alt='logo' />
          </ul>
        </nav>
      
    </header>
    
  )
}

