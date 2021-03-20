import React from 'react'
import c from './Info.module.scss'

const Info = () => {
    return (
        <div className={c.info}>
            <img className={c.ava} src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg" alt="ava"/>
            <div>
                <h2 className={c.name}>David Hill</h2>
                <h4 className={c.status}>online</h4>
            </div>
        </div>
    )
}

export default Info