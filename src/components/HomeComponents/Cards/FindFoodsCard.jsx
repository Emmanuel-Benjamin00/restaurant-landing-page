import React from 'react'
import { useNavigate } from 'react-router-dom'
import { change } from '../../../redux/orderDataSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';


function FindFoodsCard(props) {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let token = useSelector((state) => state.token)
    

    let handleClick = (value) =>{
        console.log(props.data)
        console.log(value)
        if(token){
            dispatch(change(value))
            navigate("/checkout")
        }
        else
        {
            navigate("/login", { state: { OrderedFoodData: value } })
        }
    }
    return <>
        <div className="col">
            <div className="card h-100">
                <img src={`data:image/jpeg;base64,${props.data.img}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.data.food}</h5>
                    <p className="card-text">{props.data.des}</p>
                    <p>Rs. {props.data.price}</p>
                    <button onClick={()=>handleClick(props.data)}>Order Now</button>
                </div>
            </div>
        </div>
    </>
}

export default FindFoodsCard