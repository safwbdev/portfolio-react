import React from 'react';
import Moment from 'react-moment';
import Slider from "react-slick";

var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
                dots: true,
          }
        },
        {
            breakpoint: 480,
            settings: {
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '10%',
                arrows: true,
                dots: true,
          }
        }

      ]
  };
  
const Education = props => (
    <Slider {...settings}>
        {props.array.map(function(item, key){
            return  <div className="school row col xl12 l12 m12 s12" key={ key }>
            <div className="col xl2 l1 m2 s12 logo">
                <img src={ item.edu_img !== null ? item.edu_img : "http://via.placeholder.com/500x400"} className="circle" alt="" />
            </div>
            <div className="col xl10 l11 m10 s12">
            <div>
                <span className="grad-year">
                    <Moment format="YYYY">{item.edu_end}</Moment>
                </span><span className="hide-on-small-only"> | </span><br className="hide-on-large-only" /><span className="field">{item.edu_field}</span>
            </div>
            <div>
                <span className="name">{item.edu_name}</span><br /><span className="location">{item.edu_location}</span>
            </div>
            </div>
        </div>;
        })}
    </Slider>
)

export default Education