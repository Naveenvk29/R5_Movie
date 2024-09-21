import { Link } from "react-router-dom";
import NoImage from "../../assets/noimage.jpg";

const HorizontalCards = ({ data }) => {
  return (
    <div className=" w-[100%] flex mb-5 overflow-x-auto p-5 ">
      {data.map((d, i) => (
        <Link
          to={`/${d.media_type}/details/${d.id}`}
          key={i}
          className="w-[20%] h-[45vh] bg-zinc-800 flex-shrink-0  mr-5 overflow-y-hidden  rounded-lg"
        >
          <img
            className="w-full h-[60%] object-cover  mb-2"
            src={
              d.poster_path
                ? `https://image.tmdb.org/t/p/original${d.poster_path}`
                : NoImage
            }
            alt={d.title}
          />
          <div className=" h-[45%] p-5 ">
            <h1 className="text-white text-lg font-semibold mb-1">
              {d.title || d.name || d.original_title || d.original_name}
            </h1>
            <p className="text-sm text-white">
              {d.overview.slice(0, 50)}...{" "}
              <span className="text-zinc-600">more</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HorizontalCards;
