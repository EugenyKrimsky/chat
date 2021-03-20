import React from 'react'
import Messages from './messages/Messages'
import User from './user/User'

const Aside = (props) => {
    return (
        <aside>
            <User />
            <Messages links={props.links}/>
        </aside>
    )
}

export default Aside