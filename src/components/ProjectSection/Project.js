import React from 'react';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import noScreenshot from './../../assets/noscreen.png';
import project_img_1 from './../../assets/project_img_1.png';
import project_img_2 from './../../assets/project_img_2.png';
import project_img_3 from './../../assets/project_img_3.png';
import project_img_4 from './../../assets/project_img_4.png';
import project_img_5 from './../../assets/project_img_5.png';
import project_img_6 from './../../assets/project_img_6.png';
import project_img_7 from './../../assets/project_img_7.png';
import project_img_8 from './../../assets/project_img_8.png';

  function getTools(array) {
    return <ul>
        {array.map(function(item, key){
                return <li className="chip" key={ key }>{item}</li> ;
            })}
    </ul>
}
function getImage(id){
    switch(id) {
        case 8:
            return project_img_1;
        case 9:
            return project_img_2;
        case 7:
            return project_img_3;
        case 10:
            return project_img_4;
        case 11:
            return project_img_5;
        case 3:
            return noScreenshot;
        case 1:
            return project_img_6;
        case 2:
            return project_img_3;
        case 12:
            return project_img_7;
        case 13:
            return project_img_8;
        default:
            return noScreenshot;
      }
} 
const Project = props => (
    <Slider className={props.getClass} {...props.getSettings}>
        {props.array.map(function(item, key){
            if(item.project_type === props.projectType){
                return <div className="project" key={ key }>
                    <img src={ getImage(item.project_id) }alt="" />
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