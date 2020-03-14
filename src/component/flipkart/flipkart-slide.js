import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/Custom.scss"
const img1 = require('../../img/img1.jpg')
const img2 = require('../../img/img2.jpg')
const img3 = require('../../img/img3.jpg')
const img4 = require('../../img/img4.jpg')

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


class Sliders extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
    };
    return (
      <div className="slide-div" >
        
        <Slider {...settings}>
          <div>
            <img className="image-slide" src={img1} ></img>
          </div> 
          <div>
          <img className="image-slide" src={img2} ></img>
          </div>
          <div>
          <img className="image-slide" src={img3} ></img>
          </div>
          <div>
          <img className="image-slide" src={img4} ></img>
          </div>
        </Slider>
      </div>
    );
  }
}


export default Sliders
