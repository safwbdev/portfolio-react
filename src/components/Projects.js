import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slider from "react-slick";


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
            return  <Slider {...settings}>
                        {array.map(function(item, key){
                            if(item.type === projectType){
                                return <div className="project row col xl6 l6 m6 s12" key={ key }>
                                            <h6>{item.name}</h6> 
                                            <p className="desc">{item.desc}</p>
                                            {getTools(item.tools)}
                                            <div className="links">
                                                { item.demoURL !== null
                                                ? <span>
                                                    <a href={item.demoURL} target="_blank" rel="noopener noreferrer">
                                                        <FontAwesomeIcon icon={['far', 'window-restore']} /> { item.type === "client" ? <span>Visit Site</span> : <span>Demo</span>}
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
                    </Slider>
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
                    demoURL:null,
                    githubURL: "https://github.com/safwbdev/BitRatez",
                    type:"personal"
                },
                {
                    name:"The Weather Man Can!",
                    desc:"Weather App that shows the current from different cities using the openWeather API",
                    tools:["React JS", "Material"],
                    demoURL:"https://zealous-sammet-364d1d.netlify.com/",
                    githubURL: "https://github.com/safwbdev/weather-app",
                    type:"personal"
                },
                {
                    name:"Online portfolio",
                    desc:"The current site you're on. Like it? Made it myself.",
                    tools:["React JS", "Material"],
                    demoURL:null,
                    githubURL: null,
                    type:"personal"
                },
                {
                    name:"Online portfolio(Vue & Firebase)",
                    desc:"This version was originally meant to be used here (with CRUD included). But DAMN, is the react version better! (Yes, I am biased)",
                    tools:["Vue JS", "Material", "Firebase"],
                    demoURL:null,
                    githubURL: "null",
                    type:"personal"
                },
                {
                    name:"Keto Recipes",
                    desc:"Built this as an excercise first, then continued on it to help me lose weight. (Lost 15 kilos thanks to this!)",
                    tools:["React JS", "REST API", "Bootstrap"],
                    demoURL:null,
                    githubURL: null,
                    type:"personal"
                },
        ];

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return(
            <div className="project-section">
                {/* <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider> */}
                <div className="container">
                    <div className="row">
                        <h4>Portfolio</h4>
                        <div className="col s12">
                            <h5>Client Projects<sup>*</sup></h5>
                            {getProjects(projectList, "client")}
                            <div className="col s12">
                                <span className="tnc">* Projects shown are displayed with persmission from the original owners</span>
                            </div>
                        </div>
                        <div className="col s12">
                            <h5>Personal Projects<sup>**</sup></h5>
                            {getProjects(projectList, "personal")}
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