import React from 'react'
import Electric from './Flipkart-ele-tv'
import Sliders from './flipkart-slide'
import Deals from './flipkart-dealsDay'
import FlipkartNav from './flipkart-Nav'

function Flipkart(){
    return(
        <div style={{backgroundColor:"#f8f9fa"}} >
           <FlipkartNav />
            <Electric />
            <Sliders />
            <Deals />
            
        </div>
    )
}

export default Flipkart