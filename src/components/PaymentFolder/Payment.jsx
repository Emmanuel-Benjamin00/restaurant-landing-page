import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import AxiosService from '../../utils/ApiService';
import { useNavigate } from 'react-router-dom';
import useLogout from '../../hooks/useLogout';
import { Card } from 'react-bootstrap';


function payment() {
    let orderData = useSelector((state) => state.orderData)
    const location = useLocation();
    const receivedData = location.state?.data || 'Default Data';
    let navigate = useNavigate()
    let logout = useLogout()

    useEffect(() => {
        if (!orderData || !orderData[0]) {
            // Handle the case when orderData or orderData[0] is not defined
            navigate(-1);
        }
    }, [orderData, navigate]);


    const addOrderedData = async () => {
        try {
            if (orderData && orderData[0]) {
                let res = await AxiosService.post("/order/orderedFoods", {
                    foodId: orderData[0]._id,
                    foodOrdered: orderData[0].food,
                    price: orderData[0].price,
                    address: receivedData,
                })
                if (res.status === 201) {
                    console.log("Order placed successfully")
                    setTimeout(() => {
                        window.location.replace("/");
                        window.history.go(-(window.history.length - 2));
                        // navigate("/")
                    }, 3500)
                }
            }
        } catch (error) {
            if (error.response.status === 401) {
                logout()
                navigate("/")
            }
           
            console.log(error.response)
        }
    }

    const handlePlaceOrder = () => {
        addOrderedData()
        navigate("/order-placed", { state: { data: receivedData } })
    }

    return <>
        <div className="container my-4">
            <div className="row g-5">
                <div className="">
                    <h4 className="mb-3">Payment Options</h4>
                    <div className=" order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Your Order Details</span>
                            <span className="badge bg-primary rounded-pill">3</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {orderData && orderData[0] && (
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">Deliver to: {receivedData} </h6>
                                        <h6 className="my-0">Order: {orderData[0].food} </h6>
                                        <h6 className="my-0">Price: {orderData[0].price} </h6>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>

                    <form className="needs-validation" novalidate="">
                        {  /*
                           ? Removed temporarily may be required after
                             <div className="row g-3">
                            <div className="col-sm-6">
                                <label for="firstName" className="form-label">First name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label for="lastName" className="form-label">Last name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>

                            <div className="col-12">
                                <label for="username" className="form-label">Username</label>
                                <div className="input-group has-validation">
                                    <span className="input-group-text">@</span>
                                    <input type="text" className="form-control" id="username" placeholder="Username" required="" />
                                    <div className="invalid-feedback">
                                        Your username is required.
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <label for="email" className="form-label">Email <span className="text-body-secondary">(Optional)</span></label>
                                <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>

                            <div className="col-12">
                                <label for="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                                <div className="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                            </div>

                            <div className="col-12">
                                <label for="address2" className="form-label">Address 2 <span className="text-body-secondary">(Optional)</span></label>
                                <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                            </div>

                            <div className="col-md-5">
                                <label for="country" className="form-label">Country</label>
                                <select className="form-select" id="country" required="">
                                    <option value="">Choose...</option>
                                    <option>United States</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select a valid country.
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label for="state" className="form-label">State</label>
                                <select className="form-select" id="state" required="">
                                    <option value="">Choose...</option>
                                    <option>California</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please provide a valid state.
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label for="zip" className="form-label">Zip</label>
                                <input type="text" className="form-control" id="zip" placeholder="" required="" />
                                <div className="invalid-feedback">
                                    Zip code required.
                                </div>
                            </div>
                        </div>

                        <hr className="my-4" />

                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="same-address" />
                            <label className="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
                        </div>

                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="save-info" />
                            <label className="form-check-label" for="save-info">Save this information for next time</label>
                        </div>

                        <hr className="my-4" /> */}

                        {/*
                          ? Working on this...
                         <h4 className="mb-3">Payment</h4>

                        <div className="my-3">
                            <div className="form-check">
                                <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required="" />
                                <label className="form-check-label" for="credit">Credit card</label>
                            </div>
                            <div className="form-check">
                                <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                <label className="form-check-label" for="debit">Debit card</label>
                            </div>
                            <div className="form-check">
                                <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                <label className="form-check-label" for="paypal">PayPal</label>
                            </div>
                            <div className="form-check">
                                <input id="paytm" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                <label className="form-check-label" for="paytm">PayPal</label>
                            </div>
                        </div>

                        <div className="row gy-3">
                            <div className="col-md-6">
                                <label for="cc-name" className="form-label">Name on card</label>
                                <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                                <small className="text-body-secondary">Full name as displayed on card</small>
                                <div className="invalid-feedback">
                                    Name on card is required
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label for="cc-number" className="form-label">Credit card number</label>
                                <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                                <div className="invalid-feedback">
                                    Credit card number is required
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label for="cc-expiration" className="form-label">Expiration</label>
                                <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                                <div className="invalid-feedback">
                                    Expiration date required
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label for="cc-cvv" className="form-label">CVV</label>
                                <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                                <div className="invalid-feedback">
                                    Security code required
                                </div>
                            </div>
                        </div>

                        <hr className="my-4" /> */}



                        {/* Temporary Card */}
                        <Card style={{ width: '100%' }} className='mb-3'>
                            <Card.Body>
                                <Card.Text>
                                    Payment Gateway page is in process of development. Click "Place Order", to place your order without payment.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <button className="w-100 btn btn-primary btn-lg" type="button" onClick={() => handlePlaceOrder()}>Place Order</button>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default payment