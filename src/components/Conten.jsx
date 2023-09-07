import React from 'react'
import Boton from './Boton'
import "./conten.css"
export default function Conten({conti,ima,tex}) {
  return (
    <div>
        
    		   
                
    		    <div class="card profile-card-2" style={{margin:"0 3px"}}>
                    <div class="card-img-block">
                        <img class="img-fluid" src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Card image cap"/>
                    </div>
                    <div class="card-body pt-5">
                        <img src={ima} alt="profile-image" class="profile"/>
                        <h5 class="card-title">Landon Hunt</h5>
                        <p class="card-text">{tex}</p>
                        <Boton cont={conti}></Boton>
                    </div>
                </div>
               
    		
               
    	
    </div>
  )
}
