import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {change} from "../../../redux/orderDataSlice"
import { useSelector } from 'react-redux'


function Deliver30Card(props) {
    let navigate = useNavigate()
    let token = useSelector((state)=>state.token)
    let dispatch = useDispatch()
    

    let handleClick = (value) =>{
        if(token){
            console.log(value)
            dispatch(change(value))
            navigate("/checkout")
        }else{
            navigate("/login", { state: { OrderedFoodData: value } })
        }
    }

    return <>
        <div className="col">
            <div className="card border-0 card h-100" style={{cursor:"pointer"}} onClick={()=>handleClick(props.data)}>
                <img src={`data:image/jpeg;base64,${props.data.img}`} className="bd-placeholder-img card-img-top" width="100%"
                    height="210" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{props.data.food}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <p>30 Min Delivery</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Deliver30Card