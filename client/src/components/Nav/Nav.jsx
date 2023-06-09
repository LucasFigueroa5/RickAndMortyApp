import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Header from '../header/Header'
import'./Nav.css'



const Nav = ({onSearch}) => {
  return (
    <div className='nav-cont'>
        <Header />
        <SearchBar onSearch={onSearch}/>
    </div>
  )
}

export default Nav