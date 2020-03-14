import React from 'react'
import {Row, Col} from "react-bootstrap";
import '../../assets/Custom.scss'

const img1 = require('../../img/img1.jpg')
const img2 = require('../../img/img2.jpg')



class Deals extends React.Component{
    constructor(){
        super()
        this.state = {
            names : ['Smart Device Extra 10% off','Home Decor Range from 67RS','Toys upto Best 80% off','Tops Deals upto Best 80% off','Mobile upto Best 30% off']
        }
    }
    render(){
        return(
            <div>
            <div className="main-div-deals-day" >
                <div>
                <hr />
                <h4>Deals of The Day <button className="login-button  btn btn-primary" style={{marginLeft:'750px' , backgroundColor:'#007bff' , color:'white'}} >View All</button></h4>
                <hr />
                <Row className="row-tag-deals-day   header-div" >    
                    {
                        this.state.names.map((name , i ) => {
                            return <Col md={2} xs={1} sm={1} key={i} className="col-deals-day" >
                                <img src={img1} className="img-deals-day" />
                                <button  type="button" className="button-deals-day  btn btn-light p-2">{name}</button>
                                 </Col>
                        })
                    }
                </Row>
                </div>
                <div>
                        <img src={img2} className="img2-deals-day" />     
                </div>
           
            </div>
            </div>
        )
    }
}

export default Deals