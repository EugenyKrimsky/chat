import React from 'react'
import Messages from './messages/Messages'
import User from './user/User'
import c from './Aside.module.scss'

const Aside = (props) => {
    return (
        <div className={c.aside}>
            <User addSection={props.addSection}/>
            <Messages 
                links={props.links} 
                isPressedBtn={props.isPressedBtn} 
                setSection={props.setSection} 
                updateSections={props.updateSections}/>
        </div>
    )
}

export default Aside