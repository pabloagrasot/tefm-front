import React, { FC, useState } from 'react'
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
      <a href='#' className='menu-hamburger'>
        <FaIcons.FaBars onClick={showMenu} title="hamburger"/>
      </a>

      <a href ='/'>
        <img src={Name} alt="app training tea" className="navbar-log"/>
      </a>

     
      <FaIcons.FaUserAlt onClick={showMlogOptions} className='menu-profile'/>
   


      { logOptions && <ul className='modal__loggin-icon'>  


          <li className='nav-link'>
            <a href='/alumnos/'>
              <FaIcons.FaUserFriends/>
              <span className='nav-link__title'>Mis alumnos</span>
            </a>
          </li>

          <li className='nav-link' onClick={logOut}>
            <a href='#'>
              <Githubicons.GoSignOut/>
              <span className='nav-link__title'>Cerrar sesión</span>
            </a>
          </li>

      </ul> }


      </div>

        <nav title='nav' className={menu ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showMenu}>
            <li className='navbar-toggle'>
              <a href='#' className='menu-close'>
                <FaIcons.FaTimes />
              </a>
            </li>
            
        
            {menuLinks.map((link, index) => {
              return (
                <li key={index} className={link.className}>
                  <a href={link.path}>
                    {<link.icon/>}
                    <span className="nav-link__title">{link.title}</span>
                  </a>
                </li>
              );
            })}

            <img src={Logo} className='menu-logo' alt='logo' />
          </ul>
        </nav>
      
    </header>
    
  )
}

