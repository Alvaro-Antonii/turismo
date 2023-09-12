import React from 'react'
import Cardhori from './Cardhori'
export default function Carru() {
  return (
    <>
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                  <div class="carousel-item active">
                      <Cardhori url={"https://github.com/Alvaro-Antonii/img/blob/main/car1.png?raw=true"}></Cardhori>

                  </div>
                  <div class="carousel-item">
                      <Cardhori url={"https://github.com/Alvaro-Antonii/img/blob/main/car2.png?raw=true"}></Cardhori>

                      
                  </div>
                  <div class="carousel-item">
                          <Cardhori url={"https://github.com/Alvaro-Antonii/img/blob/main/car3.png?raw=true"}></Cardhori>

                    </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                  </button>
              </div>
              </div>
          </>
  )
}
