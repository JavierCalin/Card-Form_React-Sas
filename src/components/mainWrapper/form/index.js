import React, {Component} from 'react'
import InputForm from './input'
import SelectForm from './select'



class FormCabify extends Component {
    state={
        submitButton:false,
    }
    componentWillReceiveProps (nextProps){     
        const stateValues = Object.values(nextProps) 
        const comproveValues = stateValues.some((element)=>element ==="")
        !comproveValues 
            ? this.setState({submitButton:true})      
            : this.setState({submitButton:false})
    }
    _submitForm(e){
        e.preventDefault()
    }

    render(){
        const {changeState, cityCode, email, job, location, name, phone, submitFunction, web} = this.props
        let classNameSubmit = 'button button-full button-primary '
        if(!this.state.submitButton){ classNameSubmit += 'disabled'}
        return (
        <article className="builder col col6">
            <form id="form" className="form" action="" onChange={changeState} onSubmit={submitFunction}> 
                <div className="row">    
                <InputForm
                    htmlFor="fullname"
                    label="Full name"
                    name="fullname"
                    type="text"
                    value={name}
                    wrapperClassName="formField-input active col col12"
                />
                </div>
                <div className="row row-separationMedium">
                    {/* you probably need to add active/focus/disabled classNames */}
                    <InputForm
                        htmlFor="jobdescription"
                        label="Job description"
                        name="job"
                        type="text"
                        value={job}
                        wrapperClassName="formField-input active focus col col12"
                    />
                </div>
                <div className="row row-separationMedium row-gutterMedium">
                    
                    <SelectForm
                        defaultOption={cityCode}
                        name="cityCode"
                        value = {cityCode}
                        wrapperClassName = "formField-input col col3"
                    />

                    <InputForm
                        htmlFor="ponenumber"
                        label="Phone number"
                        name="phone"
                        type="tel"
                        value={phone}
                        wrapperClassName="formField-input col col9"
                    />
                </div>
                <div className="row row-separationMedium">
                    <InputForm
                        htmlFor="email"
                        label="Email"
                        name="email"
                        type="email"
                        value={email}
                        wrapperClassName="formField-input col col12"
                    />
                </div>
                <div className="row row-separationMedium">
                    <InputForm
                        htmlFor="website"
                        label="Website"
                        name="web"
                        type="text"
                        value={web}
                        wrapperClassName="formField-input active disabled col col12"
                    />
                </div>
                <div className="row row-separationMedium">
                    <InputForm
                        htmlFor="address"
                        label="Address"
                        name="location"
                        type="text"
                        value={location}
                        wrapperClassName="formField-input active col col12"
                    />
                </div>
                <div className="row row-separationHuge">
                    <input className={classNameSubmit} type="submit" value="Request"/>
                </div>
            </form>
        </article>)
        }
        
    
}

export default FormCabify