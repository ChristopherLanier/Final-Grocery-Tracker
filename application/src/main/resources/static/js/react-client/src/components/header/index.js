import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './style.module.scss';

const Header = () => {
  return (
    <div className={style.header}>
    <h1> GroceryTracker</h1>
    <ul className={style.navlist}>
       <NavLink to={'/'}>Home</NavLink> 
       <NavLink to={'/contact'}>Contact</NavLink>
       <NavLink to={'/grocery-list'}>Grocery List</NavLink>
    </ul>
    </div>
  )
}

export default Header