import React from 'react';
import { Link } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='header_inner'>
       <Link to='/'>
       <div className='header_logo'>
          <img src='https://www.svgrepo.com/show/303137/airbnb-2-logo.svg' alt='Logo' />
        </div>
       </Link>
        <div className='header_menu'>
          <ul>
            <li>
              <Link to='/profile' className='active'>Places to stay</Link>
            </li>
            <li>
              <Link to='/searchListings'>Experiences</Link>
            </li>
            <li>
              <Link to='/onlineExperiences'>Online Experiences</Link>
            </li>
          </ul>
        </div>
        <div className='header_right'>
          <button type='button' className='btn_secondary'>Become a Host</button>
          <button type='button' className='btn_icon'>
            <LanguageIcon />
          </button>
          <Link to='/login'>
          <button type='button' className='btn_profile'>
            <MenuIcon />
            <AccountCircleIcon />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header