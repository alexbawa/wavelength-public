import { useNavigate } from 'react-router-dom';
import './IconTextButton.scss';

const IconTextButton = (props) => {

    let navigate = useNavigate();
    const routeChange = () => {
        navigate(props.link);
    }

    return (
        <div>
            <button className="icon-text-button" onClick={routeChange}>
                <img src={props.icon} alt="alttext"></img>
                <p>{props.text}</p>
            </button>
        </div>
    );
};

export default IconTextButton;