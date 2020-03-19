import React from "react";
import { BrowserRouter, Link, Route , Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./component/Home";
import CalC from "./component/CalC";
import Flipkart from "./component/flipkart/Flipkart";
import Login from "./component/login/login";
import Register from './component/login/register'
import Weather from "./component/weather/weather";
import Video from "./component/videoPlayer/video";
import Apps from "./component/youtube/containers/App";

function App(props) {
  console.log("props", props);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <div>
      <BrowserRouter>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          {localStorage.getItem("token") ? (
            <div>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="/home">
                      Home <span class="sr-only">(current)</span>
                    </a>
                  </li>

                  <li class="nav-item active">
                    <a class="nav-link" href="/calc">
                      Calculator <span class="sr-only">(current)</span>
                    </a>
                  </li>

                  <li class="nav-item active">
                    <a class="nav-link" href="/flipkart">
                      Flipkart <span class="sr-only">(current)</span>
                    </a>
                  </li>

                  <li class="nav-item active">
                    <a class="nav-link" href="/weather">
                      Weather <span class="sr-only">(current)</span>
                    </a>
                  </li>


                  <li class="nav-item active">
                    <a class="nav-link" href="/video">
                      Video <span class="sr-only">(current)</span>
                    </a>
                  </li>

                  <li class="nav-item active">
                    <Link
                      class="nav-link"
                      href="/logout"
                      onClick={handleLogout}
                    >
                      Logout <span class="sr-only">(current)</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="/">
                      Login <span class="sr-only">(current)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </nav>
        
            
        {/* {
          localStorage.getItem("token") ? (
            <div>

            </div>
          ) : (
            <div>
              
            </div>
          )
        } */}
        <Switch>
        <Route path="/home" component={Home} exact={true} />
        <Route path="/calc" component={CalC} />
        <Route path="/flipkart" component={Flipkart} />
        <Route path="/register" component={Register} />
        <Route path="/weather" component={Weather} />
        <Route path="/video" component={Apps} />
        <Route path="/" component={Login} />
        </Switch>
        
        
       
      </BrowserRouter>
    </div>
  );
}

export default App;
