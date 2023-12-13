import React, { useEffect, useState } from 'react'
import AxiosService from '../../utils/ApiService';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function CheckoutAddressCard() {

    let navigate = useNavigate()
    let userDataString = sessionStorage.getItem('userData');
    let userDataObject = JSON.parse(userDataString);
    console.log(userDataObject.name);

    let [inp, setInp] = useState(false)
    let [address, setAddress] = useState("");
    let [selectedAddress, setSelectedAddress] = useState([])
    let [sendToAddress, setSendToAddress] = useState(false)
    let [addressSelectDone, setAddressSelectDone] = useState("")

    const getAddress = async () => {
        try {
            let res = await AxiosService.get("/user/getUsers")
            if (res.status === 200) {
                console.log(res.data)
                let selectedGuy = res.data.users.find((ele) => ele.name === userDataObject.name)
                console.log(selectedGuy.address)
                setSelectedAddress(selectedGuy.address)
            }
        } catch (error) {
            console.log(error)
        }
    }

    let AddInp = () => {
        setInp(true)
    }


    let handleNewAddress = async () => {
        try {
            if (address) {
                let res = await AxiosService.put("/user/addAddress", {
                    address
                })
                if (res.status === 200) {
                    setInp(false)
                    getAddress()
                }
            }
            else {
                setInp(false)
            }
        } catch (error) {
            if (error.response.status === 401) {
                logout()
                dispatch(toggle())
                setDelpickError("Login to get food Delivered")
            }
        }
    }

    useEffect(() => {
        getAddress()
    }, [])

    const deliverToAddress = (data) => {
        setSendToAddress(true)
        setAddressSelectDone(data.data)
        console.log(data)
    }

    const EachAddress = (props) => {
        return <>
            <div className="card ms-5 mb-3" style={{ maxWidth: "18rem", minWidth: "10rem" }}>
                <div className="card-body">
                    {/* <h6 className="card-title">{`Address ${props.data.length - 1}`}</h6> */}
                    <h6 className="card-subtitle mb-2 text-body-secondary">{props.data}</h6>
                    <a href="#" className="btn btn-warning mt-3" onClick={() => deliverToAddress(props)}>Deliver Here</a>
                </div>
            </div>
        </>
    }

    return <>
        <>
            <div className="card">
                <div className="card-body" style={{ textAlign: 'left' }}>
                    <h5 className="card-title" style={{ textAlign: 'left' }}>Select delivery address</h5>
                    <p className="card-text" style={{ textAlign: 'left' }}>Your saved Addresses are listed below</p>
                    {
                        sendToAddress === true ?
                            <>
                                <div className="card ">
                                    <div className="card-body d-flex justify-content-between" style={{ textAlign: 'left' }}>
                                        <p><strong>Deliver to:</strong><br /><span></span></p>
                                        <a onClick={() => setSendToAddress(false)}>Change</a>
                                    </div>
                                    <p>{addressSelectDone}</p>
                                </div>
                            </>
                            :
                            <>
                                <div className="row row-cols-1 row-cols-md-2">
                                    {
                                        selectedAddress.map((e, i) => {
                                            return <EachAddress data={e} key={i} />
                                        })
                                    }
                                    <div className="card ms-5 mb-3" style={{ width: "18rem" }}>
                                        <div className="card-body">
                                            <div className='d-flex justify-content-between'>
                                                <h6 className="card-title">Add New Address</h6>
                                                {
                                                    inp ? <div style={{ color: "red", cursor: "pointer" }} onClick={() => setInp(false)}>X</div> : ""
                                                }
                                            </div>
                                            <a className="btn btn-white mt-3" style={{ border: "1.5px solid gold" }} onClick={() => AddInp()}>Add New</a>
                                            {
                                                inp ?
                                                    <div className='d-flex'>
                                                        <input type="text" className="form-control pt-3 search-input" placeholder="Enter your Address" aria-label="Search" style={{ width: "80%" }} onChange={(e) => setAddress(e.target.value)} />
                                                        <button type="submit" className="btn btn-outline-warning search-button fs-6" onClick={() => handleNewAddress()} style={{ width: "25%" }}>Add</button>
                                                    </div>
                                                    : ""
                                            }
                                        </div>
                                    </div>
                                </div>

                            </>
                    }

                </div>
            </div>
            <>
                {
                    sendToAddress === true ?
                        <>
                            <div className="card mt-4">
                                <div className="card-body">
                                    <h4 className="card-title fw-bold pb-3" style={{ textAlign: 'left', color: "green" }} >Payment</h4>
                                    <Button style={{ width: "100%" }} onClick={() => { navigate("/payment", { state: { data: addressSelectDone } }) }}>Proceed to Pay</Button>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className="card mt-4">
                                <div className="card-body">
                                    <h4 className="card-title" style={{ textAlign: 'left', color: "gray" }} >Payment</h4>
                                </div>
                            </div>
                        </>
                }

            </>
        </>

    </>

}

export default CheckoutAddressCard