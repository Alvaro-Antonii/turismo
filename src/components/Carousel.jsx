import React from 'react'

function Carousel() {
  return (
    <>
        <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://www.teainstitute.cl/wp-content/uploads/2023/01/IMG-3-2.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="https://images.wallpaperscraft.com/image/single/china_city_nature_76262_800x600.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/EpcotChinaGate.JPG/800px-EpcotChinaGate.JPG" className="d-block w-100" alt="..."/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
      </div>
    </>
  )
}

export default Carousel