import { removeTv, loadTv } from "../features/TvSlice";
import axios from "../../utils/Axios";

export const asyncloadTv = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/tv/${id}`);
    const externalid = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const translations = await axios.get(`/tv/${id}/translations`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const watchproviders = await axios.get(`/tv/${id}/watch/providers`);
    let theultimateddetails = {
      detail: detail.data,
      externalid: externalid.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      translations: translations.data.translations.map((m) => m.name),
      videos: videos.data.results.find(
        (m) => m.type === "Trailer" || m.type === "Teaser"
      ),
      watchproviders:
        watchproviders.data.results.IN || watchproviders.data.results.US,
    };

    dispatch(loadTv(theultimateddetails));
  } catch (error) {
    console.log(error);
  }
};
