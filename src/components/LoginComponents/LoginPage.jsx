import React, { useState } from 'react'
import { Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import AxiosService from '../../utils/ApiService';
import { useNavigate } from 'react-router-dom';
import "../../../styles/login.css"
import { useDispatch } from 'react-redux';
import { toggle } from "../../redux/tokenSlice"
import { change } from '../../redux/orderDataSlice';
import { useLocation } from 'react-router-dom'
import googleButton from "../../assets/images/Login/Google-signin-button.png"


function LoginPage() {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [loginError, setLoginError] = useState("")
    let navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false);
    let dispatch = useDispatch()

    const location = useLocation();
    const receivedData = location.state?.OrderedFoodData || null;
    // const findFoodData = location.state.findFoods
    console.log(receivedData)

    let handleLogin = async (e) => {
        e.preventDefault()
        try {
            setIsSubmitting(true);
            let res = await AxiosService.post('/user/login', {
                email,
                password
            })
            if (res.status === 200) {
                sessionStorage.setItem('token', res.data.token)
                sessionStorage.setItem('userData', JSON.stringify(res.data.userData))
                if (!receivedData) {
                    navigate('/', { replace: true })
                    dispatch(toggle())
                }
                else {
                    dispatch(change(receivedData))
                    navigate("/checkout", { replace: true })
                    dispatch(toggle())
                }
            }
        } catch (error) {
            setLoginError("Wrong Credentials")
        }
        finally {
            setIsSubmitting(false);
        }
    }

    // const OAuthNavigate = (url) =>{
    //     window.location.href = url
    // }

    // const auth = async()=>{
    //     const response = await fetch("http://localhost:8000/request",
    //     {method:"post"});
    //     const data = await response.json();
    //     OAuthNavigate(data.url);
    // }
    return <>
        <div className='login-section'>

            <Container className='login-form-cont'>
                <div className='d-flex  justify-content-center align-items-center'>
                    <div className='login-form d-flex flex-column align-items-center'>
                        <h1>Login</h1>
                        <Form className='login-act-form'>
                            <FormGroup className="mb-3">
                                <FormLabel>Email address</FormLabel>
                                <FormControl type="email" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={((e) => setEmail(e.target.value))} />
                            </FormGroup>

                            <FormGroup className="mb-3">
                                <FormLabel>Password</FormLabel>
                                <FormControl type="password" id="exampleInputPassword1" onChange={((e) => setPassword(e.target.value))} />
                                <div id='error' className='text-danger'>{loginError}</div>
                            </FormGroup>

                            <Button variant="primary" className='button-login' type='submit' onClick={(e) => handleLogin(e)} disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </Button>
                        </Form>
                        <div className='pointer' onClick={() => navigate("/forgotpassword")}>Forgot Password</div>
                        <div className='mt-4 text-primary fs-5 pointer' onClick={() => navigate("/signup")}>New User? SignUp</div>
                    </div>
                </div>
            </Container>
            {/* <>
                <h3>Google OAuth</h3>
                <button type="button" onClick={()=>auth()}>
                    <img src={googleButton} alt=""/>
                </button>
            </> */}
        </div>
    </>
}

export default LoginPage