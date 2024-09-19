import { Link } from "react-router-dom";

const Header = ({ data }) => {
  const imageUrl = `https://image.tmdb.org/t/p/original${
    data.backdrop_path || data.profile_path
  }`;

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.2), 
          rgba(0, 0, 0, 0.5), 
          rgba(0, 0, 0, 0.8)
        ), url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "top 10",
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start p-[7%] select-none relative "
    >
      <h1 className="w-[70%] text-5xl font-black ">
        {data.title || data.name}
      </h1>
      <p className="w-[50%] text-sm  text-zinc-400">
        {data.overview.slice(0, 200)} ...{" "}
        <Link className="text-[#6556cd] ">more</Link>
      </p>
      <p>
        <i className=" text-green-800 ri-megaphone-fill"></i>{" "}
        {data.release_date || "No-information"}
        <i className="text-orange-400 ml-5 pr-1 ri-album-fill"></i>
        {data.media_type.toUpperCase()}
      </p>
      <Link className="bg-[#6556cd] py-3 px-5 text-sm rounded-3xl mt-5 ">
        watch triler
      </Link>
      <div className=" absolute top-0 right-[10%] text-zinc-500  ">
        <h5>
          {" "}
          rating: {data.vote_average && <span>({data.vote_average}/10)</span>}
        </h5>
      </div>
    </div>
  );
};

export default Header;
