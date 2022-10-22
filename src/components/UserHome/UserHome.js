import IconTextButton from "../../elements/IconTextButton/IconTextButton";
import playIcon from "../../parts/play-button-round-icon.png";
const UserHome = () => {

    const handleSearch = (event) => {
        event.preventDefault();
        console.log('searching...');
    }

    return (
        <div className="container">
            <h1>User Home</h1>
            <form onSubmit={handleSearch}>
                <input className="search-songs" onChange={null/* TODO*/} placeholder="Suggest a song" />
            </form>

            <IconTextButton icon={playIcon} text="Play" />
        </div>
    );
}

export default UserHome;