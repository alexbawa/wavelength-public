import React from "react";
import { Link } from 'react-router-dom';
import './Homepage.scss';

class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: "join"
        }

        this.updateSelection = this.updateSelection.bind(this);
    }

    updateSelection(event) {
        event.preventDefault();
        if(event.target.id != this.state.selected) {
            this.setState({
                selected: event.target.id
            });
        }
    }

    renderSelection() {
        let joinClasses = "selection left";
        let createClasses = "selection right";

        if(this.state.selected == "join") {
            joinClasses += " selected";
        } else {
            createClasses += " selected";
        }
        return (
            <div className="selection-container">
                <div onClick={this.updateSelection} id="join" className={joinClasses}><p>Join</p></div>
                <div onClick={this.updateSelection} id="create" className={createClasses}><p>Create</p></div>
            </div>
        );
    }
    render() {
        return (
           <div className="homepage">
                <img className="homepage-logo" src=""></img>
                <h4 className="homepage-subtitle">Join or create an event?</h4>
                <p className="homepage-blurb">Make a selection and click the arrow.</p>
                {this.renderSelection()}
                <img className="homepage-arrow" src=""></img>
           </div>
        );
    }
}

export default Homepage;