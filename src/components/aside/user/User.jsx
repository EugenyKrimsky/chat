import React from 'react'
import Info from './info/Info'
import c from './User.module.scss'

const User = (props) => {
    return (
        <div className={c.user}>
            <Info />
            <button onClick={props.addSection}>+</button>
        </div>
    )
}

export default User