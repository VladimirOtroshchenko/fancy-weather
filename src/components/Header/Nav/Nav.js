import React from 'react';
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

const Header = ({language, setLanguage}) => {
  const { t } = useTranslation();
  return (
    <div className='header__nav'>
      <div className='header__nav__btns-group'>
        <button className='header__nav__btns-group--bg header__nav__btn'>ref</button>
        <button className='header__nav__btns-group--lang header__nav__btn' onClick={setLanguage}>
          {language}
        </button>
        <button className='header__nav__btns-group--F header__nav__btn'>F</button>
      </div>
      <div className='header__nav__search-field'>
        <input type='text' placeholder={t('searchCity')} className='header__nav__search-field--input'></input>
        <button className='header__nav__search-field--btn'>{t('search')}</button>
      </div>
    </div> 
  )
}

Header.propTypes = {
  language: PropTypes.string,
  setLanguage: PropTypes.func,
};

export default Header;