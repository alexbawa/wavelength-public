import ReactCodeInput from 'react-code-input';
import Input from 'react-phone-number-input/input';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { Link } from 'react-router-dom';
import React from 'react';
import './JoinEventPage.scss';

class JoinEventPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: 0,
            phone: null,
        }

        this.setCode = this.setCode.bind(this);
        this.setPhone = this.setPhone.bind(this);
    }

    setCode() {
        let code = document.getElementById("join-event-code");
        this.setState({
            code: code
        });
    }

    setPhone() {
        let phone = document.getElementById("join-event-phone").value;
        this.setState({
            phone: phone
        });
    }

    render() {
        return (
            <div className="join-event-page">
                <h1>Join Event Page</h1>
                <div className="container">
    
                <ReactCodeInput className="code-input" type="number" fields={5} id="join-event-code" onChange={this.setCode}/>
                <Input country="US" id="join-event-phone" className="phone-input" onChange={this.setPhone} />
                {/* error={code ? (isValidPhoneNumber(code) ? null : 'Invalid phone number') : 'Phone number required'}
                TODO: phone number validation */}
    
                <button>
                    <Link to="/userHome">Join Event</Link>
                </button>
    
                </div>
            </div>
        );
    }
}

export default JoinEventPage;