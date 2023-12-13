import React from 'react'

function HowitWorks() {
  return <>
    <div class="my-5 d-flex justify-content-center align-items-center">
      <div class="d-flex flex-column justify-content-center">
        <div class="d-flex flex-direction-column justify-content-center mb-4 how-does-work">
          <h2>How does it work</h2>
        </div>


        <div class="d-flex justify-content-center flex-wrap gap-4 how-work">
          <div class="card mb-3 border-0" style={{ maxWidth: "540px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src="./images/How-does-it-work/percent.svg" class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Daily<br />
                    Discounts</h5>
                </div>
              </div>
            </div>
          </div>
          <img src="./images/How-does-it-work/HR.svg" alt="" />

          <div class="card mb-3 border-0 ps-3" style={{ maxWidth: "540px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src="./images/How-does-it-work/location big.svg" class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Live<br />
                    Tracing</h5>
                </div>
              </div>
            </div>
          </div>
          <img src="./images/How-does-it-work/HR.svg" alt="" />

          <div class="card mb-3 border-0 ps-3" style={{ maxWidth: "540px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src="./images/How-does-it-work/clock.svg" class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Quick<br />
                    Delivery</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default HowitWorks