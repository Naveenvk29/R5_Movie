import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  console.log(data);

  return (
    <div className="flex flex-wrap w-[full] px-[8vw]">
      {data.map((d, i) => (
        <Link
          to={`/${d.media_type || title}/details/${d.id}`}
          key={i}
          className=" relative w-[25vh] mr-[5%] mb-[5%]"
        >
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[40vh] object-cover"
            src={`https://image.tmdb.org/t/p/original${
              d.backdrop_path || d.profile_path
            }`}
            alt=""
          />

          <h1 className="text-2xl text-zinc-400 mt-3 font-semibold ">
            {d.title ||
              d.name ||
              d.original_title ||
              d.original_name ||
              "No Title"}
          </h1>
          <div
            className={`${
              d.vote_average
                ? "absolute right-[-1.1vw] bottom-[40vw] w-[6vh] h-[6vh] rounded-full  bg-red-600 text-lg font-extrabold flex items-center justify-center"
                : " hidden"
            } `}
          >
            {(d.vote_average * 10).toFixed()} <sup>%</sup>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
