import React from "react";
import ProgressDots from "../ProgressDots/ProgressDots";
//import './CreateEventCodePage.scss';


class CreateEventCodePage extends React.Component {

    render() {
        return (
            <div className="create-event-code-page">
                <h2 className="create-event-code-title">Event Code</h2>
                <ProgressDots filled={2} total={3}/>
            </div>
        );
    }
}

export default CreateEventCodePage;