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
            step: 1,
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

        let step;
        if (this.state.step == 1){
            step =  <div>
                <h1>Enter Event Code</h1>
                <h2>You've got taste.</h2>
                <div className="container">
                <ReactCodeInput
                    id="pinCode"
                    type="number"
                    fields={5}
                    onChange={this.setCode}
                    value={this.state.code}
                />
                </div>
                </div>
        } else {
            step =  <div>
                <h1>Enter Event Code</h1>
                <h2>Show 'em off.</h2>
                <div className="container">
                <Input country="US" id="join-event-phone" className="phone-input" onChange={this.setPhone} />
                </div>
                </div>
        }
        return (
            <div className="join-event-page">
                
                {step}
                <button onClick={() => {this.setState({
                    step: this.state.step+1
                })}}>
                    Next
                </button>
                <button onClick={() => {joinEvent(this.state.code, this.state.phone).then((res) => console.log(res))}}>
                    <Link to="/userHome">Join Event</Link>
                </button>
    
            
            </div>
        );
    }
}

export default JoinEventPage;