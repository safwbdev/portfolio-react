import React from 'react';
import Moment from 'react-moment';
import Slider from "react-slick";
import nologo from './../../assets/nologo.png';

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
                slidesToShow: 5,
                slidesToScroll: 1,
                centerMode: false,
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
  function getDesc(array) {
    return <ul>
        {array.map(function(item, key){
                return <li key={ key }>{item}</li> ;
            })}
    </ul>
}
  
const Experience = props => (
    <Slider className="wow fadeIn" {...settings}>
        {props.array.map(function(item, key){
             return <div className="work row col xl12 l12 m12 s12" key={ key }>
             <div className="col xl1 l1 m2 s12 logo">
                 <img src={ item.work_img !== null ? item.work_img : nologo } className="circle" alt="" />
             </div>
             <div className="col xl11 l11 m10 s12">
                 <div className="work-detail">
                     <span className="position">{item.work_position}</span><span className="hide-on-small-only"> | </span><br className="hide-on-med-and-up" /><span className="duration"> <Moment format="MMMM YYYY">{item.work_start}</Moment> -  <Moment format="MMMM YYYY">{item.work_end}</Moment></span>
                 </div>
                 <div className="work-detail">
                     <span className="company">{item.work_name}</span><span className="hide-on-small-only"> | </span><br className="hide-on-med-and-up" /><span className="location">{item.work_location}</span>
                 </div>
                 <div className="desc">
                     {getDesc(item.work_desc)}
                 </div>
             </div>
         </div>;
        })}
    </Slider>
)

export default Experience