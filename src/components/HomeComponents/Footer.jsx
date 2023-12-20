import React from "react"
import instaImg from "../../assets/images/Footer/instagram.svg"
import fbImg from "../../assets/images/Footer/facebook.svg"
import twitterImg from "../../assets/images/Footer/twitter.svg"
import heartImg from "../../assets/images/Footer/heart-fill.svg"
import mailImg from "../../assets/images/Footer/envelope.svg"

function Footer() {
  return <>
    <div className="bg-dark">
      <footer className="py-5 col-auto px-5 source-sans-3">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Company</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">About us</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Team</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Careers</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Blog</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Contact</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Help & Support</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Partner with us </a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Ride with us</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Legal</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Terms & Conditions</a>
              </li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Refund & Cancellation</a>
              </li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Privacy Policy</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Cookie Policy</a></li>
            </ul>
          </div>

          <div className="col-md-4 col-lg-4 offset-md-1 mb-3">
            <form>
              <h5>Follow Us</h5>

              <ul className="list-unstyled d-flex">
                <li className="ms-3"><a className="link-body-emphasis" href="#"><img src={instaImg}
                  alt="Instagram" /></a></li>
                <li className="ms-3"><a className="link-body-emphasis" href="#"><img src={fbImg}
                  alt="Facebook" /></a></li>
                <li className="ms-3"><a className="link-body-emphasis" href="#"><img src={twitterImg} alt="Twitter" /></a>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="d-flex  flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>All rights Reserved © </p>
          <p><span>Made with <span> <img src={heartImg} alt="Heart" />&nbsp;</span>
            by </span><span>Emmanuel</span></p>
        </div>
      </footer>
    </div>
  </>
}

export default Footer