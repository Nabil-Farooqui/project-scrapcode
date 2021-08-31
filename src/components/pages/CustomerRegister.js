import { validateYupSchema } from 'formik'
import React from 'react'
import useForm from './useForm'
import validate from './validateInfo'
import 'bootstrap/dist/css/bootstrap.min.css';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
  integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
  crossorigin="anonymous"
/>


const CustomerRegister=()=> {

	const resetInputField = () => {
       
  };


    const {handleChange,values,handleSubmit,errors}=useForm(validate);
    
    return (

        <div class="container">
        <div class="card mx-auto my-3 mr-3 shadow p-3 mb-5 bg-white rounded" style={{width: "25rem"}}>
 
  <div class="card-body">
  <div class=" card-header text-center"> <h5 class="card-title text-info">Customer Registration Form</h5></div>
   
  <form method="get" className="form" onSubmit={handleSubmit}>
  <div class="form-row">
  <div class="form-inputs">
      <label for="firstName">First Name</label>
      <input type="text" class="form-control" name="firstName" placeholder="Enter First Name"
      pattern="[A-Za-z]+"
     value={values.firstName}
     onChange={handleChange}
      />
      {errors.firstName&& <p>{errors.firstName}</p>}
    </div>

    <div class="form-inputs">
      <label for="lastName">Last Name</label>
      <input type="text" class="form-control" name="lastName" placeholder="Enter Last Name" 
     pattern="[A-Za-z]+"
     value={values.lastName}
      onChange={handleChange}
      
      />
      {errors.lastName&& <p>{errors.lastName}</p>}
    </div>

    <label>Gender</label><br/>
  <div class="form-check form-check-inline">
    
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
  <label class="form-check-label" for="inlineRadio1" n>Male</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
  <label class="form-check-label" for="inlineRadio1">Female</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">Other</label>
</div>


    <div class="form-inputs">
      <label for="mobile">Mobile No</label>
      <input type="text" class=" form-control " name="mobile" placeholder="Enter Mobile No" 
      value={values.mobile}
      onChange={handleChange}
      
      />
      {errors.mobile&& <p>{errors.mobile}</p>}
    </div>
    <div class="form-group">
    <label for="address">Address</label>
    <textarea class="form-control" name="address" rows="2"  value={values.address}
    onChange={handleChange} placeholder="enter your address here"></textarea>
 
 {errors.address&& <p>{errors.address}</p>}
  </div>

  

    <div class="form-inputs">
      <label for="email">Email</label>
      <input type="email" class="form-control " name="email" placeholder="Enter Email" 
       value={values.email}
       onChange={handleChange}
      
      />
   {errors.email&& <p>{errors.email}</p>}
    </div>
    <div class="form-inputs">
      <label for="password">Password</label>
      <input type="password" class=" form-control" name="password" placeholder="Enter Password" 
     
       value={values.password}
       onChange={handleChange}
      
      />
      {errors.password&& <p>{errors.password}</p>}
    </div>

    <div class="form-inputs">
      <label for="password2">Confirm Password</label>
      <input type="password" class=" form-control" name="password2" placeholder="Confirm Password" 
      value={values.password2}
      onChange={handleChange}
      
      />
      {errors.password2&& <p>{errors.password2}</p>}
    </div>
  </div>
 

  
 <div class="text-center mt-2 ">
    <button class="btn btn-outline-primary form-input-btn" type="submit" href="#">Submit</button>
    <button onClick={resetInputField} class="btn btn-outline-danger form-input-btn-reset" type="reset">Reset</button>
 </div>


</form>
  </div>
  </div>
</div>
    )
}

export default CustomerRegister