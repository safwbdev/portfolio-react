import React from 'react'

const Intro = props => (
    <div className="row">
        <div class="col xl12 l12 m12 s12 intro-section">
            <div className="container section">
            <div className="row">
                <div class="col xl3 l3 m12 s12 profile-pic" >
                    <img src={props.image} />
                </div>
                <div class="col xl9 l9 m12 s12">
                    <div class="col s12">
                        <h1>{props.fullName}</h1>
                        <h3>{props.designation}</h3>
                    </div>
                    <div class="col s12 contact-details">
                        <div class="col xl6 l6 m6 s6 phone">
                            <a href="option.link" target="_blank" >          
                                icon <span class="hide-on-small-only">{ props.phone }</span><span class="hide-on-med-and-up">Call me</span>
                            </a>
                        </div>
                        <div class="col xl6 l6 m6 s6 email">
                            <a href="option.link" target="_blank" >          
                                icon <span class="hide-on-small-only">{ props.email }</span><span class="hide-on-med-and-up">Email me</span>
                            </a>
                        </div>
                        <div class="col xl6 l6 m6 s6 github">
                            <a href="option.link" target="_blank" >
                            <i class="fab fa-github"></i> <span>{ props.github }</span><span class="hide-on-med-and-up">github</span>
                            </a>
                        </div>
                        <div class="col xl6 l6 m6 s6 linkedin">
                            <a href="option.link" target="_blank" >
                                icon <span>{ props.linkedin }</span><span class="hide-on-med-and-up">linkedin</span>
                            </a>
                        </div>
                        <div class="col xl12 l12 m12 s12 address">
                            <a>          
                                icon <span>{ props.address }</span><span class="hide-on-med-and-up">adress</span>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
                <div className="row">
                <div class="col xl12 l12 m12 s12 desc">{props.desc}</div>
                </div>
            </div>
        </div>
    </div>
)

export default Intro;
