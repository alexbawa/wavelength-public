import ReactCodeInput from 'react-code-input';
import Input from 'react-phone-number-input/input';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { joinEvent } from '../../util/firebase';
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

    setCode(code) {
        this.setState({
            code: code
        });
        console.log(code)

    }

    setPhone(phone) {
        this.setState({
            phone: phone
        });
        console.log(phone)
    }

    render() {
        return (
            <div className="join-event-page">
                <h1>Join Event Page</h1>
                <div className="container">
                <ReactCodeInput
                    id="pinCode"
                    type="number"
                    fields={5}
                    onChange={this.setCode}
                    value={this.state.code}
                />
                <Input country="US" id="join-event-phone" className="phone-input" onChange={this.setPhone} />
                {/* error={code ? (isValidPhoneNumber(code) ? null : 'Invalid phone number') : 'Phone number required'}
                TODO: phone number validation */}
                
                <button onClick={() => {joinEvent(this.state.code, this.state.phone).then((res) => console.log(res))}}>
                    <Link to="/userHome">Join Event</Link>
                </button>
    
                </div>
            </div>
        );
    }
}

export default JoinEventPage;