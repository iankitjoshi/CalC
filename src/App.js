import React from 'react';
import {BrowserRouter , Link , Route} from 'react-router-dom'
import Home from './component/Home';
import CalC from './component/CalC';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      <BrowserRouter>

        <Link to="/">Home |</Link>
        <Link to="/calc">Calculator</Link>

        <Route path="/" component={Home} exact={true} />
        <Route path="/calc" component={CalC} />
      
      </BrowserRouter>
    </div> 
  )
}

export default App;
