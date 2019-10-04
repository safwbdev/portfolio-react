import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Projects extends React.Component{

    render(){
        function getTools(array) {
            return <ul>
                {array.map(function(item, key){
                        return <li className="chip">{item}</li> ;
                    })}
            </ul>
        }
        function getProjects(array, projectType) {
            return  <div >
                        {array.map(function(item, key){
                            if(item.type === projectType)
                                return <div class="project row col xl6 l6 m6 s12">
                                            <h6>{item.name}</h6> 
                                            <p class="desc">{item.desc}</p>
                                            {getTools(item.tools)}
                                            <div class="links">
                                                { item.demoURL !== null
                                                ? <span>
                                                    <a href={item.demoURL}>
                                                        <FontAwesomeIcon icon={['far', 'window-restore']} /> { item.type == "client" ? <span>Visit Site</span> : <span>Demo</span>}
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
                                                    <a href={item.githubURL}>
                                                        <FontAwesomeIcon icon={['fab', 'github']} /> Visit Github
                                                    </a>
                                                </span>
                                                : ""
                                                }
                                            </div>
                                        </div>;
                                    }
                                )
                        }
                    </div>
        }

        const projectList =[
                {
                    name:"Packist",
                    desc:"Website of the Malaysian-based online travel agency that offers travel packages, tours, transport and more.",
                    tools:["PHP", "Code Igniter", "Bootstrap", "JQuery"],
                    demoURL:"https://www.packist.com/",
                    githubURL: null,
                    type:"client"
                },
                {
                    name:"Sureplify",
                    desc:"Website for the Malaysian Car Insurance Company that can offer free real time quotation comparisons.",
                    tools:["React JS", "Vue JS", "REST API", "Bootstrap"],
                    demoURL:"https://www.sureplify.com/#/",
                    githubURL: null,
                    type:"client"
                },
                {
                    name:"BitRatez",
                    desc:"BitCoin currency rate checker",
                    tools:["NextJS", "Bootstrap"],
                    demoURL:"Site URL",
                    githubURL: "Github URL",
                    type:"personal"
                },
        ];
        return(
            <div className="container project-section">
                <div className="row">
                    <h4>Portfolio</h4>
                    <div className="col s12">
                        <h5>Client Projects<sup>*</sup></h5>
                        {getProjects(projectList, "client")}
                        <div className="col s12">
                            <span class="tnc">* Projects shown are displayed with persmission from the original owners</span>
                        </div>
                    </div>
                    <div className="col s12">
                        <h5>Personal Projects<sup>**</sup></h5>
                        {getProjects(projectList, "personal")}
                        <div className="col s12">
                            <span class="tnc">** Just stuff I do for fun!</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

            
export default Projects