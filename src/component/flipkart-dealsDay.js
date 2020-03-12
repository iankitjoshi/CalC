import React from 'react'
import {Row, Col} from "react-bootstrap";
const img1 = require('../img/img1.jpg')


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
                <br />
                <hr />
                <h4>Deals of The Day</h4> 
                <hr />
                <br />
                <Row className="header-div" style={{marginLeft : "5px", marginRight: "45px", backgroundColor:"#f8f9fa"}}>    
                    {
                        this.state.names.map((name , i ) => {
                            return <Col md={2} xs={1} sm={1} key={i} style={{display:'inline-block'}} style={{marginLeft :"38px"}}>
                                <img src={img1} style={{width:'180px',height:'170px'}} />
                                <button  type="button" style={{fontSize:"16px",width:'160px',fontFamily:'serif'}} class="btn btn-light p-2">{name}</button>
                                 </Col>
                        })
                    }       
            </Row>
            </div>
        )
    }
}

export default Deals