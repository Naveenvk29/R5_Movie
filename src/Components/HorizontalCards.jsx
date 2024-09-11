import React from "react";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-full h-[40vh] p-5 mb-5 ">
      <div className="mb-5">
        <h1 className="text-2xl font-semibold text-zinc-600">Trading</h1>
      </div>
      <div className=" w-full h-[40vh] flex mb-5 overflow-x-auto p-5">
        {data.map((d, i) => (
          <div
            key={i}
            className="w-[15%] h-full bg-zinc-800 flex-shrink-0  mr-5 overflow-y-hidden  rounded-lg"
          >
            <img
              className="w-full h-[40%] object-cover  mb-2"
              src={`https://image.tmdb.org/t/p/original${d.poster_path}`}
              alt={d.title}
            />
            <div className=" h-[45%] p-5 ">
              <h1 className="text-white text-xl font-semibold mb-1">
                {d.title || d.name || d.original_title || d.original_name}
              </h1>
              <p className="text-sm text-white">
                {d.overview.slice(0, 50)}...{" "}
                <span className="text-zinc-600">more</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;
