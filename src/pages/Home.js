import { useEffect } from "react";
import { useLocation } from "react-router";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Styling, Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
// Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";

const Home = () => {
  // Get current location
  const location = useLocation();
  const pathID = location.pathname.split("/")[2];
  // FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  // Get games data
  const { popular, upcoming, newGames } = useSelector((state) => state.games);
  
  return (
    <GameList>
      <AnimateSharedLayout>
        <AnimatePresence>
          {pathID && <GameDetail pathID={pathID} />}
        </AnimatePresence>
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              key={game.id}
              id={game.id}
              name={game.name}
              released={game.released}
              image={game.background_image}
            />

          ))}
        </Games>
        
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              key={game.id}
              id={game.id}
              name={game.name}
              released={game.released}
              image={game.background_image}
            />
          ))}
        </Games>

        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              key={game.id}
              id={game.id}
              name={game.name}
              released={game.released}
              image={game.background_image}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0 5rem 5rem;
  h2 {
    padding: 5rem 0rem 5rem 2rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 4rem;
`;

export default Home;
