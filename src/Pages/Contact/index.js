import React from 'react'
// import style from './contact.module.css'
import { useState, useEffect } from 'react'

function ContactUsPage() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadingTimeout()
    }, [])

    function loadingTimeout() {
        setTimeout(() => {
            setLoading(false)
        }, 800)
    }

    return (
        <>
            {
                loading
                    ? <>Loading....</>
                    : <>
                        <h1>Contact us</h1>
                        <div>
                            School of Information Technology,
                            King Mongkut's University of Technology Thonburi,
                            126 Pracha-U-Thit Rd., Bangmod, Thungkru, Bangkok 10140 , Thailand
                            Tel. 0-2470-9849 , 0-2470-9850
                            Fax 0-2872-7145
                        </div>
                    </>
            }
        </>
    )
}

export default ContactUsPage