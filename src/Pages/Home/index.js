import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import style from './home.module.css'
import sitLogo from '../../Assets/SIT-LOGO.png'
import { MAIN_ROUTE_PATH } from '../../Constants/path'
import { useState } from 'react'
import ErrorAlertModal from '../../Components/ErrorAlertModal'

function HomePage() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errorMessage, setErrorMessage] = useState('')
  const [openAlertModal, setOpenAlertModal] = useState(false)

  async function login() {

    if (!email && !password) {
      setOpenAlertModal(true)
      setErrorMessage('Please Enter Your Email And Password.')
      return
    }

    if (!email) {
      setOpenAlertModal(true)
      setErrorMessage('Please Enter Your Email.')
      return
    }

    if (!password) {
      setOpenAlertModal(true)
      setErrorMessage('Please Enter Your Password.')
      return
    }
  }

  return (
    <div className={style.grid}>
      <div className={style.header}>
        <div className={style.bar}>
          <div className={style.logo_panel}>
            <img src={sitLogo} alt='' onClick={() => navigate(MAIN_ROUTE_PATH.INFORMAION)} />
          </div>
          <div className={style.option_button_panel}>
            <div className={style.option_button} onClick={() => navigate(MAIN_ROUTE_PATH.INFORMAION)}><p>Information</p></div>
            {/* <div className={style.option_button}><p>For Student</p></div>
            <div className={style.option_button}><p>For Company</p></div> */}
            <div className={style.option_button} onClick={() => navigate(MAIN_ROUTE_PATH.CONTACT)}><p>Contact Us</p></div>
          </div>
          <div className={style.login_panel}>
            <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            <input placeholder='Password' type={'password'} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={login}>LOG IN</button>
            <button varaint={'grey'}>REGISTER</button>
            <p>forgot password?</p>
          </div>
        </div>
      </div>
      <div className={style.content}>
        <div className='wrapper'>
          <Outlet />
        </div>
      </div>
      <ErrorAlertModal description={errorMessage} open={openAlertModal} onClose={() => setOpenAlertModal(false)} />
    </div>
  )
}

export default HomePage