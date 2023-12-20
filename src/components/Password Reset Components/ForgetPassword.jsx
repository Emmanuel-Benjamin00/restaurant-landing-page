import React, { useState } from 'react'
import AxiosService from '../../utils/ApiService';
import { useNavigate } from 'react-router-dom';



function ForgetPassword() {

    let navigate = useNavigate()
    let [email, setEmail] = useState("")
    let [messageColor, setMessageColor] = useState("black")
    let [messagetext, setMessagetext] = useState("")

    let [resetting, setResetting] = useState(false)
    let [resettingWord, setResettingWord] = useState("Forget Password")

    let validateEmail = async (e) => {
        const form = document.getElementById('email-input');
        const button = document.getElementById('forgot-button');

        e.preventDefault()
        try {
            setResetting(true)
            setResettingWord("Please Wait")
            let res = await AxiosService.post('/user/forgotPassword', {
                email
            })
            if (res.status === 201) {
                form.blur()
                form.style.color = "gray"
                form.style.pointerEvents = 'none';
                button.disabled = true;
                setMessageColor("green")
                setMessagetext(`Close this tab & Check your registered mail ID, Click the link in the mail`)
                console.log(res.status)
            }
        }
        catch (error) {
            form.style.pointerEvents = 'auto';
            button.disabled = false;
            setMessageColor("red")
            setMessagetext("User Does not exist")
            console.log(error.response)
            setResettingWord("Forgot Password")
        }
        finally {
            setResettingWord("Forget password")
        }
    }


    return (
        <>
            <div className='d-flex align-items-center justify-content-center flex-column' style={{ height: '100vh' }} >
                <h1 className='fs-2 mb-3 warning form-box'>Forgot Password</h1>
                <form className='col-md-3 col-xxl-5 form-box mb-3'>
                    <div className="mb-3" id="formBasicEmail">
                        <label htmlFor="email" className='my-2 ms-1'>Email address</label>
                        <input type="email" className="form-control mb-2" id="email-input" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                        <small className="mt-5" style={{ color: messageColor }}>{messagetext}</small>
                    </div>
                    <button className="btn btn-primary" id="forgot-button" type="submit" style={{ width: '100%' }} onClick={(e) => validateEmail(e)} disabled={resetting}>{resettingWord}</button>
                </form>
                <br />
                {
                    resetting ? " " : <div className='mt-2 text-primary fs-6 pointer' onClick={() => navigate("/")}>Back to Login Page</div>
                }
            </div>

        </>
    );
}

export default ForgetPassword