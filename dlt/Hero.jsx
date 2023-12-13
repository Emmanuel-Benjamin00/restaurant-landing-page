import React from 'react'

function Hero() {
  return <>
    <div class=" col-auto px-4 bg-warning mb-5 hero">
    <div class="row flex-lg-row-reverse align-items-center bg-warning g-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="./images/hero/banana leaf.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700"
          height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Look at your fav Meals</h1>
        <p class="lead">Within a few clicks, find meals that are accessible near you</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <div class="card w-100 mb-3">
            <div class="card-body">
              <div class="pb-1 d-flex">
                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 hero-button-delivery"
                  style={{whiteSpace: "nowrap"}}><img src="./images/hero/bike.svg" alt="" class="pe-2"/>Delivery</button>
                <button type="button" class="btn btn-outline-secondary btn-lg px-4 hero-button-pickup "
                  style={{whiteSpace: "nowrap"}}><img src="./images/hero/bag.svg" alt="" class="pe-2"/>Pickup</button>
              </div>
              <hr />
              <div class="d-flex gap-1">
                <div class="d-inline-flex align-items-center address">
                  <img src="./images/hero/location.svg" alt="" class="mr-2"/>
                  <input type="search" class="form-control form-control-dark border-0 text-secondary fs-6 fw-bold"
                    style={{width: "15rem",backgroundColor:"#F5F5F5 "}}  placeholder="Enter Your Address"
                    aria-label="Search"/>
                </div>
                <a href="#" class="btn btn-warning find-food-btn"><img src="./images/hero/search.svg" alt=""
                    class="pb-1 pe-2"/>Find
                  food</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
}

export default Hero