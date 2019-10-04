import React from 'react'
import WOW from "wowjs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Intro extends React.Component{
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
    }
    
    render(){
        const fullName= "John Doe";
        const designation= "Web Developer";
        const phone= "0123456789";
        const email= "john@email.com";
        const address= "14 N Moore St, New York, NY 10013, United States";
        const github= "github link";
        const linkedin= "linkedin link";
        const image= "https://previews.123rf.com/images/eugenesergeev/eugenesergeev1605/eugenesergeev160500180/56871195-bearded-man-smoking-cigar-outdoor-square-portrait-with-selective-focus.jpg";
        const desc= "Prolific, full stack web developer with a passion for metrics and beating former 'best-yets.' Prototyped 25 new product features per year for Flexor, Inc. Decreased rework by 22% and costs by 15%. Consistently receive high user experience scores for all web development projects, including a 55% increase for Flexor, Inc. Passionate about building world class web applications. One of my sites received a 2015 Webby for Best Navigation and Structure.";
    
        return (
            <div className="row">
                <div className="col xl12 l12 m12 s12 intro-section">
                    <div className="container section">
                        <div className="row">
                            <div className="col xl3 l3 m12 s12 profile-pic wow bounceIn" >
                                <img src={image} alt="" />
                            </div>
                            <span className="col xl9 l9 m12 s12">
                                <div className="col s12 ">
                                    <h1 
                                        className="wow bounceInDown" 
                                        data-wow-duration="0.5s" 
                                        data-wow-delay="0.5s">
                                        {fullName}
                                    </h1> 
                                    <h3 
                                        className="wow bounceInDown" 
                                        data-wow-duration="0.5s" 
                                        data-wow-delay="0.2s">
                                        {designation}
                                    </h3>
                                </div>
                                <span className="col s12 contact-details">
                                    <div className="col xl6 l6 m6 s6 phone">
                                        <a href="option.link" target="_blank" >
                                            <FontAwesomeIcon icon={['fas', 'phone']} /> <span className="hide-on-small-only">{phone}</span><span className="hide-on-med-and-up">Call me</span>
                                        </a>
                                    </div>
                                    <div className="col xl6 l6 m6 s6 email">
                                        <a href="option.link" target="_blank" >
                                            <FontAwesomeIcon icon={['fas', 'envelope']} /> <span className="hide-on-small-only">{email}</span><span className="hide-on-med-and-up">Email me</span>
                                        </a>
                                    </div>
                                    <span className="col xl6 l6 m6 s6 github">
                                        <a href={github} target="_blank" >
                                            <FontAwesomeIcon icon={['fab', 'github']} /> <span className="hide-on-small-only">{github}</span><span className="hide-on-med-and-up">Github</span>
                                        </a>
                                    </span>
                                    <div className="col xl6 l6 m6 s6 linkedin">
                                        <a href={linkedin} target="_blank" >
                                            <FontAwesomeIcon icon={['fab', 'linkedin']} /> <span className="hide-on-small-only">{linkedin}</span><span className="hide-on-med-and-up">Linkedin</span>
                                        </a>
                                    </div>
                                    <div className="col xl12 l12 m12 s12 address">
                                        <a href="/">          
                                            <FontAwesomeIcon icon={['fas', 'map-marker-alt']} /> <span>{address}</span>
                                        </a>
                                    </div>
                                </span>
                            </span>
                        </div>
                        <div className="row">
                            <div className="col xl12 l12 m12 s12 desc">
                                <p>{desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Intro;
