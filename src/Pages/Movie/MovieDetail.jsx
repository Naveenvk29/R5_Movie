import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { asyncloadmovie } from "../../redux/actions/movieAction";
import { removeMovie } from "../../redux/features/MovieSlice";
import Loader from "../../Components/Loader";

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.movie);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => dispatch(removeMovie());
  }, []);

  return info ? (
    <div
      style={{
        backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.2), 
        rgba(0, 0, 0, 0.5), 
        rgba(0, 0, 0, 0.8)
      ), url(https://image.tmdb.org/t/p/original${info.detail.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "top 10",
      }}
      className="w-screen h-screen px-[10vw]"
    >
      <nav className="w-full text-zinc-200 flex gap-10 text-2xl mt-5 ">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556cd] mr-5 ri-arrow-left-line"
        ></Link>

        <a href={info.detail.homepage} target="_blank">
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          href={`https://en.wikipedia.org/wiki/${info.externalid.wikidata_id}`}
          target="_blank"
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
          target="_blank"
        >
          IMDB
        </a>
      </nav>
    </div>
  ) : (
    <Loader />
  );
};

export default MovieDetail;
