// import React from "react";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/Axios";
import noimage from "../../assets/noimage.jpg";

const TopNav = () => {
  const [quary, setQuary] = useState("");

  const [searchResult, setSearchResult] = useState([]);
  const Getsearch = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${quary}`);
      setSearchResult(data.results);
      // console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Getsearch();
  }, [quary]);

  return (
    <div className="w-[85%] h-[10vh] relative flex items-center  justify-start ml-[15%]  ">
      <i className="text-zinc-400 text-3xl ri-search-line"></i>
      <input
        onChange={(e) => setQuary(e.target.value)}
        value={quary}
        className="w-[50%] text-zinc-200  font-semibold  mx-10 p-1 outline-none border-none bg-transparent"
        type="text"
        placeholder="serach "
      />
      {quary.length > 0 && (
        <i
          onClick={() => setQuary("")}
          className=" text-zinc-400 text-3xl ri-close-fill"
        ></i>
      )}

      <div className=" absolute w-[70%] max-h-[60vh] bg-zinc-600 top-[100%] overflow-auto rounded-md shadow-xl z-50 bg-opacity-80 ">
        {searchResult.map((d, i) => (
          <Link
            key={i}
            className="font-semibold  text-zinc-300 w-full p-5 flex justify-start items-center border-b-2 border-zinc-100 hover:text-zinc-600 hover:bg-zinc-200 gap-8 "
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded-lg"
              src={
                d.backdrop_path
                  ? `https://image.tmdb.org/t/p/original${
                      d.backdrop_path || d.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <span>
              {d.title || d.name || d.original_name || d.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNav;
