import React from "react";
import './ProgressDots.scss';

class ProgressDots extends React.Component {
    renderDots() {
        let dots = []
        for(let dot = 1; dot <= this.props.total; dot++) {
            if(dot == this.props.filled) {
                dots.push(<div key={dot} className="dot filled"></div>)
            } else {
                dots.push(<div key={dot} className="dot empty"></div>)
            }
        }
        return dots;
    }
    render() {
        return (
            <div className="progress-bar">
                {this.renderDots()}
            </div>
        )
    }
}

export default ProgressDots;