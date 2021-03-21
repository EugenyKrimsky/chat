import React from 'react'
import c from './InputNewSection.module.scss'

const InputNewSection = (props) => {
    const addSection = () => {
        props.updateSections({
            link: newSectionTittle.current.value.toLowerCase(),
            tittle: newSectionTittle.current.value,
            messages: []
        })
    }
    
    const newSectionTittle = React.createRef();

    return (
        <div className={c.input_new_sections}>
            <input className={c.input} type="text" placeholder="Input new section" ref={newSectionTittle}/>
            <button className={c.btn} onClick={addSection}>Add</button>
        </div>
    )
}

export default InputNewSection