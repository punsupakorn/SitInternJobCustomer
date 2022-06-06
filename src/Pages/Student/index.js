import React from 'react'
import style from './student.module.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MAIN_ROUTE_PATH } from '../../Constants/path'
import LoadingIconView from '../../Components/LoaingIconView'

function StudentPage() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    const fakeImg = 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
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
                                        <div className={style.card} onClick={() => navigate(MAIN_ROUTE_PATH.STUDENT_DETAIL.replace(':id', 111))}>
                                            <img src={fakeImg} alt="" />
                                            <div className={style.profile}>
                                                <div><p>ชื่อ : ศุภากร สองห้อง</p></div>
                                                <div><p>ชั้นปีที่ : 4</p></div>
                                                <div><p>ความสนใจ : Software Tester</p></div>
                                            </div>
                                        </div>
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