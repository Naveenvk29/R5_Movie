import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  useParams,
  useNavigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import { asyncloadTv } from "../../redux/actions/TvAction";
import { removeTv } from "../../redux/features/TvSlice";
import Loader from "../../Components/Loader";
import HorizontalCards from "../Home/HorizontalCards";
import NoImage from "../../assets/noimage.jpg";
const TvshowDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.tv);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(asyncloadTv(id));
    return () => dispatch(removeTv());
  }, [id]);

  return info ? (
    <div
      style={{
        backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.2), 
        rgba(0, 0, 0, 0.5), 
        rgba(0, 0, 0, 0.8)
      ), url(https://image.tmdb.org/t/p/original${info.detail.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "right 50",
      }}
      className=" relative w-[99vw] min-h-[220vh] px-[10%] "
    >
      <nav className=" w-full text-zinc-200 flex gap-10 text-2xl my-5 ">
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
      {/*  */}

      <div className="w-full flex">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[65vh] object-cover"
          src={`https://image.tmdb.org/t/p/original${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />
        <div className="ml-[5vw]">
          <h1 className="text-5xl font-black ">
            {info.detail.title ||
              info.detail.name ||
              info.detail.original_name ||
              info.detail.original_title}

            <small className="text-xl ml-2">
              {info.detail.first_air_date.split("-")[0]}
            </small>
          </h1>
          <h1 className=" my-2 italic text-xl font-semibold text-white ">
            {info.detail.tagline}
          </h1>

          <div className="flex items-center gap-x-4 my-5">
            <span className=" w-[8vh] h-[8vh] rounded-full  bg-red-600 text-lg font-extrabold flex items-center justify-center">
              {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
            </span>
            <h1 className="w-[5vw] leading-6 font-semibold text-2xl">
              User Score
            </h1>
            <h1 className="text-lg font-medium text-zinc-300 ">
              {info.detail.release_date}
            </h1>
            <h1 className="text-lg font-medium text-zinc-300">
              {info.detail.genres.map((g) => g.name).join(",")}
            </h1>
          </div>
          <h1 className="text-3xl font-thin my-3">Overview</h1>
          <p className="text-sm leading-5 font-medium text-zinc-400">
            {info.detail.overview}
          </p>
          <h1 className="text-3xl font-thin my-3 ">Tv Translated </h1>
          <p className="text-sm mb-10 leading-5 font-medium text-zinc-400">
            {info.translations.join(", ")}
          </p>

          <Link
            className="px-5 py-3 bg-[#6556cd] rounded-3xl"
            to={`${pathname}/trailer`}
          >
            Play Trailer
          </Link>
        </div>
      </div>

      {/*  */}
      <div className=" W-[80vw] flex flex-col mt-10 gap-y-5">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex items-center gap-x-4">
            <h1>Available on Platform :-</h1>
            {info.watchproviders.flatrate.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex items-center gap-x-4">
            <h1>Available on rent :-</h1>
            {info.watchproviders.rent.map((w, i) => (
              <img
                title={w.provider_name}
                key={i}
                className="w-[5vh] h-[5vh] object-cover rounded"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex items-center gap-x-4">
            <h1>Available on buy :-</h1>
            {info.watchproviders.buy.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>

      {info.detail.seasons && (
        <>
          <hr className="my-8  border border-zinc-600" />
          <h1 className="text-3xl font-semibold ">seasons</h1>

          <div className="w-full flex overflow-y-hidden mb-5 p-5 ">
            {info.detail.seasons.map((s, i) => (
              <div className="w-[16vw] mr-8 " key={i}>
                <img
                  key={i}
                  className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] min-w-[15vw] h-[40vh] object-cover"
                  // src={`https://image.tmdb.org/t/p/original${
                  //   s.poster_path || s.backdrop_path
                  // }`}
                  src={
                    s.poster_path
                      ? `https://image.tmdb.org/t/p/original${
                          s.poster_path || s.backdrop_path
                        }`
                      : NoImage
                  }
                  alt={s.title || s.name || s.original_name || s.original_title}
                />
                <h1 className="text-xl mt-2 text-center font-medium ">
                  {s.title || s.name || s.original_name || s.original_title}
                </h1>
              </div>
            ))}
          </div>
        </>
      )}

      <hr className="my-8  border border-zinc-600" />

      <h1 className="text-3xl font-semibold ">
        Recommendations & similar stuff
      </h1>

      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />

      <Outlet />
    </div>
  ) : (
    <Loader />
  );
};

export default TvshowDetail;
