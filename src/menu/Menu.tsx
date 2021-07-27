import React, { FC, useState } from 'react'
import {Link} from 'react-router-dom'
import './menu.css';
import Logo from '../img/logo.png';
import Name from '../img/name.png'
import * as FaIcons from "react-icons/fa";
import * as Githubicons from "react-icons/go";
import { menuLinks } from './domain/menu-links';
import {logOut} from '../utils/utils'


export const Menu: FC = () => {
  const [menu, setMenu] = useState(false)
  const showMenu = () => setMenu(!menu);
  const [logOptions, setLogOptions] = useState(false)
  const showMlogOptions = () => setLogOptions(!logOptions);

  return (

    <header className='header'>
      <div className='navbar'>
      <Link to='#' className='menu-hamburger'>
        <FaIcons.FaBars onClick={showMenu} title="hamburger"/>
      </Link>

      <Link to ='/'>
        <img src={Name} alt="app training tea" className="navbar-log"/>
      </Link>

     
      <FaIcons.FaUserAlt onClick={showMlogOptions} className='menu-profile'/>
   


      { logOptions && <ul className='modal__loggin-icon'>  


          <li className='nav-link'>
            <Link to='/alumnos/'>
              <FaIcons.FaUserFriends/>
              <span className='nav-link__title'>Mis alumnos</span>
            </Link>
          </li>

          <li className='nav-link' onClick={logOut}>
            <Link to='#'>
              <Githubicons.GoSignOut/>
              <span className='nav-link__title'>Cerrar sesión</span>
            </Link>
          </li>

      </ul> }


      </div>

        <nav data-testid='nav' className={menu ? 'nav-menu active' : 'nav-menu'}>
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

