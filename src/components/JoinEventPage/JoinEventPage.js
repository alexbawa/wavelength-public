import ReactCodeInput from 'react-code-input';
import Input from 'react-phone-number-input/input';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './JoinEventPage.scss';

const JoinEventPage = () => {
    const [code, setCode] = useState(0);
    const [phone, setPhone] = useState(0);
    return (
        <div className="join-event-page">
            <h1>Join Event Page</h1>
            <div className="container">


            <ReactCodeInput className="code-input" type="number" fields={5} onChange={setCode} />
            <Input country="US" className="phone-input" onChange={setPhone} />
            {/* error={code ? (isValidPhoneNumber(code) ? null : 'Invalid phone number') : 'Phone number required'}
            TODO: phone number validation */}

            <button>
                <Link to="/userHome">Join Event</Link>
            </button>

            </div>
        </div>
    );
}

export default JoinEventPage;