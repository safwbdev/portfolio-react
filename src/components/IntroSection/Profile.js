import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  
const Profile = props => (
    <div className="row profile-row">
                            <div className="col xl3 l4 m12 s12 profile-pic">
                                <img src={ props.image !== null ? props.image : "http://via.placeholder.com/500x400"} className="circle" alt="" />
                            </div>
                            <div className="col xl9 l8 m12 s12">
                                    {/* { this.state.fName !== null && !this.state.designation !== null &&  */}
                                <div className="col s12 ">
                                    <h1>{props.fName} {props.lName}</h1> 
                                    <h3>{props.designation}</h3>
                                </div>
        {/* } */}
                                <div className="col xl12 l12 m12 s12 contact-details">
                                    <div className="col xl6 l6 m6 s6 phone">
                                        <a href={"tel:" + props.tel} >
                                            <FontAwesomeIcon icon={['fas', 'phone']} /> <span className="hide-on-small-only">{props.tel}</span><span className="hide-on-med-and-up">Call me</span>
                                        </a>
                                    </div>
                                    <div className="col xl6 l6 m6 s6 email">
                                        <a href={"mailto:" + props.email} >
                                            <FontAwesomeIcon icon={['fas', 'envelope']} /> <span className="hide-on-small-only">{props.email}</span><span className="hide-on-med-and-up">Email me</span>
                                        </a>
                                    </div>
                                    <div className="col xl6 l6 m6 s6 github">
                                        <a href={props.github} target="_blank" rel="noopener noreferrer" >
                                            <FontAwesomeIcon icon={['fab', 'github']} /> <span className="hide-on-small-only">See my&nbsp;</span><span>Github</span>
                                        </a>
                                    </div>
                                    <div className="col xl6 l6 m6 s6 linkedin">
                                        <a href={props.linkedin} target="_blank" rel="noopener noreferrer" >
                                            <FontAwesomeIcon icon={['fab', 'linkedin']} /> <span className="hide-on-small-only">Check out my&nbsp;</span><span >Linkedin</span>
                                        </a>
                                    </div>
                                    <div className="col xl12 l12 m12 s12 address">
                                        <a href="/">          
                                            <FontAwesomeIcon icon={['fas', 'map-marker-alt']} /> <span>{props.address}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
)

export default Profile