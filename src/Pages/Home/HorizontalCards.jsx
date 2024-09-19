const HorizontalCards = ({ data }) => {
  return (
    <div className=" w-full h-[50vh] flex mb-5 overflow-x-auto p-6 ">
      {data.map((d, i) => (
        <div
          key={i}
          className="w-[20%] h-full bg-zinc-800 flex-shrink-0  mr-5 overflow-y-hidden  rounded-lg"
        >
          <img
            className="w-full h-[60%] object-cover  mb-2"
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
  );
};

export default HorizontalCards;
