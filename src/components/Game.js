// Styling, Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

const Game = ({name, released, image, id}) => {
  // Load Details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };
  
  return (
    <StyledGames onClick={loadDetailHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGames>
  );
};
const StyledGames = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  text-align: center;
  overflow: hidden;
  img {
    height: 40vh;
    width: 100%;
    object-fit: cover;
  }
`;

export default Game;