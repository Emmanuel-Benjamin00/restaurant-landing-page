import React from 'react'
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
                    alt=""/></a></li>
              <li className="ms-3"><a className="link-body-emphasis" href="#"><img src={fbImg}
                    alt=""/></a></li>
              <li className="ms-3"><a className="link-body-emphasis" href="#"><img src={twitterImg} alt=""/></a>
              </li>
            </ul>

            <p>Receive exclusive offers in your mailbox</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">

              <div className="input-container d-flex p-1 " style={{borderRadius: "8px", backgroundColor: "#f5f5f5"}}>
                <img src={mailImg} alt=""/>
                <label htmlFor="newsletter1" className="visually-hidden">Enter Your email</label>
                <input id="newsletter1" type="text" className="form-control border-0 footer-inp" placeholder="Enter Your email"
                  style={{color: "#F5F5F5"}}/>
              </div>
              <button className="btn bg-warning sub-but-foot" type="button">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex  flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>All rights Reserved © </p>
        <p><span>Made with <span> <img src={heartImg} alt=""/>&nbsp;</span>
            by </span><span>Emmanuel</span></p>
      </div>
    </footer>
  </div>
  </>
}

export default Footer