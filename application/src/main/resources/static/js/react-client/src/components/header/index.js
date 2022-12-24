import React from 'react'
import style from './style.module.scss';

const Header = () => {
  return (
    <div className={style.header}>Header
    <h1> Grocery Tracker</h1>
    <ul className={style.navlist}>
        <a href='#'>Home</a>
        <a href='#'>Contact</a>
        <a href='#'>Grocery List</a>
    </ul>
    </div>
  )
}

export default Header