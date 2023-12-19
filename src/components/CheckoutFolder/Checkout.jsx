import React from 'react'
import CheckoutAddressCard from './CheckoutAddressCard'
import CheckoutFoodCard from './CheckoutFoodCard'

function Checkout() {
    return <>
        <div className="container text-center mt-4">
            <div className="row flex-lg-row-reverse">
                <div className="col-12 col-md-4"><CheckoutFoodCard/></div>
                <div className="col-md-8">
                    <div className=" text-center">
                        <div className="row">
                            <div className="col-md-12 pb-4"><CheckoutAddressCard/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Checkout