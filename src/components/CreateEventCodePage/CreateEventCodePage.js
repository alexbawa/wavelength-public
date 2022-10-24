import React from "react";
import ProgressDots from "../ProgressDots/ProgressDots";
import './CreateEventCodePage.scss';


class CreateEventCodePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container create-event-code-page">
                <h2 className="create-event-code-title">Event Code</h2>
                <ProgressDots filled={3} total={3}/>
            </div>
        );
    }
}

export default CreateEventCodePage;