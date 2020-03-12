import React from 'react'
import {Row, Col} from "react-bootstrap";
import "../assets/Custom.scss"

class Electric extends React.Component{
    constructor(){
        super()
        this.state = {
            names : ['Electronics','TVs & Appliances','Men','Women','Baby & Kids','Home & Furniture','Sports,Books & More','Offer Zone']
        }
    }
    render(){
        return(
            <Row className="header-div-ele-tv" >    
                    {
                        this.state.names.map((name , i ) => {
                            return <Col md={1} xs={1} sm={1} key={i} className="button-return-ele-tv" >
                                <button className="button-ele-tv btn btn-light p-2" type="button" >{name}</button>
                                 </Col>
                        })
                    }       
            </Row>
        )
    }
}

export default Electric