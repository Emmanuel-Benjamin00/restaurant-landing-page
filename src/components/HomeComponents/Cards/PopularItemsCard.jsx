import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {change} from "../../../redux/orderDataSlice"
import { useSelector } from 'react-redux'


function PopularItemsCard(props) {
    let navigate = useNavigate()
    let dispatch = useDispatch()

    let token = useSelector((state)=>state.token)

    let handleClick = async (value) => {
        try {
            if(token){
                console.log(value)
                dispatch(change(value))
                navigate("/checkout")
            }else{
                navigate("/login", { state: { OrderedFoodData: value } })
            }
        } catch (error) {
            // navigate("/checkout")
            // console.log(error)
        }
    }


    return <>
        <div className="card border-0 card h-100 pt-1">
            <img src={props.data.img} className="bd-placeholder-img card-img-top p-2" width="100%"
                height="180" alt="" />
            <div className="d-flex justify-content-center align-items-center flex-column">
                <h5 className="card-title popular-font">{props.data.food}</h5>
                <div className="">
                    <button type="button" className="btn btn-primary m-0 order-button btn-warning text-light"
                        style={{ width: "170px" }} onClick={() => handleClick(props.data)}>Order Now</button>
                </div>
            </div>
        </div>
    </>
}

export default PopularItemsCard