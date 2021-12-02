import { imageResize } from "../util";
// Styling, Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate }  from "react-router-dom";
import { useSelector } from "react-redux";
// Platform Images
import apple from "../img/apple.svg"
import nintendo from "../img/nintendo.svg"
import playstation from "../img/playstation.svg"
import steam from "../img/steam.svg"
import xbox from "../img/xbox.svg"
import gamepad from "../img/gamepad.svg"
// Star Images
import starEmpty from "../img/star-empty.svg";
import starFull from "../img/star-full.svg";
import StarVariable from "./StarVariable";

const GameDetail = ({ pathID }) => {
  const navigate = useNavigate();

  // Exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };
  // Get Stars
  const getStars = () => {
    const stars = [];
    const rating = game.rating;
    const ratingWhole = Math.floor(rating);
    const ratingCeil = Math.ceil(rating);
    const ratingPercentage = `${Math.floor((rating - ratingWhole) * 100)}%`;
    for (let i = 0; i < 5; i++) {
      if(i < ratingWhole) {
        stars.push(<img key={i} src={starFull} alt={rating}/>);
      } else if(i === ratingWhole && (rating % 1) === 0) {
        stars.push(<img key={i} src={starEmpty} alt={rating}/>)
      } else if(i === ratingWhole && (i + 1) === ratingCeil) {
        stars.push(StarVariable(ratingPercentage, i))
      } else {
        stars.push(<img key={i} src={starEmpty} alt={rating}/>);
      }
    }
    return stars;
  }

  // Platforms
  const getPlatform = (platform) => {
    switch(platform){
      case "iOS": 
        return apple;
      case "Nintendo Switch":
        return nintendo;
      case "PlayStation 4":
        return playstation;
      case "PlayStation 5":
        return playstation;
      case "PC":
        return steam;
      case "Xbox One":
        return xbox;
      case "Xbox Series S/X":
        return xbox;
      default:
        return gamepad;
    }
  }

  const {game, screen, isLoading } = useSelector((state) => state.detail);

  return (
    <>
    { !isLoading && (
      <CardShadow className="shadow" onClick={exitDetailHandler}>
        <Detail layoutId={pathID}>
          <Stats>
            <div className="rating">
              <motion.h3 layoutId={`title ${pathID}`}>{game.name}</motion.h3>
              <p>Rating: {game.rating}</p>
              {getStars()}
            </div>
            <Info>
              <h3>Platforms</h3>
              <Platforms>
                {game.platforms.map(data => (
                  <div key={data.platform.id} className="platform">
                    <img src={getPlatform(data.platform.name)} alt={data.platform.name}/>
                    <div className="hidden">
                      <p>{data.platform.name}</p>
                    </div>
                  </div>
                ))}
              </Platforms>
            </Info>
          </Stats>
          <Media>
            <motion.img layoutId={`image ${pathID}`} src={imageResize(game.background_image, 1280)} alt={game.slug} />
          </Media>
          <div className="description">
            <p>{game.description_raw}</p>
          </div>
          <div className="gallery">
            {screen.results.map(screenEl => (
              <img src={screenEl.image} alt="screen" key={screenEl.id} />
            ))}
          </div>
        </Detail>
      </CardShadow>
    )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar{
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb{
    background-color: #888;
    border-radius: 0.5rem;
  }
  &::-webkit-scrollbar-track{
    background-color: #fff;
  }
`;
const Detail = styled(motion.div)`
  width: 80%;
  padding: 2rem 5rem;
  border-radius: 1rem;
  background-color: #fff;
  position: absolute;
  left: 10%;
  color: #000;
  z-index: 10;
  img {
    width: 100%;
  }
`;
const Stats = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  .rating img, .rating svg {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  .platform {
    position: relative;
  }
  img {
    margin: 0 1.5rem;
    width: 50%;
  }
  .hidden {
    opacity: 0;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    transition: opacity 0.5s ease;
  }
  .hidden p {
    line-height: 140%;
  }
  .platform:hover > .hidden {
    opacity: 0.7;
  }
`;
const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

export default GameDetail;