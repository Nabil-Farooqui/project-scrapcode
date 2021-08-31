export default function validateInfo(values){
    let errors = {};
    const validPasswordRegex = RegExp(/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/i)
    if(!values.firstName.trim()){
        errors.firstName = <h6 className="text-danger">firstName required</h6>
    }

    if(!values.lastName.trim()){
        errors.lastName = <h6 className="text-danger">lastName required</h6>
    }

//mobile

    if(!values.mobile.trim()){
        errors.mobile = <h6 className="text-danger">mobile no required</h6>
    }

   else  if(!/^[0-9\b]+$/.test(values.mobile))
    {
        errors.mobile = <h6 className="text-danger">enter only number</h6>
    }

    else if(values.mobile.length!=10)
    {
        errors.mobile = <h6 className="text-danger">enter valid mobile no</h6>
    
}


    //email
    if(!values.email){
        errors.email = <h6 className="text-danger">email required</h6>
    }
    else if (!/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.test(values.email))
    {
        errors.email=<h6 className="text-danger">email address is invalid</h6>;
    }

    //password
    if(!values.password){
        errors.password =<h6 className="text-danger">password required</h6>
    }

    else if(values.password.length<8){
        errors.password =<h6 className="text-danger">Password needs to be 8 character or more</h6>
    }

    else if(!validPasswordRegex.test(values.password))
    {
        errors.password =<h6 className="text-danger">Password must contain two uppercase letters ,one special case letter,two digits,three lowercase letters,length should be more than or equal to 8.</h6>
    }

    

    //confirm pass
    if(!values.password2){
        errors.password2 = <h6 className="text-danger">password required</h6>
    }

    else if(values.password2!==values.password){
        errors.password2 =<h6 className="text-danger">Password do not match </h6>
    }

    //address
    if(!values.address.trim()){
        errors.address = <h6 className="text-danger">address required</h6>
    }

    return errors;
    
}