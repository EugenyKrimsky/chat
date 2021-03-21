import React from 'react'
import Message from './message/Message';
import NewMessage from './new-message/NewMessage';
import c from './Section.module.scss'

const Section = (props) => {
    return (
        <div className={c.section}>
            <div className={c.header}>
                <h1 className={`tittle ${c.tittle}`}>{props.tittle}</h1>
                <h4 className={`status ${c.status}`}>All questions</h4>
            </div>
            <div className={c.messages}>
                {props.messages
                    .map((message, i) => 
                        <Message 
                            key={i}
                            message={message.text} 
                            date={message.date}
                            number={i}
                        />)
                    .reverse()
                }
            </div>
            <NewMessage 
                tittle={props.tittle}
                newTextMessage={props.newTextMessage} 
                upgradeNewTextMessage={props.upgradeNewTextMessage}
                addNewMessage={props.addNewMessage}
            />
        </div>
    )
}

export default Section