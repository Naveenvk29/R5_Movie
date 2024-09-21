import axios from "../../utils/Axios";
import { loadPerson, removePerson } from "../features/PersonSlice";

export const asyncloadperson = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalid = await axios.get(`/person/${id}/external_ids`);
    const combinadCredits = await axios.get(`/person/${id}/combined_credits`);
    const tvCredits = await axios.get(`/person/${id}/tv_credits`);
    const movieCredits = await axios.get(`/person/${id}/movie_credits`);
    const images = await axios.get(`/person/${id}/images`);

    let theultimateddetails = {
      detail: detail.data,
      externalid: externalid.data,
      combinadCredits: combinadCredits.data.cast,
      tvCredits: tvCredits.data.cast,
      movieCredits: movieCredits.data.cast,
      images: images.data.profiles,
    };

    dispatch(loadPerson(theultimateddetails));
    console.log(theultimateddetails);
  } catch (error) {
    console.log(error);
  }
};
