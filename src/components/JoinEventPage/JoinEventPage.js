import ReactCodeInput from 'react-code-input';
import Input from 'react-phone-number-input/input';
import { isValidPhoneNumber } from 'react-phone-number-input';
import NumberPad from '../NumberPad/NumberPad';
import { joinEvent } from '../../util/firebase';
import { Link } from 'react-router-dom';
import React from 'react';
import './JoinEventPage.scss';
import backIcon from '../../parts/left-vector.png';
import nextIcon from '../../parts/right-vector.png';
const coreURL = "http://localhost:3000"


class JoinEventPage extends React.Component {

    
    constructor(props) {
        super(props);
        this.state = {
            code: "",
            phone: "",
            step: 1,
            
        }
        this.setNumberPad = this.setNumberPad.bind(this);
        this.topContent = this.topContent.bind(this);
        this.bottomContent = this.bottomContent.bind(this);

    }


    setNumberPad(character){
        var step = this.state.step;
        if (step == 1){
            var joinCode = this.state.code;
            if (character == "×"){
                this.setState({
                    code: joinCode.substring(0,joinCode.length-1)
                });
            } else if (joinCode.length < 5){
                this.setState({
                    code: joinCode + character
                });
            }

        } else {
            var phoneNum = this.state.phone;
            if (character == "×"){
                this.setState({
                    phone: phoneNum.substring(0,phoneNum.length-1),
                    step: 2
                });
            } else if (phoneNum.length < 10){
                this.setState({
                    phone: phoneNum + character,

                });
            } if (phoneNum.length == 9) {
                this.setState({
                    step: 3
                });
            }
        }
    }

    topContent(){
        if (this.state.step == 1){
            return (  <div>
                        <h1>Enter Event Code</h1>
                        <h2>You've got taste.</h2>
                        <div className='code-display-container'>
                            <div className='code-cell'>
                                <text>{this.state.code.charAt(0)}</text>
                            </div>
                            <div className='code-cell'>
                                <text>{this.state.code.charAt(1)}</text>
                            </div>
                            <div className='code-cell'>
                                <text>{this.state.code.charAt(2)}</text>
                            </div>
                            <div className='code-cell'>
                                <text>{this.state.code.charAt(3)}</text>
                            </div>
                            <div className='code-cell'>
                                <text>{this.state.code.charAt(4)}</text>
                            </div>
                        </div>
                    </div>
            );
        } else {
            return ( <div>
                        <h1>Enter Phone Number</h1>
                        <h2>Show 'em off.</h2>
                        <div className='phone-display'>
                            <text>{formatPhoneNumber(this.state.phone)}</text>
                        </div>

                    </div>
            );
        }
    }

    bottomContent(){
        if (this.state.step == 1){
            return (
                <div className='bottom-bar-container'>
                    <button className='bottom-icon-button disabled'>
                        <img src={backIcon}></img>
                    </button>
                    <div style={{display: 'flex'}}>
                        <div className='filled-circle'/>
                        <div className='open-circle'/>
                    </div>
                    <button className='bottom-icon-button' onClick={() => this.setState({
                    step: this.state.step+1
                })}>
                        <img src={nextIcon}></img>
                    </button>
                </div>
            );
        } else if (this.state.step == 2){
            return (
                <div className='bottom-bar-container'>
                    <button className='bottom-icon-button' onClick={() => this.setState({
                        step: this.state.step-1
                    })}>
                        <img src={backIcon}></img>
                    </button>
                    <div style={{display: 'flex'}}>
                        <div className='open-circle'/>
                        <div className='filled-circle'/>
                    </div>
                    <button className='bottom-icon-button disabled'>
                        <img src={nextIcon}></img>
                    </button>
                </div>
            );
        } else {
            return (
            <div className='bottom-bar-container'>
                <div/>
                <button className='go-button' onClick={() => {joinEvent(this.state.code, this.state.phone).then((res) => 
                    {
                        console.log(res);
                        window.location = coreURL + "/userHome/?token="+res;
                    
                    }
                    
                    )}}>
                
                </button>
                <div/>
            </div>
            );
        }

    }

    

    render() {

        
        return (
            <div className="join-event-page">
                
                <this.topContent/>
                <NumberPad
                    onChange={(value) => {this.setNumberPad(value)}}
                />

                <this.bottomContent/>
                
        
    
            
            </div>
        );
    }
}

function formatPhoneNumber(value) {
    // if input value is falsy eg if the user deletes the input, then just return
    if (!value) return value;
  
    // clean the input for any non-digit values.
    const phoneNumber = value.replace(/[^\d]/g, '');
  
    // phoneNumberLength is used to know when to apply our formatting for the phone number
    const phoneNumberLength = phoneNumber.length;
  
    // we need to return the value with no formatting if its less then four digits
    // this is to avoid weird behavior that occurs if you  format the area code to early
  
    if (phoneNumberLength < 4) return phoneNumber;
  
    // if phoneNumberLength is greater than 4 and less the 7 we start to return
    // the formatted number
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
  
    // finally, if the phoneNumberLength is greater then seven, we add the last
    // bit of formatting and return it.
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  }

export default JoinEventPage;