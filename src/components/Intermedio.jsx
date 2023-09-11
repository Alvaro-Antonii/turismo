import React from 'react'
import "./intermedio.css"

import Conten from './Conten'
export default function Intermedio() {
  return (
    <div className='IntermedioDiv'>
        <div className="row " style={{display:"flex",justifyContent:"center"}}>
          <div className="col-12"><h2>Recomendaciones</h2></div>
            <div className="col"><Conten des={"https://github.com/Alvaro-Antonii/img/blob/main/asia-landi.jpg?raw=true"} conti={"Asia"} ima={"https://randomuser.me/api/portraits/men/64.jpg"} tex={"Esse ex dolorum accusamus cumque, porro explicabo eveniet delectus odit ullam voluptates placeat amet labore illo, numquam magni, odio alias a culpa."}/></div>
            <div className="col"><Conten des={"https://github.com/Alvaro-Antonii/img/blob/main/eu-it.jpeg?raw=true"} conti={"Europa"} ima={"https://randomuser.me/api/portraits/women/20.jpg"} tex={"Mollitia, ex nemo! Ullam beatae ut quae laboriosam consequuntur fugiat molestiae dicta, doloremque natus quasi quibusdam aliquid maxime dolorem adipisci sit laborum."}/></div>
            <div className=" col"><Conten des={"https://github.com/Alvaro-Antonii/img/blob/main/am-ar.jpg?raw=true"} conti={"America"} ima={"https://randomuser.me/api/portraits/men/41.jpg"} tex={"Obcaecati pariatur modi eius animi dolorum delectus repellat consequatur iusto. Veniam sequi, ratione vitae voluptatibus incidunt alias assumenda est illo modi ullam!"}/></div>
            
        </div>
                
    </div>
  )
}
