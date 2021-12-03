import axios from "axios";
import { popularGameURL, upcomingGameURL, newGameURL, searchGameURL } from "../api";

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

export const fetchSearch = (gameName) => async (dispatch) => {
    const searchGames = await axios.get(searchGameURL(gameName));
    dispatch({
        type: 'FETCH_SEARCH',
        payload: {
            searched: searchGames.data.results,
        }
    });
}