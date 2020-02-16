import React from 'react';
import './Header.scss';

function Header() {
  return (
    <div className='header__nav'>
      <div className='header__nav__btns-group'>
        <button className='header__nav__btns-group--bg header__nav__btn'>ref</button>
        <button className='header__nav__btns-group--lang header__nav__btn'>eng</button>
        <button className='header__nav__btns-group--F header__nav__btn'>F</button>
      </div>
      <div className='header__nav__search-field'>
        <input type='text' placeholder='Search city' className='header__nav__search-field--input'></input>
        <button className='header__nav__search-field--btn'>Search</button>
      </div>
    </div> 
  )
}

export default Header;