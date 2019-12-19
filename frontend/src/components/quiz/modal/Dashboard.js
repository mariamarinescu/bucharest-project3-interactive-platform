import React, { Component } from "react";
import ReactDOM from "react-dom";
import QuizModal from './QuizModal';

class Dashboard extends Component {
  state = { show: true };
  showHideClassName = this.state.show ? "modal display-block" : "modal display-none";
  // showModal = () => {
  //   this.setState({ show: true});
  // };

  hideModal = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>

        <h1>React Modal</h1>
        <div className={this.showHideClassName}>
          <section className="modal-main">

            <button onClick={handleClose}>close</button>
          </section>
        </div>
      </div>
    );
  }
}

export default Dashboard;