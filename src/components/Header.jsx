import React from 'react'
import "./header.css"
import { Card } from './Card'
import Boton from './Boton'

export default function Header() {
  return (
    <>
        <nav className="navbar navbar-expand-sm  fixed-top">
        
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#">Navbar</a>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Enlace</a>
                    </li>
                    

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Dropdown</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Link</a></li>
                            <li><a className="dropdown-item" href="#">Another link</a></li>
                            <li><a className="dropdown-item" href="#">A third link</a></li>
                        </ul>
                    </li>
                

                    </ul>
                </div>
                </div>
            </nav>
        <div className='primero' style={{justifyContent:'center',alignContent:'center',backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
            <img src="src/img/banner.png" alt="" className='d-block w-100'/>
            <div className='cont-bot'>
                <Boton cont={"Asia"}/>
                <Boton cont={"Europa"}/>
                <Boton cont={"América"}/>
            </div>
                

            

        </div>
        
    </>
  )
}
