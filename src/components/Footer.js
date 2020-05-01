import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = (props) => (
  <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col l3 m3 s3 center">
          <a href={"tel:" + props.tel}>
            <div className="btn-floating btn-large">
              <FontAwesomeIcon icon={["fas", "phone"]} />
            </div>
            <p className="hide-on-small-only">{props.tel}</p>
          </a>
        </div>
        <div className="col l3 m3 s3 center">
          <a href={"mailto:" + props.email}>
            <div className="btn-floating btn-large">
              <FontAwesomeIcon icon={["fas", "envelope"]} />
            </div>
            <p className="hide-on-small-only">{props.email}</p>
          </a>
        </div>
        <div className="col l3 m3 s3 center">
          <a href={props.github}>
            <div className="btn-floating btn-large">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </div>
            <p className="hide-on-small-only">Github</p>
          </a>
        </div>
        <div className="col l3 m3 s63center">
          <a href={props.linkedin}>
            <div className="btn-floating btn-large">
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </div>
            <p className="hide-on-small-only">linkedIn</p>
          </a>
        </div>
      </div>
    </div>
    <div className="footer-copyright center">
      <div className="container">© 2020</div>
    </div>
  </footer>
);
export default Footer;
