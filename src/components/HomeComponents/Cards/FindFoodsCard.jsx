import React from 'react'
import { useNavigate } from 'react-router-dom'
import { change } from '../../../redux/orderDataSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import AxiosService from '../../../utils/ApiService';
import {getData} from "../../../redux/getDataSlice"


function FindFoodsCard(props) {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let token = useSelector((state) => state.token)

    console.log(props.data)
    let handleClick = (value) => {
        if(props.editButton){
            navigate(`/admin/editfood/${props.data._id}`)
        }else{
            if (token) {
                dispatch(change(value))
                navigate("/checkout")
            }
            else {
                navigate("/login", { state: { OrderedFoodData: value } })
            }
        }     
    }

    let handleDelete = async (id) =>{
        try {
            let res = await AxiosService.delete(`/food/${id}`)
            if(res.status===202){
                console.log("deleted")    
                dispatch(getData())            
            }
        } catch (error) {
           console.log(error)
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
                    <button onClick={() => handleClick(props.data)}>
                    {
                        props.editButton ? "Edit" : "Order Now"
                    }
                    </button>                    
                    {
                        props.editButton ? <button className="ms-3" onClick={() => handleDelete(props.data._id)}>Delete</button> : ""
                    }                                  
                </div>
            </div>
        </div>
    </>
}

export default FindFoodsCard