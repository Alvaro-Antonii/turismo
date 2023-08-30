import React from 'react'
import "./header.css"
import { Card } from './Card'
import Boton from './Boton'

export default function Header() {
  return (
    <>
        <nav className="navbar navbar-expand-sm  fixed-top">
        
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">Navbar</a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Enlace</a>
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
            <img src="https://github.com/Alvaro-Antonii/img/blob/main/banner.png?raw=true" alt="" className='d-block w-100'/>
            <div className='cont-bot'>
                <Boton cont={"Asia"}/>
                <Boton cont={"Europa"}/>
                <Boton cont={"América"}/>
            </div>
                

            

        </div>
        
    </>
  )
}
