import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import rickAndMortyImage from "./Rick-and-Morty.png";
import rym from './rym.png'
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <div className='header-cont'>
        <div className='botones'>
          <NavLink to='/home'>
            <button className='btn-nav'>
            Home
            </button>
          </NavLink>
          <div className='btn-sep'></div>
          <NavLink to='/about'>
            <button className='btn-nav'>
              About
            </button>
          </NavLink>
          <div className='btn-sep'></div>
          <Link to='/favorites'>
            <button className='btn-nav'>
              Favorites
            </button>
          </Link>
          
        </div>
        <img 
          src={rickAndMortyImage} 
          alt="" 
          width='400px'
          className='rickandmortyImg' 
        />
        {/* <h1 className='app-title'>Rick and Morty</h1> */}
        <div className='items'>
            <a href="https://www.facebook.com/Luks.Figueroa.SL/" target='blank'><FontAwesomeIcon className='icon' icon={faFacebookF} /></a>
            <a href="https://www.instagram.com/lucasfiguerok/" target='blank'><FontAwesomeIcon className='icon' icon={faInstagram} /></a>
            <a href="https://www.linkedin.com/in/lucas-figueroa-62b6b4205/" target='blank'><FontAwesomeIcon className='icon' icon={faLinkedinIn} /></a>
            <a href="https://github.com/LucasFigueroa5" target='blank'><FontAwesomeIcon className='icon' icon={faGithub} /></a>
        </div>
        <img className='rym' src={rym} alt="" />
    </div>
  )
}

export default Header