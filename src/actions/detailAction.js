import axios from "axios";
import { gameDetailURL, gameScreenshotURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetailURL(id));
  const screenshotData = await axios.get(gameScreenshotURL(id));

  dispatch({
    type: 'GET_DETAIL',
    payload: {
      game: detailData.data,
      screen: screenshotData.data,
    },
  });
};