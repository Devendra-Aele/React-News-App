import React, { Component } from 'react'
import {Link} from "react-router-dom";
const Navbar =(props)=> {
 
        return (
           <>
           <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark position">
  <div className="container-fluid">
    <Link className="navbar-brand logo" to="/"> 💨To-Day News </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{textTransform: "capitalize"}}>
        <li className="nav-item"> <Link className="nav-link navtext fs-5 ms-2" aria-current="page" to="/general">Home</Link>
        </li>
         <li className="nav-item"> <Link className="nav-link navtext fs-5 ms-2" aria-current="page" to="/business">business</Link></li>
         <li className="nav-item"> <Link className="nav-link navtext fs-5 ms-2" aria-current="page" to="/entertainment">entertainment</Link></li>
         <li className="nav-item"> <Link className="nav-link navtext fs-5 ms-2" aria-current="page" to="/health">health</Link></li>
         <li className="nav-item"> <Link className="nav-link navtext fs-5 ms-2" aria-current="page" to="/science">science</Link></li>
         <li className="nav-item"> <Link className="nav-link navtext fs-5 ms-2" aria-current="page" to="/sports">sports</Link></li>
         <li className="nav-item"> <Link className="nav-link navtext fs-5 ms-2" aria-current="page" to="/technology">technology</Link></li>
         <li className="nav-item"> <Link className="nav-link navtext fs-5 ms-2" aria-current="page" to="/general">general</Link></li>
      </ul>
    </div>
  </div>
</nav>
           </>
        )
    
}

export default Navbar
