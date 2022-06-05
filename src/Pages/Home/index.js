import React from 'react'
import style from './home.module.css'
import sitLogo from '../../Assets/SIT-LOGO.png'

function HomePage() {
  return (
    <div className={style.grid}>
      <div className={style.header}>
        <div className={style.bar}>
          <div className={style.logo_panel}>
            <img src={sitLogo} alt='' />
          </div>
          <div className={style.button_panel}>
            <div className={style.button}><p>Information</p></div>
            <div className={style.button}><p>For Student</p></div>
            <div className={style.button}><p>For Company</p></div>
            <div className={style.button}><p>Contact us</p></div>
          </div>
          <div className={style.login_panel}>
            <input placeholder='Email' />
            <input placeholder='Password' type={'password'} />
            <button>LOG IN</button>
          </div>
        </div>
      </div>
      <div className={style.content}>
        Content
      </div>
    </div>

  )
}

export default HomePage