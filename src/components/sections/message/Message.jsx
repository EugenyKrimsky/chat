import React, { useState } from 'react'
import c from './Message.module.scss'

const Message = (props) => {
    return (
        <div className={c.message}>
            <div className={c.number}>
                {`Q${props.number + 1}`}
            </div>
            <div className={c.info}>
                <p className={c.text}>
                    {props.message}
                </p>
                <div className={c.date}>
                    {`Guest ${props.date}`} 
                </div>
            </div>
        </div>
    )
}

export default Message