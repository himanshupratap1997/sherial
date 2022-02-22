import React from 'react'

export default function Header() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container pt-4">
    <a class="navbar-brand" href="#">
      <img src='./img/shereal_logo.png'></img>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item ms-4">
          <a class="nav-link active" aria-current="page" href="#">About </a>
          
        </li>
      
        <i style={{fontSize:"7px"}} class="fa-solid fa-circle ms-4 me-4 pt-3"></i>
        <li class="nav-item">
          <a class="nav-link" href="#">White paper</a>
        </li>
        <i style={{fontSize:"7px"}} class="fa-solid fa-circle ms-4 me-4 pt-3"></i>
        <li class="nav-item">
          <a class="nav-link" href="#">Marketplace</a>
        </li>
        <i style={{fontSize:"7px"}} class="fa-solid fa-circle ms-4 me-4 pt-3"></i>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
        <i style={{fontSize:"7px"}} class="fa-solid fa-circle ms-4 me-4 pt-3"></i>
        <li class="nav-item">
          <a class="nav-link" href="#">Team</a>
        </li>
      
       
      </ul>
      <button className='btn b-login'>Login</button>
      <button className='btn b-loginstyle ms-4'>Signin</button>
    </div>
  </div>
</nav>
    </div>
  )
}
