import React from 'react'
import InputNewSection from './input-new-section/InputNewSection'
import Link from './link/Link'
import c from './Messages.module.scss'

const Messages = (props) => {
    const items = props.links.map(item => <Link link={item.link} tittle={item.tittle}/>)

    return (
        <div className={c.messages}>
            <h2 className="tittle">MESSAGES</h2>
            <h4 className="status">history</h4>
            <div className={c.links}>
                {items}
            </div>
            {props.isPressedBtn ? <InputNewSection setSection={props.setSection} updateSections={props.updateSections}/> : null}
        </div>
    )
}

export default Messages