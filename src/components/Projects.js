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
                        return <li className="chip">{item}</li> ;
                    })}
            </ul>
        }
        function getProjects(array, projectType) {
            return  <div>
            {/* return  <div {...settings}> */}
                        {array.map(function(item, key){
                            if(item.project_type === projectType){
                                return <div className="project row col xl6 l6 m6 s12" key={ key }>
                                            <h6>{item.project_name}</h6> 
                                            <p className="desc">{item.project_desc}</p>
                                            {getTools(item.project_tools)}
                                            <div className="links">
                                                { item.demoURL !== null
                                                ? <span>
                                                    <a href={item.demoURL} target="_blank" rel="noopener noreferrer">
                                                        <FontAwesomeIcon icon={['far', 'window-restore']} /> { item.project_type === "client" ? <span>Visit Site</span> : <span>Demo</span>}
                                                    </a>
                                                </span>
                                                : ""
                                                }
                                                 { item.demoURL !== null && item.githubURL !== null
                                                ? " | "
                                                : ""
                                                }
                                                { item.githubURL !== null
                                                ? <span>
                                                    <a href={item.githubURL} target="_blank" rel="noopener noreferrer">
                                                        <FontAwesomeIcon icon={['fab', 'github']} /> Github
                                                    </a>
                                                </span>
                                                : ""
                                                }
                                            </div>
                                        </div>;
                        }
                        else{
                            return null;
                        }
                                    }
                                )
                        }
                    </div>
                    // </Slider>
        }

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return(
            <div className="project-section">
                <div className="container">
                    <div className="row">
                        <h4>Portfolio</h4>
                        <div className="col s12">
                            <h5>Client Projects<sup>*</sup></h5>
                            {getProjects(projectList, "Client")}
                            <div className="col s12">
                                <span className="tnc">* Projects shown are displayed with persmission from the original owners</span>
                            </div>
                        </div>
                        <div className="col s12">
                            <h5>Personal Projects<sup>**</sup></h5>
                            {getProjects(projectList, "Personal")}
                            <div className="col s12">
                                <span className="tnc">** Just stuff I do for fun!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

            
export default Projects