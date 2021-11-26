import axios from "axios";
import { popularGameURL } from "../api";

// Action creator
export const loadGames = () => async (dispatch) => {
    const popularData = await axios.get(popularGameURL());
    dispatch({
        type: 'FETCH_GAME',
        payload: {
            popular: popularData.data.results,
        },
    });
}