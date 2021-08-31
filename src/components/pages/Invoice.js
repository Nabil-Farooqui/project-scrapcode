import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
  integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
  crossorigin="anonymous"
/>
const Invoice =()=>{
return(


  <div class="contaner d-flex p-3 "> 

<div class="card mx-auto my-3 mr-3 shadow p-3 mb-5 bg-white rounded" style={{width: "18rem"}}>

  <div class="card-body">
 <div class=" card-header text-center"> <h5 class="card-title text-danger">Invoice</h5></div>
      <div class="container">
  <table class="table ">
<tr>
<tr><th>CustomerId:</th><td>1234</td></tr>
<tr><th>CustomerName:</th><td>Mahesh Pawar</td></tr>
<tr><th>VehicleName:</th><td>Honda City</td></tr>
<tr><th>Vehicle Number:</th><td>1234</td></tr>
<tr><th>Problem Description:</th><td>break is not working</td></tr>
<tr><th>Status:</th><td>Released</td></tr>
<tr><th>Total Cost:</th><td>550</td></tr>

</tr>

</table>
</div>
  
</div>
  </div>
</div>



)

}
export default Invoice