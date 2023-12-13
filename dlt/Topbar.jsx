import React from 'react'

function Topbar() {
    return <>
        <div className="px-1">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-4 mb-4 border-bottom">

                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none hot-meals">
                    <h1 className="bi me-1 qwigley text-warning px-4" width="40" height="32">Hot Meals</h1>
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center  mb-md-0 pb-1">
                    <li>
                        <p style={{ whiteSpace: "nowrap" }}>
                            <span className="text-secondary fs-6 fw-bold source-sans-3 lh-100per">Deliver to: </span>
                            <img src="./images/header/location symbol.png" alt="" />
                            <span className="text-secondary open-sans fs-6 lh-140per">Current Location</span>
                            <span className="text-secondary fs-6 fw-bold open-sans lh-100per">Ashok Nagar, Chennai-600013</span>
                        </p>
                    </li>
                </ul>

                <div className="col-md-3 text-end d-flex gap-3 pb-3">
                    <div className="d-flex align-items-center">
                        <img src="./images/header/Search image.svg" alt="" className="mr-2" />
                        <input type="search" className="form-control form-control-dark border-0 text-secondary fs-6 fw-bold"
                            style={{ width: "9rem" }} placeholder="Search Food" aria-label="Search" />
                    </div>
                    <button type="button" className="btn btn-outline-warning me-2" style={{ whiteSpace: "nowrap" }}>
                        Login
                    </button>
                </div>

            </header>
        </div>
    </>
}

export default Topbar