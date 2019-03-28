const validation = (e)=>{
    const telephone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/
    if(e.target.phone.value.match(telephone)){
        return true
    }else{
        alert("fill your phone number corretly")
        return false
    }        
}

export default validation;