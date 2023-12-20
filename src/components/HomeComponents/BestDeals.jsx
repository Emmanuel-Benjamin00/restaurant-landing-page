import React from 'react'
import BestDealHeroImg from '../../assets/images/banana-leaf-idly.png'
import { useNavigate } from 'react-router-dom'

function BestDeals() {
  let navigate = useNavigate()
  return <>
    <section className="container-fluid col-xxl-8 my-4 Proceed">
      <div className="row flex-lg-row-reverse align-items-center py-5">
        <div className="col-10 col-sm-10 col-lg-7">
          <img src={BestDealHeroImg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700"
            height="500" loading="lazy" />
        </div>
        <div className="col-lg-5">
          <h1 className="display-5 fw-bold lh-1 mb-3"><span>Best deals</span><span className="text-warning"> Crispy Diffen</span>
          </h1>
          <p className="lead">Enjoy the large size of Dosa. Complete<br />
            perfect slice of Dosa.</p>
          <div className="">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 bg-warning sub-but-foot col-md-12 mt-3" style={{ width: "240px" }} onClick={() => navigate("/findfood")}>Proceed to order<i className="fa-solid fa-chevron-right ps-2"></i></button>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default BestDeals