import React from 'react'
import './App.css';

const Menu = () => {
  return (
    <div className='menu'>
        <h2>Menu</h2>
        <div className='menus'>
            <div className='menu-section'>
                <h3>Boissons Chaudes</h3>
                <p>Café</p>
                <p>Latte</p>
                <p>Mocha</p>
            </div>
            <div className='menu-section'>
                <h3>Boissons Froides</h3>
                <p>Café</p>
                <p>Latte</p>
                <p>Mocha</p>
            </div>
            <div className='menu-section'>
                <h3>A Manger</h3>
                <p>Café</p>
                <p>Latte</p>
                <p>Mocha</p>
            </div>
        </div>
    </div>
  )
}

export default Menu