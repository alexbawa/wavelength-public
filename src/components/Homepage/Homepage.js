import React from "react";
import './Homepage.scss';
import RightArrow from "./right-arrow.png"
import Logo from "./filler-logo.png"
const coreURL = "http://localhost:3000"

class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: "join"
        }

        this.updateSelection = this.updateSelection.bind(this);
        this.executeSelection = this.executeSelection.bind(this);
    }

    executeSelection() {
        switch (this.state.selected) {
            case "join":
                window.location = coreURL + "/joinEvent";
                break;
            case "create":
                window.location = coreURL + "/createEvent";
                break;
        }
    }

    updateSelection(event) {
        event.preventDefault();
        if (event.target.id != this.state.selected) {
            this.setState({
                selected: event.target.id
            });
        }
    }

    renderSelection() {
        let joinClasses = "selection left";
        let createClasses = "selection right";

        if (this.state.selected == "join") {
            joinClasses += " selected";
        } else {
            createClasses += " selected";
        }
        return (
            <div className="selection-container">
                <div onClick={this.updateSelection} id="join" className={joinClasses}>
                    Join
                </div>
                <div onClick={this.updateSelection} id="create" className={createClasses}>
                    Create
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="homepage">
                <img className="homepage-logo" src={Logo}></img>
                <h4 className="homepage-subtitle">Join or create an event?</h4>
                <p className="homepage-blurb">Make a selection and click the arrow.</p>
                {this.renderSelection()}
                <img onClick={this.executeSelection} className="homepage-arrow" src={RightArrow}></img>
            </div>
        );
    }
}

export default Homepage;