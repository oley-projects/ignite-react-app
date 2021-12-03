// Styling, Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { scaleAnim } from "../animations";
// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";

import { imageResize } from "../util";

const Game = ({name, released, image, id}) => {
  const stringPathID = id.toString();
  // Load Details
  const dispatch = useDispatch();
  const loadDetailHandler = ()  => {
    dispatch(loadDetail(id));
    document.body.style.overflow = "hidden";
  };
  
  return (
    <StyledGames 
      variants={scaleAnim}
      initial="hidden"
      animate="show"
      layoutId={stringPathID}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`} >
      <motion.h3 layoutId={`title ${stringPathID}`}>{name}</motion.h3>
      <p>{released}</p>
      {image && (
        <motion.img layoutId={`image ${stringPathID}`} src={imageResize(image, 640)} alt={name} />
      )}
      </Link>
    </StyledGames>
  );
};
const StyledGames = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
  img {
    height: 40vh;
    width: 100%;
    object-fit: cover;
  }
`;

export default Game;