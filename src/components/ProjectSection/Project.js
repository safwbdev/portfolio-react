import React from 'react';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

  function getTools(array) {
    return <ul>
        {array.map(function(item, key){
                return <li className="chip" key={ key }>{item}</li> ;
            })}
    </ul>
}
  
const Project = props => (
    <Slider className={props.getClass} {...props.getSettings}>
        {props.array.map(function(item, key){
            if(item.project_type === props.projectType){
                return <div className="project" key={ key }>
                    <img src={ item.project_img !== null ? item.project_img : "https://via.placeholder.com/797x400"}alt="" />
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
)

export default Project