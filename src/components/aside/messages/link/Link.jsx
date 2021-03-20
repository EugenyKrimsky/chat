import React from 'react'
// import c from './Link.module.scss'
import { NavLink } from 'react-router-dom'

const Link = (props) => {
    return (
        <div>
            <NavLink to={`/${props.link}`}>{props.link}</NavLink>
        </div>
    )   
}

export default Link