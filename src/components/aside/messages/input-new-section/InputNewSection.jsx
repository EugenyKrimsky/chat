import React from 'react'

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
        <div>
            <input type="text" placeholder="Input new section" ref={newSectionTittle}/>
            <button onClick={addSection}>Add</button>
        </div>
    )
}

export default InputNewSection