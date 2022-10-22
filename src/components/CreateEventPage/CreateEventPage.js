import React from "react";
import SpotifyInterface from "../../util/SpotifyInterface";

class CreateEventPage extends React.Component {
    async componentDidMount() {
        let token = await SpotifyInterface.getToken();
        this.props.setToken(token);
    }

    render() {
        return (
            <div className="create-event-page">
                <h1>Create Event Page</h1>
            </div>
        );
    }
}

export default CreateEventPage;