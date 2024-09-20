import { removeMovie, loadMovie } from "../features/MovieSlice";
import axios from "../../utils/Axios";

export const asyncloadmovie = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/movie/${id}`);
    const externalid = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const watchproviders = await axios.get(`/movie/${id}/watch/providers`);
    let theultimateddetails = {
      detail: detail.data,
      externalid: externalid.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      videos: videos.data.results.find(
        (m) => m.type === "Trailer" || m.type === "Teaser"
      ),
      watchproviders:
        watchproviders.data.results.IN || watchproviders.data.results.US,
    };
    dispatch(loadMovie(theultimateddetails));
    console.log(theultimateddetails);
  } catch (error) {
    console.log(error);
  }
};
