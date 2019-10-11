import React from 'react';
import { db } from "../firebase";
import Moment from 'react-moment';
import Slider from "react-slick";

class Experience extends React.Component{
    constructor(){
        super();
        this.state = {
            experience:[]
        }
    }
    componentDidMount() {
        db.collection("experience")
        .orderBy('work_start', 'desc')
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            this.setState({ 
                experience: this.state.experience.concat(data) 
            })                
        });
    }

    render(){
        const experienceList = this.state.experience;

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

        return(
            <div className="work-section">
                <div className="container">
                    <div className="row">
                        <h4>Work Experience</h4>
                        <div className="col xl12 l12 m12 s12 slider-row">
                            {getExperience(experienceList)}
                        </div>
                    </div>
                </div>
            </div>
        )

        function getExperience(array) {
            return   <Slider {...settings}>
                        {array.map(function(item, key){
                            return <div className="work row col xl12 l12 m12 s12" key={ key }>
                                        <div className="work-detail">
                                            <span className="position">{item.work_position}</span><span className="hide-on-small-only"> | </span><br className="hide-on-med-and-up" /><span className="duration"> <Moment format="MMMM YYYY">{item.work_start}</Moment> -  <Moment format="MMMM YYYY">{item.work_end}</Moment></span>
                                        </div>
                                        <div className="work-detail">
                                            <span className="company">{item.work_name}</span><span className="hide-on-small-only"> | </span><br className="hide-on-med-and-up" /><span className="location">{item.work_location}</span>
                                        </div>
                                        <div className="desc">
                                            {getDesc(item.work_desc)}
                                        </div>
                                    </div>;
                        })}
                    </Slider>
        }

        function getDesc(array) {
            return <ul>
                {array.map(function(item, key){
                        return <li key={ key }>{item}</li> ;
                    })}
            </ul>
        }
    }
};
export default Experience