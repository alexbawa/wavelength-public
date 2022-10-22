import { Component } from 'react';
class IconTextButton extends Component {
    render() {
        return (
            <div className="icon-text-button">
                <button>
                    {this.props.icon}
                    <p>{this.props.text}</p>
                </button>
            </div>
        );
    }
};

export default IconTextButton;