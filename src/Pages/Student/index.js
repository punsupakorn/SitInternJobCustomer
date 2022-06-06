import React from 'react'
import style from './student.module.css'
import { useState, useEffect } from 'react'
import LoadingIconView from '../../Components/LoaingIconView'
import StudentCard from '../../Components/StudentCard'

function StudentPage() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    return (
        <>
            {
                loading
                    ? <><LoadingIconView /></>
                    : <>
                        <h1>Student</h1>
                        <div className={style.container}>
                            {
                                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(x => {
                                    return (
                                        <StudentCard />
                                    )
                                })
                            }
                        </div>
                    </>
            }
        </>
    )
}

export default StudentPage