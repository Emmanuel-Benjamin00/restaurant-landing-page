import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { change } from "../../../redux/orderDataSlice"
import { useSelector } from 'react-redux'


function PopularItemsCard(props) {
    let navigate = useNavigate()
    let dispatch = useDispatch()

    let token = useSelector((state) => state.token)

    const [error, setError] = useState(null);

    let handleClick = async (value) => {
        try {
            if (token) {
                console.log(value)
                dispatch(change(value))
                navigate("/checkout")
            } else {
                navigate("/login", { state: { OrderedFoodData: value } })
            }
        } catch (error) {
            console.error('Error in handleClick:', error);
            setError('An error occurred. Please try again later.');
        }
    }


    return <>
        <div className="card border-0 card h-100 pt-1">
            {error && <div className="alert alert-danger">{error}</div>}
            <img src={`data:image/jpeg;base64,${props.data.img}`} alt={props.data.food} className="bd-placeholder-img card-img-top p-2" width="100%"
                height="180" loading="lazy" />
            <div className="d-flex justify-content-center align-items-center flex-column">
                <h5 className="card-title popular-font">{props.data.food}</h5>
                <p className='fs-6 fw-normal'>Price: {props.data.price}</p>
                <div className="">
                    <button type="button" className="btn btn-primary m-0 order-button btn-warning text-light"
                        style={{ width: "170px" }} onClick={() => handleClick(props.data)}>Order Now</button>
                </div>
            </div>
        </div>
    </>
}

export default PopularItemsCard