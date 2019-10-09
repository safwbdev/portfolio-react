import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { db } from "../firebase";
import profile_image from './../assets/profile.jpg';
import desc_image from './../assets/desc_bg.jpeg';

class Intro extends React.Component{

    constructor(){
        super();
        this.state = {
            fullName: null,
            address: null,
            dob: null,
            email: null,
            tel: null,
            github:null,
            linkedin:null,
            desc: null,   
        }
    }
    componentDidMount() {
        db.collection("personal")
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
                this.setState({
                    fName:data[0].fullName,
                    designation: data[0].designation,
                    tel: data[0].tel,
                    email: data[0].email,
                    address: data[0].address,
                    github: data[0].githubUrl,
                    linkedin: data[0].linkedinUrl,
                    desc: data[0].desc,
                })
        });
    }
    
    render(){
        var descbgStyle = {
            backgroundImage: `url(${desc_image})`
          };
        return (
            <div className="row">
                <div className="col xl12 l12 m12 s12 intro-section">
                    <div className="container section">
                        <div className="row">
                            <div className="col xl3 l4 m12 s12 profile-pic">
                                <img src={profile_image} alt="" />
                            </div>
                            <div className="col xl9 l8 m12 s12">
                                <div className="col s12 ">
                                    <h1>
                                        {this.state.fName} {this.state.lName}
                                    </h1> 
                                    <h3>
                                        {this.state.designation}
                                    </h3>
                                </div>
                                <div className="col xl12 l12 m12 s12 contact-details">
                                    <div className="col xl6 l6 m6 s6 phone">
                                        <a href={"tel:" + this.state.tel} >
                                            <FontAwesomeIcon icon={['fas', 'phone']} /> <span className="hide-on-small-only">{this.state.tel}</span><span className="hide-on-med-and-up">Call me</span>
                                        </a>
                                    </div>
                                    <div className="col xl6 l6 m6 s6 email">
                                        <a href={"mailto:" + this.state.email} >
                                            <FontAwesomeIcon icon={['fas', 'envelope']} /> <span className="hide-on-small-only">{this.state.email}</span><span className="hide-on-med-and-up">Email me</span>
                                        </a>
                                    </div>
                                    <div className="col xl6 l6 m6 s6 github">
                                        <a href={this.state.github} target="_blank" rel="noopener noreferrer" >
                                            <FontAwesomeIcon icon={['fab', 'github']} /> <span className="hide-on-small-only">See my&nbsp;</span><span>Github</span>
                                        </a>
                                    </div>
                                    <div className="col xl6 l6 m6 s6 linkedin">
                                        <a href={this.state.linkedin} target="_blank" rel="noopener noreferrer" >
                                            <FontAwesomeIcon icon={['fab', 'linkedin']} /> <span className="hide-on-small-only">Check out my&nbsp;</span><span >Linkedin</span>
                                        </a>
                                    </div>
                                    <div className="col xl12 l12 m12 s12 address">
                                        <a href="/">          
                                            <FontAwesomeIcon icon={['fas', 'map-marker-alt']} /> <span>{this.state.address}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col xl12 l12 m12 s12 desc wow fadeIn" 
                                data-wow-duration="0.5s" 
                                data-wow-delay="2s">
                                <p>{this.state.desc}</p>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="col xl12 l12 m12 s12 desc-section" style={ descbgStyle }>
                    <div className="container section">
                        <div className="row">
                        <div className="col xl12 l12 m12 s12 desc " >
                                <p>{this.state.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

};

export default Intro;
