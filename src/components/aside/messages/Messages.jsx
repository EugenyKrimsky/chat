import React from 'react'
import Link from './link/Link'
import c from './Messages.module.scss'

const Messages = (props) => {
    const items = props.links.map(item => <Link link={item.link} />)

    return (
        <div className={c.messages}>
            <h2>Messages</h2>
            <h4>history</h4>
            {items}
        </div>
    )
}

export default Messages