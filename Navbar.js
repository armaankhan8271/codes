import React from 'react'
import './Navbar.css'

import HomeIcon from '@mui/icons-material/Home';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import ContactsIcon from '@mui/icons-material/Contacts';
import InfoIcon from '@mui/icons-material/Info';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { Link } from 'react-router-dom'
import RestaurantIcon from '@mui/icons-material/Restaurant';

const Navbar = () => {
  return (
    <div>

        <div className="mnavs">
    <nav className="navbar bgnav navbar-expand-lg  rounded-pill   navbar-light ">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link class="navbar-brand fs-4 fw-bold" to="/Nav"><AddAPhotoIcon style={{ color: "black", fontSize: "35px" }}/>PHOTOHUB </Link>
      <ul class="navbar-nav naval me-auto mb-2 mb-lg-0">
        
        <li class="  my-mar nav-item">
          <Link class="nav-link fs-6 font-monospace active" to="/Home"><HomeIcon style={{ color: "black", fontSize: "35px" }}/>Home</Link>
        </li>
        <li class=" nav-item">
          <Link class="nav-link fs-6 font-monospace active" to="/Contact"> <ContactsIcon style={{ color: "black", fontSize: "35px" }}/>Contact</Link>
        </li>
        <li class=" nav-item">
          <Link class="nav-link fs-6 font-monospace active" to="/About"><InfoIcon style={{ color: "black", fontSize: "35px" }}/>About</Link>
        </li>
        <li class=" nav-item">
          <Link class="nav-link fs-6  fst-italic active" to="/Ma"><PlayCircleFilledIcon style={{ color: "black", fontSize: "35px" }}/>Start</Link>
        </li>
        <li class=" nav-item">
          <Link class="nav-link fs-6  fst-italic active" to="/Rec"><RestaurantIcon style={{ color: "black", fontSize: "35px" }}/>Recipie</Link>
        </li>
        <li class=" nav-item">
        </li>
        <li class=" nav-item ">
        </li>
      </ul>
      
    </div>
  </div>
</nav>
 


    </div>

  
    </div>
  )
}

export default Navbar