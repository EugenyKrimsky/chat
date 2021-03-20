import React from 'react'
import c from './Link.module.scss'
import { NavLink } from 'react-router-dom'
import icon from './../../../../img/message.svg'

const Link = (props) => {
    return (
        <NavLink to={`/${props.link}`} className={c.link}>
            <img className={c.icon} src={icon} alt="img"></img>
            <span className={c.navLink}>{props.tittle}</span>
        </NavLink>
    )   
}

export default Link