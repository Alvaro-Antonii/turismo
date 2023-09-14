import React from 'react'
import "./footer.css"

export default function Footer() {
  return (
    
        <footer class="bg-dark text-center text-white">
              {/* <!-- Grid container --> */}
              <div class="mt-5">
                  {/* <!-- Section: Social media --> */}
                  <section class="mt-5 p-5">
                      {/* <!-- Facebook --> */}
                      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                      ><i class="fa fa-facebook-f"></i></a>

                      {/* <!-- Twitter --> */}
                      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                      ><i class="fa fa-twitter"></i></a>

                      {/* <!-- Google --> */}
                      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                      ><i class="fa fa-google"></i></a>

                      {/* <!-- Instagram --> */}
                      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                      ><i class="fa fa-instagram"></i></a>

                      {/* <!-- Linkedin --> */}
                      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                      ><i class="fa fa-linkedin"></i></a>

                      {/* <!-- Github --> */}
                      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                      ><i class="fa fa-github"></i></a>
                  </section>
                  {/* <!-- Section: Social media --> */}
              </div>
              {/* <!-- Grid container --> */}

              {/* <!-- Copyright --> */}
              <div class="text-center p-3" >
                  © 2023 Copyright:
                  <a class="text-white" href="https://porfolio-alvaro-sanchez.netlify.app/">Alvaro Sanchez</a>
              </div>
              {/* <!-- Copyright --> */}
          </footer>
          
    
  )
}
