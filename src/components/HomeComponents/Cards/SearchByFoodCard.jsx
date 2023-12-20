import React from 'react'
import { useNavigate } from 'react-router-dom'

function SearchByFoodCard(props) {
    let navigate = useNavigate()

    const handleClick = (foodCategory) =>{
        navigate("/findfood", { state: { data:foodCategory.food } })
        console.log(foodCategory.food)
      }
    return <>
        <div className="d-flex flex-column align-items-center gap-3">
            <img src={props.data.img} className="bd-placeholder-img rounded-circle" width="140" height="140"
                aria-label="Placeholder" role="img" alt={props.data.food} onClick={()=>handleClick(props.data)}/>
            <h2 className="fw-normal">{props.data.food}</h2>
        </div>
    </>
}

export default SearchByFoodCard