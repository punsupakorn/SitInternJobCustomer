import React from 'react'
import style from './student-card.module.css'


function StudentCard({ action }) {
    const fakeImg = 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'

    return (
        <div className={style.card} onClick={action}>
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