import React from 'react'
import style from './contact.module.css'
import { useState, useEffect } from 'react'
import sitImg from '../../Assets/sit-banner2-logo.png'
import LoadingIconView from '../../Components/LoaingIconView'

function ContactUsPage() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadingTimeout()
    }, [])

    function loadingTimeout() {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

    return (
        <>
            {
                loading
                    ? <><LoadingIconView /></>
                    : <>
                        <h1>Contact Us</h1>
                        <img className={style.logo} src={sitImg} alt="" />
                        <div>
                            School of Information Technology ,
                            King Mongkut's University of Technology Thonburi
                        </div>
                        <div>
                            Address : 126 Pracha-U-Thit Rd., Bangmod, Thungkru, Bangkok 10140 , Thailand
                        </div>
                        <div>
                            Contact : Tel. 0-2470-9849 , 0-2470-9850
                            Fax 0-2872-7145
                        </div>

                    </>
            }
        </>
    )
}

export default ContactUsPage