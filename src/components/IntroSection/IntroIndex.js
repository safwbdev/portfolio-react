import React from 'react'
import { db } from "../../firebase";
import Description from './Description';
import Profile from './Profile';

class IntroIndex extends React.Component{

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
            image:null,
            desc: null,
        }
    }
    componentDidMount(){
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
                    image: data[0].image,
                    desc: data[0].desc,
                })
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col xl12 l12 m12 s12 intro-section">
                    <Profile 
                        image={this.state.image}
                        fName={this.state.fName}
                        designation={this.state.designation}
                        tel={this.state.tel}
                        email={this.state.email}
                        github={this.state.github}
                        address={this.state.address} />
                    <Description desc={this.state.desc} />
                </div>
            </div>
        )
    }
};

export default IntroIndex;