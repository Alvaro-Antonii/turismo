import React from 'react'
import "./centro.css"
import Carru from './Carru'

export const Centro = () => {
  return (
    <>
       <div className='centro' id="anima">
        
        <div className="row ">
          <div className="col-12"><h2>Descubrí nuestras ofertas en los mejores destinos.</h2></div>
          <div className="col">
            <img className='img-uni' src="https://github.com/Alvaro-Antonii/img/blob/main/car0.png?raw=true" alt="" />
          </div>
          <div className="col">
            <Carru></Carru>
          </div>
        </div>
        
       
        </div>
        
    </>
   
    
  )
 
}

