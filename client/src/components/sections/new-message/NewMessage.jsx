import React from 'react'
import c from './NewMessage.module.scss'

const NewMessage = (props) => {
    const newTextMessage = React.createRef();

    function upgradeText() {
        props.upgradeNewTextMessage(props.tittle, newTextMessage.current.value);
    }

    function addMessage() {
        props.addNewMessage(props.tittle);
    }

    return (
    <div className={c.new_message}>
        <textarea value={props.newTextMessage} ref={newTextMessage} onChange={upgradeText}></textarea>
        <button onClick={addMessage}>Send</button>
    </div>
    )
}

export default NewMessage