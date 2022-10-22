import IconTextButton from "../../elements/IconTextButton/IconTextButton";
import playIcon from "../../parts/play.png";
import musicIcon from "../../parts/music.png";
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

            <IconTextButton icon={playIcon} text="See queue" link="/queue" />
            <IconTextButton icon={musicIcon} text="Vote on songs" link="/vote" />
        </div>
    );
}

export default UserHome;