import React from 'react'
import "./Navbar.css";
import logo from '../assets/img20pl.svg';
import { MenuData } from './MenuData';
const Navbar = () => {
  return (
    <div className='mb-16'> 
    <nav className='nav-bar-items'>
        <h1>Pluralistic</h1>
        <img src={logo} className='logo' alt="logo"></img>
        <ul className='nav-menu'>
        {MenuData.map((item, index) =>{
            return(

            <li key={index}>
                <a href={item.url}
                className={item.cName}>{item.i}{item.title}</a>
               
            </li>
            )
        })}
        </ul>
        </nav>
    </div>
  )
}

export default Navbar