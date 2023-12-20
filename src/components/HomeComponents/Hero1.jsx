import React, { useEffect, useState } from 'react'
import BananaLeaf from '../../assets/images/hero/banana leaf.png'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import AxiosService from '../../utils/ApiService';
import useLogout from '../../hooks/useLogout';
import { useDispatch } from 'react-redux';
import { toggle } from '../../redux/tokenSlice'
import { useSelector } from 'react-redux'

function Hero1() {
  let navigate = useNavigate()
  let [page, setPage] = useState(0);
  let [address, setAddress] = useState("");
  let [delpickError, setDelpickError] = useState("")
  let [selectedAddress, setSelectedAddress] = useState([])
  let [empty, setEmpty] = useState("")
  let [error, setError] = useState("")
  

  let logout = useLogout()
  let dispatch = useDispatch()

  let token = useSelector((state)=>state.token)


  let handleFindFood = async () => {
    try {
      if(token){
        if (address) {
          let userDataString = sessionStorage.getItem('userData');
          let userDataObject = JSON.parse(userDataString);
          let resadd = await AxiosService.get("/user/getUsers")
          if (resadd.status === 200) {
            let selectedGuy = resadd.data.users.find((ele) => ele.name === userDataObject.name)
            let findAdd = selectedGuy.address.find((ele)=>address===ele)
            if(!findAdd){
              let res = await AxiosService.put("/user/addAddress", {
                address
              })
              if (res.status === 200) {
                navigate('/findfood')
              }
            }
            else{
              navigate('/findfood')
            }
          }
        }
        else {
          setDelpickError("Add address to deliver")
        }
      }
      else{
        setDelpickError("Please Login first")
      }
    } catch (error) {
      if (error.response.status === 401) {
        logout()
        dispatch(toggle())
        setDelpickError("Login to get food Delivered")
      }
    }
  }

  let getAddress = async () =>{
    try {
      if(token){
        let userDataString = sessionStorage.getItem('userData');
        let userDataObject = JSON.parse(userDataString);

        let res = await AxiosService.get("/user/getUsers")
        if (res.status === 200) {
          let selectedGuy = res.data.users.find((ele) => ele.name === userDataObject.name)
          console.log(selectedGuy.address.length)
          setSelectedAddress(selectedGuy.address)
          setAddress(selectedGuy.address[selectedGuy.address.length-1])
      }
      }
    } catch (error) {
      setError("Error Occured, Address Cannot be fetched")
    }
  }

  let inputChange = (e)=>{
    setAddress(e.target.value)
    setEmpty(e.target.value)
  }

  useEffect(()=>{
    getAddress()
  },[])

  return <>
    <div className="container-fluid col-xxl-8 px-4 bg-warning hero">
      <div className="row flex-lg-row-reverse align-items-center py-2">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src={BananaLeaf} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Look at your fav Meals</h1>
          <p className="lead">Within a few clicks, find meals that are accessible near you</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <div className="col-sm-10 mb-3 mb-sm-0">
              <div className="card hero-card">
                <div className="card-body">
                  <button type="button" className={`btn delpikbtn btn-lg px-4 me-md-2 ${page === 0 ? `activated` : ``}`} onClick={() => { setPage(0) }}>Delivery</button>
                  {/* <button type="submit" className={`btn delpikbtn btn-lg px-4  ${page === 1 ? `activated` : ``}`} onClick={() => { setPage(1) }}>Pickup</button> */}
                  <hr />
                  {
                    page === 0 ?
                      <div>
                        <input type="text" value={token ? address : empty} className="form-control me-2 d-inline search-input" placeholder="Enter your Address" aria-label="Search" style={{ width: "60%" }} onChange={(e) => inputChange(e)} />
                        <button type="submit" className="btn btn-outline-warning search-button fw-bold" onClick={() => handleFindFood()}>Find Food</button>
                      </div> :
                      {/* 
                      Add pickup tab if time permits
                      <div className='d-flex gap-3'>
                        <Form.Select aria-label="Default select example" style={{ width: "70%" }} className='hero-select-input'>
                          <option>Select the branch to Pickup</option>
                          <option value="1">Tambaram</option>
                          <option value="2">T.Nagar</option>
                          <option value="3">Adyar</option>
                          <option value="3">Ashok Nagar</option>
                        </Form.Select>
                        <button type="button" className="btn btn-outline-warning search-button fw-bold">Find Food</button>
                      </div> */}
                  }
                  {
                    <p style={{ color: "red", paddingTop: "4px", fontFamily: "Times New Roman", fontSize: "14px" }}>{delpickError}{error}</p>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Hero1