import React, { useState } from 'react'
import SearchIcon from '../Imgs & SVG/search.png'
import {Link, useNavigate} from 'react-router-dom'
import Logo from '../Imgs & SVG/film.svg'

function NavBar() {

  const navigate = useNavigate()
  const [searchInput, setSearchInput] = useState('')

  const search = () => {
    navigate(`/search/${searchInput}`)
    setSearchInput('')
  }

  return (
    <nav className='navbar'>
        <div className='navbar--logo'>
            <img className='navbar--logo--img' src={Logo} alt='Logo' />
        </div>
        <ul>
            <Link to={'/'}><li>HOME</li></Link>
            <Link to={'/popular'}><li>POPULAR</li></Link>
            <Link to={'/topratedmovies'}><li>TOP RATED</li></Link>
            <Link to={'/comingsoon'}><li>COMING SOON</li></Link>
        </ul>
        <div className='navbar--search'>
            <input placeholder='Ex. Black Adam' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            <img className='navbar--searchicon' src={SearchIcon} alt='Search' onClick={search}/>
        </div>
    </nav>
  )
}

export default NavBar