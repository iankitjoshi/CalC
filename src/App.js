import React from 'react';
import {BrowserRouter , Link , Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './component/Home';
import CalC from './component/CalC';
import Flipkart from './component/Flipkart'



function App() {
  return (
    <div>
      <BrowserRouter>

        <Link to="/">Home |</Link>
        <Link to="/calc">Calculator |</Link>
        <Link to="/flipkart">Flipkart</Link>

        <Route path="/" component={Home} exact={true} />
        <Route path="/calc" component={CalC} />
        <Route path="/flipkart" component={Flipkart} />
      
      </BrowserRouter>
    </div> 
  )
}

export default App;
