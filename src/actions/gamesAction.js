import axios from "axios";
import { popularGameURL, upcomingGameURL, newGameURL } from "../api";

// Action creator
export const loadGames = () => async (dispatch) => {
    const popularData = await axios.get(popularGameURL());
    const upcomingData = await axios.get(upcomingGameURL());
    const newGameData = await axios.get(newGameURL());
    dispatch({
        type: 'FETCH_GAME',
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGameData.data.results,
        },
    });
}