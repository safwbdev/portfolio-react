import React from 'react';
import desc_image from './../../assets/desc_bg.jpeg';

var descbgStyle = { backgroundImage: `url(${desc_image})`};
  
const Description = props => (
    <div>
        <div className="col xl12 l12 m12 s12 desc-section" style={ descbgStyle }>
            <div className="container section">
                <div className="row">
                    <div className="col xl12 l12 m12 s12 desc " >
                        <p>{props.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Description