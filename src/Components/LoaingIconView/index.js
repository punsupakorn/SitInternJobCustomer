import React from 'react'
import loadingIcon from '../../Assets/loading-icon.gif'
import style from './loding-icon-view.module.css'

function LoadingIconView() {
    return (
        <div className={style.loading_view}>
            <img src={loadingIcon} alt="" />
        </div>
    )
}

export default LoadingIconView