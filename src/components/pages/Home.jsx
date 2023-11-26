import BackgroundImg from "../../assets/Img/bg_light 1.png";
import Paribahan_logo from "../../assets/Img/paribahan_logo 1.png";
import Review_avatar from "../../assets/Img/review_avatar.png";

const Home = () => {
    return (
        <div className="relative">
            <img className="w-full h-auto z-0" src={BackgroundImg} alt="BackgroundImg" />
            <nav className="absolute top-4 left-4">
                <img className="w-20 h-auto" src={Paribahan_logo} alt="Paribahan_logo" />
                <img className="w-10 h-auto ml-4" src={Review_avatar} alt="Review_avatar" />
            </nav>
        </div>
    );
}

export default Home;