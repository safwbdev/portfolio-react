import React from 'react';
import { db } from "../firebase";
import Moment from 'react-moment';
import Slider from "react-slick";

class Education extends React.Component{

    constructor(){
        super();
        this.state = {
            education:[]
        }
    }
    componentDidMount() {
        db.collection("education")
        .orderBy('edu_end', 'desc')
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            this.setState({ 
                education: this.state.education.concat(data) 
            })                
        });
    }
    
    render(){
        const educationList = this.state.education;

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

        return(
            <div className="school-section">
                <div className="container">
                    <div className="row">
                            <h4>Education</h4>
                        <div className="col xl12 l12 m12 s12 slider-row">
                            {getEducation(educationList)}
                        </div>
                    </div>
                </div>
            </div>
        );

        function getEducation(array) {
            return  <Slider {...settings}>
                    {array.map(function(item, key){
                        return <div className="school row col xl12 l12 m12 s12" key={ key }>
                                    <div>
                                        <span className="grad-year">
                                            <Moment format="YYYY">{item.edu_end}</Moment>
                                        </span><span className="hide-on-small-only"> | </span><br className="hide-on-large-only" /><span className="field">{item.edu_field}</span>
                                    </div>
                                    <div>
                                        <span className="name">{item.edu_name}</span><span className="hide-on-small-only"> | </span><br className="hide-on-large-only" /><span className="location">{item.edu_location}</span>
                                    </div>
                                </div>;
                    })}
            </Slider>
        }
    }
};       
export default Education