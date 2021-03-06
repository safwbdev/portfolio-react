import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Modal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
  }

  render() {
    return (
      <div>
        <div ref={Modal => { this.Modal = Modal;}} id={this.props.getId} className="modal work">
        <div className="modal-footer">
            <span className="modal-close waves-effect waves-green btn-flat">
              x
            </span>
          </div>
          <div className="modal-content desc">
            <h5>Tasks & Responsibilities at <div>{this.props.company}</div></h5>
            {this.props.desc}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
