import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Skills = props => (
    <div className="row wow fadeIn">
        <h6 className="">{props.title}</h6>
        {props.array.map(function(item, key){
            if(item.skill_type === props.type){
                return <span className={props.style + " chip"}  key={ key }>
                            <FontAwesomeIcon icon={[item.skill_icon[0], item.skill_icon[1]]} />&nbsp;&nbsp;{item.skill_name}
                        </span>;
            }
            else{
                return "";
            }
        })}
    </div>
)

export default Skills