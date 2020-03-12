import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const img1 = require('../img/img1.jpg')
const img2 = require('../img/img2.jpg')
const img3 = require('../img/img3.jpg')
const img4 = require('../img/img4.jpg')

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",marginRight:"25px"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

class Sliders extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        
        <Slider {...settings}>
          <div>
            <img src={img1} style={{width:'1370px',height:'300px'}}></img>
          </div> 
          <div>
          <img src={img2} style={{width:'1370px',height:'300px'}}></img>
          </div>
          <div>
          <img src={img3} style={{width:'1370px',height:'300px'}}></img>
          </div>
          <div>
          <img src={img4} style={{width:'1370px',height:'300px'}}></img>
          </div>
        </Slider>
      </div>
    );
  }
}


export default Sliders
