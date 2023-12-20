import React, { useEffect, useState } from 'react'
import AxiosService from '../../utils/ApiService'
import { useSelector, useDispatch } from 'react-redux'
import { change } from "../../redux/orderDataSlice"

function CheckoutFoodCard() {
    let orderData = useSelector((state) => state.orderData)
    console.log(orderData)
    
    return <>
        <div className="card mx-auto" style={{ width: "18rem" }}>
            <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title">{orderData[0].food}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary"><img src={`data:image/jpeg;base64,${orderData[0].img}`} alt={orderData[0].food}   style={{ width: "100%", height: "auto" }}/></h6>
                <div className='d-flex justify-content-between' style={{ width: "80%" }}>
                    <p>Price</p>
                    <p>{orderData[0].price}</p>
                </div>
                <hr style={{ width: "80%" }} />
                <div className='d-flex justify-content-between' style={{ width: "80%" }}>
                    <p>Total</p>
                    <p>{orderData[0].price}</p>
                </div>
            </div>
        </div>

    </>
}

export default CheckoutFoodCard