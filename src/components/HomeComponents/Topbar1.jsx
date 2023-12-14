import React, { useEffect, useState } from 'react'
import LocactionImg from "../../assets/images/header/location symbol.png"
import { useNavigate } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button, Image, Dropdown } from 'react-bootstrap';
import useLogout from '../../hooks/useLogout';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from "../../redux/tokenSlice"


function Topbar1(props) {
    let userDataString = sessionStorage.getItem('userData');
    let userDataObject = JSON.parse(userDataString);

    let token = useSelector((state) => state.token)
    let navigate = useNavigate()

    let [autoSignout, setAutoSignout] = useState(false)
    console.log(autoSignout)
    console.log(props)

    let logOut = useLogout()
    let dispatch = useDispatch()

    useEffect(()=>{
        setAutoSignout(props.data)
    },[])
    
    const handleLogOut = () => {
        logOut()
        // setToken(null);
        dispatch(toggle())
        console.log(autoSignout)
        if(autoSignout===true){
            navigate("/")
        }
    };




    const LoginIcon = () => {
        const storedUserData = sessionStorage.getItem('userData');
        const initialUser = storedUserData ? JSON.parse(storedUserData) : null;
        const [user, setUser] = useState(initialUser);
        console.log(user.name)
        return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Dropdown align="end">
                    <Dropdown.Toggle variant="link" id="dropdown-basic" drop="down" className="custom-dropdown-toggle">
                        <Image src="https://e7.pngegg.com/pngimages/815/325/png-clipart-computer-icons-user-fox-moving-and-storage-youtube-login-others-silhouette-oval-thumbnail.png" alt="mdo" height="40" className="rounded-circle" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {
                            userDataObject.role==="admin" ?
                            <> <Dropdown.Item onClick={()=>navigate("/edit")}>Edit Website</Dropdown.Item> 
                            <Dropdown.Item onClick={handleLogOut}>Sign out</Dropdown.Item></>  
                            :
                            <Dropdown.Item onClick={handleLogOut}>Sign out</Dropdown.Item>
                        }
                    </Dropdown.Menu>
                </Dropdown>
                <h6 style={{ margin: '0' }}>{user.name.split(" ")[0]}</h6>
            </div>
        );

    }
    return <>
        <div className='container-fluid position-static' id="home">
            <header className="d-flex flex-wrap align-items-center justify-content-center pb-2 justify-content-md-between border-bottom">
                <h1 className="qwigley text-warning ps-md-4" onClick={() => navigate("/")} style={{ cursor: "pointer" }} >Hot Meals</h1>
                <div className="col-10 text-center col-md-6 col-lg-auto mb-2 justify-content-center mb-md-0 topbar-middle-font">
                    <img src={LocactionImg} alt="" />&nbsp;
                    <span className="text-secondary open-sans  lh-140per">Main Branch</span>&nbsp;
                    <span className="text-secondary fw-bold open-sans lh-100per">Ashok Nagar, Chennai-600013</span>
                </div>
                <div className="col-md-3 text-end pe-md-4 d-flex  ">
                    <input type="search" className="form-control me-2 d-inline search-input" placeholder="Search Food" aria-label="Search" style={{ width: "60%" }} />
                    {
                        token ?
                            <LoginIcon />
                            :
                            <><button type="button" className="btn btn-outline-warning search-button fw-bold me-2" onClick={() => navigate("/login")}>Login
                            </button> <button type="button" className="btn btn-outline-warning search-button fw-bold ms-1" onClick={() => navigate("/signup")}>Signup</button></>
                    }
                </div>
            </header>
        </div>
    </>
}

export default Topbar1