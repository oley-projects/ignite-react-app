// Styling, Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";

const Game = ({name, released, image, id}) => {
  // Load Details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };
  
  return (
    <StyledGames onClick={loadDetailHandler}>
      <Link to={`/game/${id}`} >
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
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