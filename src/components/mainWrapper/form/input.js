import React from 'react'

const InputForm = ({changeInput, htmlFor, label, name, type, value, wrapperClassName})=>(
    <div className={wrapperClassName}>
        <div className="input">
            <input type={type} name={name} value={value} onChange={changeInput} placeholder={label} maxLength= "30" required/>  
        </div>
    </div>
)

export default InputForm