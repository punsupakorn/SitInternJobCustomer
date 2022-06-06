import React from 'react'
// import style from './information.module.css'
import { useState, useEffect } from 'react'

function InformationPage() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 800)
    }, [])

    return (
        <>
            {
                loading
                    ?
                    <>Loading....</>
                    :
                    <div>InformationPage</div>
            }
        </>
    )
}

export default InformationPage