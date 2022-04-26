import React from 'react'
import './App.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <a href='#'><img className='logo-img' src='https://c.neh.tw/thumb/f/720/m2i8Z5H7H7Z5m2H7.jpg' alt='coffee'></img></a>
        </div>
        <ul className='nav-list'>
            <a href='#'><li className='nav-item'>Home</li></a>
            <a href='#menu'><li className='nav-item'>Menu</li></a>
            <a href='#about'><li className='nav-item'>About</li></a>
            <a href='#contact'><li className='nav-item'>Contact</li></a>
        </ul>
    </div>
  )
}

export default Navbar