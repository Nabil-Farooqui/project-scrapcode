import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
  integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
  crossorigin="anonymous"
/>



const Admin = () =>{
    return(

<div>
<div class="row mx-5  me-5 ">
  <div class="col-sm-3">

<div class="card text-white bg-primary m ml-3 my-3 shadow p-3 mb-5 rounded" style={{width: "100%",height:"100%"}}>

  <div class="card-body">
      
  <div  class="mt-5" style={{textAlign:"center"}} > <a href="#" class="text-white" style={{textDecoration:"none"}}><h5>View All Request</h5></a></div>
        <div class="mt-3" style={{textAlign:"center"}}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg></div>
  </div>
  </div>

  </div>
  <div class="col-sm-3">

<div class="card text-white bg-success  ml-3 my-3  shadow p-3 mb-5 rounded" style={{width: "100%",height:"100%"}}>

  <div class="card-body ">
      
  <div  class="mt-5" style={{textAlign:"center"}}> <a href="#" class="text-white" style={{textDecoration:"none"}}><h5>Make Request</h5></a></div>
      
      <div class="mt-3" style={{textAlign:"center"}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
      </div>

  </div>
  </div>

  </div>

  <div class="col-sm-3">

<div class="card text-white bg-warning  ml-3 my-3  shadow p-3 mb-5 rounded " style={{width: "100%",height:"100%"}}>

  <div class="card-body">
      
  <div  class="mt-5" style={{textAlign:"center"}}> <Link to="Approve" class="text-white" style={{textDecoration:"none"}}><h5>Approve Request</h5> </Link></div>
 
      <div class="mt-3" style={{textAlign:"center"}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg>
      </div>

  </div>
  </div>

  </div>

  <div class="col-sm-3">

<div class="card text-white bg-danger  ml-3 my-3  shadow p-3 mb-5 rounded" style={{width: "100%",height:"100%"}}>

  <div class="card-body">
      
  <div  class="mt-5" style={{textAlign:"center"}}> <a href="Profile" class="text-white" style={{textDecoration:"none"}}><h5>Approve Request Bill</h5></a></div>
  <div class="mt-3" style={{textAlign:"center"}}>
  <img src="https://img.icons8.com/material-outlined/24/000000/rupee.png"/>
  </div>
 
  </div>
  </div>

  </div>
</div>


</div> 


    )

}
export default Admin