import React from 'react'
import style from './error-alert-modal.module.css'

function ErrorAlertModal({ description, onClose, open }) {

    if (!open) {
        return (<></>)
    }
    return (
        <>
            <div onClick={onClose} className={style.backdrop}>
            </div>
            <div className={style.content}>
                <div className={style.card}>
                    <h2>Error !</h2>
                    <p className={style.desc}>{description}</p>
                    <button variant={'grey'} onClick={onClose}>Back</button>
                </div>
            </div>
        </>
    )
}

export default ErrorAlertModal