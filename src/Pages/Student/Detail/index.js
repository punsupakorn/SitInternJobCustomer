import React from 'react'
import style from './student-detail.module.css'
import LoadingIconView from '../../../Components/LoaingIconView'
import { useState, useEffect } from 'react'

function StudentDetail() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1200);
    }, [])

    return (
        <>
            {
                loading
                    ? <><LoadingIconView /></>
                    : <>
                        <div>StudentDetail</div>
                    </>
            }
        </>
    )
}

export default StudentDetail