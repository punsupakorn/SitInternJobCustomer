import React from 'react'
import style from './contact.module.css'
import { useState, useEffect } from 'react'

function ContactUsPage() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 800)
    }, [])

    if (loading) {
        return (<>loading...</>)
    }
    return (
        <div>
            ศูนย์วิจัยงานบริการอิเล็กทรอนิกส์ คณะเทคโนโลยีสารสนเทศ ชั้น 2
            มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
            ถนนประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพฯ 10140
            Email : esrc@sit.kmutt.ac.th
            Tel : 02-470-9881, 02-470-9886
            URL: https://webapp3.sit.kmutt.ac.th/esrc
        </div>
    )
}

export default ContactUsPage