import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {

  return (
    <>
    
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link className="nav-link" to='/' >Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/create'  >Create</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Coming Soon</a>
      </li>
    </ul>
    <span className="navbar-text">
      Navbar text with an inline element
    </span>
  </div>
</nav>
    </>
  )
}
