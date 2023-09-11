import React from 'react'
import Boton from './Boton'
import "./conten.css"
export default function Conten({conti,ima,tex,des}) {
  return (
    <div>
        
    		   
                
    		    <div class="card profile-card-2" style={{margin:"0 3px"}}>
                    <div class="card-img-block">
                        <img class="img-fluid" src={des} alt="Card image cap"/>
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
