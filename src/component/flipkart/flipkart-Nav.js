import React from 'react'
import "../../assets/Custom.scss"
const img = require('../../img/flipkart.png')
const img1 = require('../../img/search1.png')


function FlipkartNav(){
    return(
        <div className="main-div-nav"  >
           <nav className="main-nav  navbar navbar-expand-lg navbar navbar-dark bg-primary">
                    <a class="navbar-brand" href="#"><img src={img} style={{width:"73px"}}/></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                <div  class="collapse navbar-collapse" id="navbarSupportedContent">
                
                        <form  className="search-form  form-inline my-2 my-lg-0" >
                        <input className="nav-form" style={{width:'400px',borderRadius:'0px'}} class="form-control mr-sm-2" type="search"  placeholder="Search for products, brands and more" aria-label="Search" />
                        <button className="search-button"><img className="search-button" src={img1} /></button>
                        </form>
                        <button  type="button" className="login-button  btn btn-primary">Login</button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item dropdown">
                                <a class="more-nav  nav-link dropdown-toggle"  href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:'white'}}>
                                More
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>
                        <button type="button" className="cart-button  btn btn-primary">Cart</button>
                    </div>
                </div> 
            </nav>
        </div>
    )
}

export default FlipkartNav

// display: flex;
// /* align-items: center; */
// background-color: #007bff;
// }

//    margin: auto;
