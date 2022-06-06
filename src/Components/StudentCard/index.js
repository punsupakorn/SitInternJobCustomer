import React from 'react'
import style from './student-card.module.css'
import { MAIN_ROUTE_PATH } from '../../Constants/path'
import { useNavigate } from 'react-router-dom'

function StudentCard() {
    const navigate = useNavigate()
    const fakeImg = 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'

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
}

export default StudentCard