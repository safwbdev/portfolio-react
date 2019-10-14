import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slider from "react-slick";
import { db } from "../firebase";

class Projects extends React.Component{

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

        function getTools(array) {
            return <ul>
                {array.map(function(item, key){
                        return <li className="chip" key={ key }>{item}</li> ;
                    })}
            </ul>
        }
        function getProjects(array, projectType, getClass, getSettings) {
                return  <Slider className={getClass} {...getSettings}>
                        {array.map(function(item, key){
                            if(item.project_type === projectType){
                                return <div className="project" key={ key }>
                                    <img src={ item.project_img !== null ? item.project_img : "http://via.placeholder.com/797x400"}alt="" />
                                    <div className="col s12">
                                        <h6>{item.project_name}</h6> 
                                        <p className="desc">{item.project_desc}</p>
                                        {getTools(item.project_tools)}
                                        <div className="links">
                                            { item.demoUrl !== null
                                            ? <span>
                                                <a href={item.demoUrl} target="_blank" rel="noopener noreferrer">
                                                    <FontAwesomeIcon icon={['far', 'window-restore']} /> { item.project_type === "Client" ? <span>Visit Site</span> : <span>Demo</span>}
                                                </a>
                                            </span>
                                            : ""
                                            }
                                                { item.demoUrl !== null && item.githubUrl !== null
                                            ? <span className="hide-on-small-only"> | </span>
                                            : ""
                                            }
                                            { item.githubUrl !== null
                                            ? <span>
                                                <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">
                                                    <FontAwesomeIcon icon={['fab', 'github']} /> Github
                                                </a>
                                            </span>
                                            : ""
                                            }

                                    </div>
                                            </div>
                                        </div>;
                        }
                        else{
                            return null;
                        }
                                    }
                                )
                        }
                    </Slider>
        }

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
                            {getProjects(projectList, "Client", "client", clientSettings)}
                        </div>
                    </div>
                    <div className="col xl12 l12 m12 s12">
                        <span className="tnc">* Projects shown are displayed with persmission from the original owners</span>
                    </div>
                    <div className="row">
                        <div className="col xl12 l12 m12 s12 slider-row">
                            <h5>Personal Projects<sup>**</sup></h5>
                            {getProjects(projectList, "Personal", "personal", personalSettings)}
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

            
export default Projects