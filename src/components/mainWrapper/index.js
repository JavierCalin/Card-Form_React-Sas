import React, {Component} from 'react'
import BusinessCard from './businessCard'
import FormCabify from './form'
import validation from './../../services/validation'

class MainWrapper extends Component{
    state= {
        cityCode:"+40",
        email:"",
        fullname : "",
        job : "",
        location : "",
        phone : "",
        web : "",
    }
    _setInputState = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    _submitForm = (e)=>{
        e.preventDefault()
        if(validation(e)){
            console.log(this.state)
        } 
    }
    
    render(){
        
        const {cityCode, email, fullname, job, location, phone, web} = this.state
        return(
            <div className="mainWrapper row">
                <BusinessCard
                    cityCode = {cityCode}
                    email={email}
                    job = {job}
                    location = {location}
                    name = {fullname}
                    phone = {phone}
                    web = {web}
                />
                <FormCabify
                    changeState = {this._setInputState}
                    cityCode = {cityCode}
                    email={email}
                    job = {job}
                    location = {location}
                    name = {fullname}
                    phone = {phone}
                    submitFunction= {this._submitForm}
                    web = {web}
                />
            </div>
        )
    }
}

export default MainWrapper