import * as FaIcons from "react-icons/fa";
export const menuLinks = [
  {
    title: 'Inicio',
    path: '/',
    icon: FaIcons.FaHome ,
    className: 'nav-link'
  },
  {
    title: 'Ejercicios',
    path: '/ejercicios/',
    icon: FaIcons.FaRunning,
    className: 'nav-link'
  },
  {
    title: 'Acceso',
    path: '/acceso/',
    icon: FaIcons.FaSignInAlt,
    className: 'nav-link'
  },
  {
    title: 'Contacto',
    path: '/contacto/',
    icon: FaIcons.FaEnvelope ,
    className: 'nav-link'
  }
];