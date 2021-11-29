// Styling, Animation
import styled from "styled-components";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";

const GameDetail = () => {
  const {game, screen } = useSelector((state) => state.detail);

  return (
    <CardShadow>
      <Detail>
        <div className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Raiting: {game.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {game.platforms.map(data => (
                <h3 key={data.platform.id}>{data.platform.name}</h3>
              ))}
            </div>
          </div>
        </div>
        <div className="media">
          <img src={game.background_image} alt={game.slug} />
        </div>
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
  padding: 2rem 20rem;
  border-radius: 1rem;
  background-color: #fff;
  position: absolute;
  left: 10%;
  color: #000;
  img {
    width: 100%;
  }
`;

export default GameDetail;