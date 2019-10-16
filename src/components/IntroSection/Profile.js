import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import profile_img from './../../assets/profile.jpg';


class Profile extends React.Component{

    render() {
        return (
            <div className="container">
                <div className="row profile-row">
                    <div className="col xl3 l4 m12 s12 profile-pic wow bounceIn">
                        <img src={ profile_img } className="circle" alt="" />
                    </div>
                    <div className="col xl9 l8 m12 s12">
                        <div className="col s12 ">
                            <h1>{this.props.fName} {this.props.lName}</h1> 
                            <h3>{this.props.designation}</h3>
                        </div>
                        <div className="col xl12 l12 m12 s12 contact-details wow fadeIn">
                            <div className="col xl6 l6 m6 s6 phone">
                                <a href={"tel:" + this.props.tel} >
                                    <FontAwesomeIcon icon={['fas', 'phone']} /> <span className="hide-on-small-only">{this.props.tel}</span><span className="hide-on-med-and-up">Call me</span>
                                </a>
                            </div>
                            <div className="col xl6 l6 m6 s6 email">
                                <a href={"mailto:" + this.props.email} >
                                    <FontAwesomeIcon icon={['fas', 'envelope']} /> <span className="hide-on-small-only">{this.props.email}</span><span className="hide-on-med-and-up">Email me</span>
                                </a>
                            </div>
                            <div className="col xl6 l6 m6 s6 github">
                                <a href={this.props.github} target="_blank" rel="noopener noreferrer" >
                                    <FontAwesomeIcon icon={['fab', 'github']} /> <span className="hide-on-small-only">Check out my&nbsp;</span><span>Github</span>
                                </a>
                            </div>
                            <div className="col xl6 l6 m6 s6 linkedin">
                                <a href={this.props.linkedin} target="_blank" rel="noopener noreferrer" >
                                    <FontAwesomeIcon icon={['fab', 'linkedin']} /> <span className="hide-on-small-only">Visit my&nbsp;</span><span >Linkedin</span>
                                </a>
                            </div>
                            <div className="col xl12 l12 m12 s12 address">
                                <a href="/">          
                                    <FontAwesomeIcon icon={['fas', 'map-marker-alt']} /> <span>{this.props.address}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile