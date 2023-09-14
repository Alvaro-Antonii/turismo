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
                <a className="navbar-brand" href="#">Inicio</a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Ofertas</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Destinos</a>
                    </li>
                

                    </ul>
                </div>
                </div>
            </nav>
        <div className='primero' style={{justifyContent:'center',alignContent:'center',backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
            <img src="https://github.com/Alvaro-Antonii/img/blob/main/banner.png?raw=true" alt="" className='d-block w-100'/>
            
                

            

        </div>
        
    </>
  )
}
