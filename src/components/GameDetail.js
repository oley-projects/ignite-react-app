import { imageResize } from "../util";
// Styling, Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate }  from "react-router-dom";
import { useSelector } from "react-redux";

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
            </div>
            <Info>
              <h3>Platforms</h3>
              <Platforms>
                {game.platforms.map(data => (
                  <h3 key={data.platform.id}>{data.platform.name}</h3>
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
  img {
    width: 100%;
  }
`;
const Stats = styled(motion.div)`
  display: flex;
  justify-content: space-between;
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;
const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

export default GameDetail;