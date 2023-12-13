import React from 'react'

function SearchByFoodCard(props) {
    return <>
        <div className="d-flex flex-column align-items-center gap-3">
            <img src={props.data.img} className="bd-placeholder-img rounded-circle" width="140" height="140"
                aria-label="Placeholder" role="img" alt="" />
            <h2 className="fw-normal">{props.data.dish}</h2>
        </div>
    </>
}

export default SearchByFoodCard