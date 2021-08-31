import { validateYupSchema } from 'formik'
import React from 'react'
import useForm from './useForm'
import validate from './validateInfo'
 
 const Registration = () => {

const {handleChange,values,handleSubmit,errors}=useForm(validate);



     return (
             <div className="className-form-content-right">
                 <form className="form" onSubmit={handleSubmit}>
                    <div className="form-inputs">
                    <label htmlFor="firstName" className="form-label" >First Name</label>
                        <input type="text"name="firstName" className="form-input" placeholder="Enter first name"
                        value={values.firstName}
                        onChange={handleChange}
                        
                        />
                        {errors.firstName&& <p>{errors.firstName}</p>}
                    

                    </div>

                    <div className="form-inputs">
                    <label htmlFor="lastName" className="form-label" >Last Name </label>
                        <input type="text"name="lastName" className="form-input" placeholder="Enter last name"
                         value={values.lastName}
                         onChange={handleChange}

                        />
                    {errors.lastName&& <p>{errors.lastName}</p>}

                    </div>

                    <div className="form-inputs">
                    <label htmlFor="phone" className="form-label" >Phone Number</label>
                        <input type="text"name="phone" className="form-input" placeholder="Enter phone number"
                         value={values.phone}
                         onChange={handleChange}
                        
                        />
                     {errors.phone&& <p>{errors.phone}</p>}

                    </div>

                    <div className="form-inputs">
                    <label htmlFor="email" className="form-label" >Email</label>
                        <input type="email"name="email" className="form-input" placeholder="Enter Email"
                         value={values.email}
                         onChange={handleChange}
                        
                        />
                     {errors.email&& <p>{errors.email}</p>}

                    </div>
                    <div className="form-inputs">
                    <label htmlFor="password" className="form-label" >Password</label>
                        <input type="passwrd"name="password" className="form-input" placeholder="Enter password"
                         value={values.password}
                         onChange={handleChange}
                        
                        />
                         {errors.password&& <p>{errors.password}</p>}


                        </div>
                    <div className="form-inputs">
                    <label htmlFor="password2" className="form-label" >Confirm Password</label>
                        <input type="password"name="password2" className="form-input" placeholder="Enter password"
                         value={values.password2}
                         onChange={handleChange}
                        
                        />
                     {errors.password2&& <p>{errors.password2}</p>}


                    </div>
                    <div className="form-inputs">
                    <label htmlFor="address" className="form-label" >Address</label>
                        <input type="text"name="address" className="form-input" placeholder="Enter address"
                         value={validateYupSchema.address}
                         onChange={handleChange}
                        
                        />

                    {errors.address&& <p>{errors.address}</p>}            
           
                    </div>

                    <div>
                        <button className="form-input-btn" type="submit">SignUp</button>
                        <span>
                            Already have an account? Login <a href='#'>here</a>
                        </span>
                    </div>


                 </form>

             </div>
         
     )
 }



 
 export default Registration