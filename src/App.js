import React from 'react';
import {BrowserRouter , Link , Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './component/Home';
import CalC from './component/CalC';
import Flipkart from './component/flipkart/Flipkart'
import Login from './component/login/login';



function App() {
  return (
    <div>
      <BrowserRouter>

        <Link to="/">Home |</Link>
        <Link to="/calc">Calculator |</Link>
        <Link to="/flipkart">Flipkart |</Link>
        <Link to="/login">Login</Link>

        <Route path="/" component={Home} exact={true} />
        <Route path="/calc" component={CalC} />
        <Route path="/flipkart" component={Flipkart} />
        <Route path="/login" component={Login} />
      
      </BrowserRouter>
    </div> 
  )
}

export default App;
