import React from 'react'
import {cityCodes} from './../../../data/cityCodes'
const SelectForm = ({changeInput, defaultOption, name, value, wrapperClassName})=>(
    <div className={wrapperClassName}>
        <div className="input">
            <select name={name} onChange={changeInput} defaultValue={defaultOption} required>
                {cityCodes.map((code, index)=>{
                    return <option key={index} value={code}>{code}</option>
                })}
            </select>
        </div>
    </div>
)

export default SelectForm