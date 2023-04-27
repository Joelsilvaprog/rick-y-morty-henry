import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link to='/home'><a className='navbar-brand' href=""><img src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" alt="rym" width={150} height={70} className='d-inline-block align-text-top'/></a></Link>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <Link to="/login"><a class="nav-link" href="#" color='white'>LOGIN</a></Link>
        <a class="nav-link" href="#">About</a>
        <Link to='/details'><a class="nav-link disabled">Details</a></Link>
      </div>
    </div>
            
            <form className="d-flex" role='search'>
                <input className="form-control me-2" type="search" placeholder="ID del personaje" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>


        </div>

      </nav>
    );
}