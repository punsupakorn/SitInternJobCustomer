import React from 'react'
// import style from './information.module.css'
import { useState, useEffect } from 'react'
import LoadingIconView from '../../Components/LoaingIconView'

function InformationPage() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <>
            {
                loading
                    ?
                    <><LoadingIconView /></>
                    :
                    <>
                        <h1>Information</h1>
                    </>
            }
        </>
    )
}

export default InformationPage