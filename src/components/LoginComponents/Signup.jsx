import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AxiosService from '../../utils/ApiService';
import "../../../styles/signup.css"
import {useDispatch } from 'react-redux';
import {toggle} from "../../redux/tokenSlice"

function Signup() {
  let [name, setName] = useState("")
  let [mobile, setMobile] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [address, setAddress] = useState("")
  let [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false);
  let dispatch = useDispatch()


  let createUser = async (e) => {
    e.preventDefault()

    if (!name || !mobile || !email || !password || !address) {
      setError("Please fill in all fields");
      return;
    }
    
    try {
      setIsSubmitting(true);
      let res = await AxiosService.post('/user/signup', {
        name,
        mobile,
        email,
        password,
        address
      })
      if (res.status === 201) {
        let logres = await AxiosService.post('/user/login', {
          email,
          password
        })
        if (logres.status === 200) {
          sessionStorage.setItem('token', logres.data.token)
          sessionStorage.setItem('userData', JSON.stringify(logres.data.userData))
          navigate('/')
          dispatch(toggle())
        }
      }
    }
    catch (error) {
      console.log(error.response)
      if (error.response && error.response.status === 400) {
        setError("User Already Exists");
      } else {
        setError("An error occurred");
      }
    }
    finally {
      setIsSubmitting(false);
    }
  }


  let navigate = useNavigate()

  return <>
    <div className='signup-section'>
      <Container>
        <div className='d-flex flex-column justify-content-center align-items-center '>
          <h3>SignUp</h3>
          <Form className='signup-form'>
            <FormGroup className="mb-3">
              <FormLabel>Full Name</FormLabel>
              <FormControl type="text" id="fullName" aria-describedby="fullName" onChange={(e) => setName(e.target.value)}  required />
            </FormGroup>

            <FormGroup className="mb-3">
              <FormLabel>Mobile</FormLabel>
              <FormControl type="number" id="mobile" aria-describedby="mobile" onChange={(e) => setMobile(e.target.value)} required  />
            </FormGroup>

            <FormGroup className="mb-3">
              <FormLabel>Email address</FormLabel>
              <FormControl type="email" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}  required />
            </FormGroup>

            <FormGroup className="mb-3">
              <FormLabel>Password</FormLabel>
              <FormControl type="password" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)}  required />
            </FormGroup>

            <FormGroup className="mb-3">
              <FormLabel>Address</FormLabel>
              <FormControl type="text" id="Address" onChange={(e) => setAddress(e.target.value)}  required />
            </FormGroup>

            {/* <FormGroup className="mb-3">
            <FormLabel>Role</FormLabel>
            <FormControl type="text" id="role" value={role} disabled />
          </FormGroup> */}

            <div id="signup-error" className='text-danger'>{error}</div>
            <Button variant="primary" type="button" className='button-login' onClick={(e) => createUser(e)} disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </Form>
          <div className='mt-2 text-primary fs-6 pointer' onClick={() => navigate("/")}>Back to Home Page</div>
        </div>
      </Container>
    </div>
  </>
}

export default Signup