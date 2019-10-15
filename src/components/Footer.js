import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = props => (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l3 m3 s12 center">
            <a href={"tel:" +props.tel} class="">
              <div className="btn-floating btn-large">
                <FontAwesomeIcon icon={['fas', 'phone']} />
              </div>
              <p>{props.tel}</p>
            </a>
          </div>
          <div className="col l3 m3 s12 center">
            <a href={"mailto:" +props.email} class="">
              <div className="btn-floating btn-large">
                <FontAwesomeIcon icon={['fas', 'envelope']} />
              </div>
              <p>{props.email}</p>
            </a>
          </div>
          <div className="col l3 m3 s12 center">
            <a href={props.github} class="">
              <div className="btn-floating btn-large">
              <FontAwesomeIcon icon={['fab', 'github']} />
              </div>
              <p>Github</p>
            </a>
          </div>
          <div className="col l3 m3 s12 center">
            <a href={props.linkedin} class="">
              <div className="btn-floating btn-large">
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </div>
              <p>linkedIn</p>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright center">
        <div className="container">
        © 2019
        </div>
      </div>
    </footer>
)
export default Footer