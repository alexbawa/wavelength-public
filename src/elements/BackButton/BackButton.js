import { useNavigate } from 'react-router-dom';
import './BackButton.scss';
import backButton from '../../parts/backButton.png';

const BackButton = (props) => {

    let navigate = useNavigate();
    const routeChange = () => {
        navigate(props.link);
    }

    return (
        <img src={backButton} className="back-button" alt="back" onClick={routeChange} />
    );
};

export default BackButton;