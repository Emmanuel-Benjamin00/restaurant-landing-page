import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import AxiosService from '../../utils/ApiService';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
  let [pass1, setpass1] = useState("")
  let [pass2, setpass2] = useState("")

  let [messageColor, setMessageColor] = useState("black")
  let [messagetext, setMessagetext] = useState("")

  let [resetting, setResetting] = useState(false)
  let [resettingWord, setResettingWord] = useState("Reset Password")

  const navigate = useNavigate()

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search)
  const token = searchParams.get('token');
  const email = searchParams.get('email')

  async function validateToken() {
    try {
      let res = await AxiosService.get('/user/getUsers')
      console.log(res)
      const reqUser = res.data.users.find(user => user.email === email)
      console.log(reqUser)
      if (reqUser) {
        const tokenCheck = reqUser.randomString === token
        if (!tokenCheck) {
          navigate('/error')
        }
      }
    }
    catch (error) {
      console.log(error)
      setResettingWord("Reset Password")
    }
    finally {
      setResettingWord("Reset password")
    }
  }


  let resetSubmit = async (e) => {
    const pass1inp = document.getElementById('password1');
    const pass2inp = document.getElementById('password2');
    const button = document.getElementById('reset-button');


    e.preventDefault()
    try {
      setResetting(true)
      setResettingWord("Please Wait")
      let res = await AxiosService.put('/user/resetPassword', {
        email,
        pass1,
        pass2
      })
      if (res.status === 200) {
        pass1inp.blur()
        pass2inp.blur()
        pass1inp.style.color = "gray"
        pass1inp.style.pointerEvents = 'none';
        pass2inp.style.color = "gray"
        pass2inp.style.pointerEvents = 'none';
        button.disabled = true;
        setMessageColor("green")
        setMessagetext("Password updated successfully")
        navigate("/")
      }
    }
    catch (error) {
      pass1inp.style.pointerEvents = 'auto';
      pass2inp.style.pointerEvents = 'auto';
      button.disabled = false;
      console.log(error)
      setMessageColor("red")
      setMessagetext("Passwords not matching or the input fields are empty.")
    }
  }

  useEffect(() => {
    validateToken()
  }, [])

  return (
    <>
      <div className='d-flex align-items-center justify-content-center flex-column bg-image-outpages' style={{ height: '100vh' }} >
        <h1 className='fs-2 mb-3 form-box'>Reset Password</h1>
        <form className='col-md-3 col-xxl-5 form-box'>
          <div className="mb-3" id="formBasicPassword1">
            <label htmlFor="password1" className='my-2 ms-1'>Password</label>
            <input type="password" className="form-control" id="password1" placeholder="Password" onChange={(e) => setpass1(e.target.value)} />
          </div>

          <div className="mb-3" id="formBasicPassword2">
            <label htmlFor="password2" className='my-2 ms-1'>Confirm Password</label>
            <input type="password" className="form-control" id="password2" placeholder="Confirm Password" onChange={(e) => setpass2(e.target.value)} />
          </div>

          <small className="form-text" id="message" style={{ color: messageColor }}>{messagetext}</small>

          <button className="btn btn-primary mt-2" type="submit" id="reset-button" style={{ width: '100%' }} onClick={(e) => resetSubmit(e)} disabled={resetting}>{resettingWord}</button>
        </form><br />
        {/* <p style={{ width: '30vw' }}> After clicking the Reset password button this page  takes few seconds to process. Since the backend is deployed in render platform, it takes some time. Please wait until it works.</p> */}
      </div>
    </>
  )
}

export default ResetPassword