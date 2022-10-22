import React from "react";
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
    render() {
        return (
            <div class="homepage">
                <h1>Homepage</h1>
                <button>
                    <Link to="/createEvent">Create Event</Link>
                </button>
                <button>
                    <Link to="/joinEvent">Join Event</Link>
                </button>
            </div>
        );
    }
}

export default Homepage;