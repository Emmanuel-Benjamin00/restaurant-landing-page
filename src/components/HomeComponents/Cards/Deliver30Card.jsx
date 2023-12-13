import React from 'react'

function Deliver30Card(props) {
    return <>
        <div className="col">
            <div className="card border-0 card h-100">
                <img src={props.data.img} className="bd-placeholder-img card-img-top" width="100%"
                    height="210" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{props.data.dish}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <p>{props.data.time}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Deliver30Card