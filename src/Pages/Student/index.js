import React from 'react'
import style from './student.module.css'
import { useState, useEffect } from 'react'
import LoadingIconView from '../../Components/LoaingIconView'
import StudentCard from '../../Components/StudentCard'
import { MAIN_ROUTE_PATH } from '../../Constants/path'
import { useNavigate } from 'react-router-dom'

function StudentPage() {
    const navigate = useNavigate()
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
                        <div className={style.search_card}>
                        </div>
                        <div className={style.container}>
                            {
                                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(x => {
                                    return (
                                        <StudentCard
                                            action={() => navigate(MAIN_ROUTE_PATH.STUDENT_DETAIL.replace(':id', 111))}
                                        />
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