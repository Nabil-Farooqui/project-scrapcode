import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Admin from './components/pages/Admin';
import AdminRequest from './components/pages/AdminRequest';
import Approve from './components/pages/Approve'
import CustomerRegister from './components/pages/CustomerRegister.js';

const App = () => {
  return (    
<Router>
   <Navbar />

    <Switch>
      <Route path="/" component={Admin} exact>
        <Admin/>
      </Route>

      <Route path="/request" component={AdminRequest} exact>
        <AdminRequest/>
      </Route> 
      
      <Route path="/customer" component={Admin} exact>
        <Admin/>
      </Route> 
      
      <Route path="/customer" component={Admin} exact>
        <Admin/>
      </Route>

      <Route path="/Approve" exact={true} component={Approve}/>

      <Route path="/CustomerRegister"><CustomerRegister/></Route>



    </Switch>

</Router>
   
  );
}

export default App;
