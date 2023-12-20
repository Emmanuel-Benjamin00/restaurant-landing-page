import React from 'react'


function HowItWorkCard(props) {
    return <>
        <div className="card mb-3 border-0">
            <div className="row g-0">
                <div className="col-md-5 d-flex align-items-center how-doesit-work">
                    <img src={props.data.img} className="img-fluid rounded-start h-100 pe-2" alt="How it works" />
                    <h5 className="ps-3">{props.data.word}</h5>
                </div>
            </div>
        </div>
    </>
}

export default HowItWorkCard