import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
const Trailer = () => {
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";

  const ytvideo = useSelector((state) => state[category].info.videos);
  const navigate = useNavigate();
  return (
    <div
      className="absolute w-[99vw] h-screen top-0 left-0 flex items-center justify-center
      bg-[rgba(0,0,0,.7)]"
    >
      {ytvideo ? (
        <>
          <Link
            onClick={() => navigate(-1)}
            className="absolute top-[2vw] right-[7vw] text-3xl hover:text-[#6556cd] mr-5 ri-close-line"
          ></Link>
          <ReactPlayer
            height={600}
            width={1300}
            controls
            onEnded={() => navigate(-1)}
            url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
          />
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Trailer;
