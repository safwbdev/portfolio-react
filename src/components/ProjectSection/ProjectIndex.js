import React from 'react';
import { db } from "../../firebase";
import Project from './Project';

class ProjectIndex extends React.Component{

    constructor(){
        super();
        this.state = {
            projects:[]
        }
    }
    componentDidMount() {
        db.collection("projects")
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            this.setState({
                projects: this.state.projects.concat(data) 
            })                
        });
    }

    render(){

        const projectList = this.state.projects;
        var clientSettings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 2,
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
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: false,
                        centerPadding: '10%',
                        arrows: true,
                        dots: true,
                  }
                },
                {
                    breakpoint: 480,
                    settings: {
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
        var personalSettings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow:6,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: '10%',
                        variableWidth: true,
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
            <div className="project-section">
                <div className="container">
                    <div className="col xl12 l12 m12 s12">
                        <h4>Portfolio</h4>
                    </div>
                    <div className="row">
                        <div className="col xl12 l12 m12 s12 slider-row">
                            <h5>Client Projects<sup>*</sup></h5>
                            <Project array={projectList} projectType="Client" getClass="client" getSettings={clientSettings} />
                        </div>
                    </div>
                    <div className="col xl12 l12 m12 s12">
                        <span className="tnc">* Projects shown are displayed with persmission from the original owners</span>
                    </div>
                    <div className="row">
                        <div className="col xl12 l12 m12 s12 slider-row">
                            <h5>Personal Projects<sup>**</sup></h5>
                            <Project array={projectList} projectType="Personal" getClass="personal" getSettings={personalSettings} />
                        </div>
                        <div className="col xl12 l12 m12 s12">
                            <span className="tnc">** Just stuff I do for fun!</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

            
export default ProjectIndex