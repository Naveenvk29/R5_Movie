// import React from "react";

import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className=" w-[20%] h-screen border-r-[1px] border-zinc-200 border-opacity-10  p-10 ">
      <h1 className="text-xl text-white ">
        <i className=" text-[#6556cd] mr-5  ri-tv-fill"></i>
        <span className="text-xl font-bold ">R5 Movies</span>
      </h1>
      <div className=" flex flex-col text-zinc-400 gap-2 ">
        <h1 className="text-white font-semibold text-xl mt-8 mb-5">
          New Feeds
        </h1>
        <Link
          to="/trading"
          className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-3"
        >
          <i className="ri-fire-fill"></i> Trading
        </Link>
        <Link
          to="/popular"
          className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-3"
        >
          <i className="ri-bard-fill "></i> Popular
        </Link>
        <Link
          to="/movies"
          className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-3"
        >
          <i className="ri-movie-2-fill"></i> Movies
        </Link>
        <Link
          to="/tvshows"
          className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-3"
        >
          <i className="ri-tv-2-fill"></i> Tv Shows
        </Link>
        <Link className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-team-fill"></i> People
        </Link>
        <hr />
        <h1 className="text-white font-semibold text-xl mt-8 leading-none tracking-tight  mb-5">
          Website Information
        </h1>
        <Link className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-information-fill"></i> About
        </Link>
        <Link className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-phone-fill"></i> contact
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
