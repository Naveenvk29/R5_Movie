import { useNavigate } from "react-router-dom";
import TopNav from "./Home/TopNav";
import { useState, useEffect } from "react";
import axios from "../utils/Axios";
import Loader from "../Components/Loader";
import Cards from "../Components/Cards";
import Dropdown from "../Components/Dropdown";

import InfiniteScroll from "react-infinite-scroll-component";
const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);

  const getTreading = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);
      // setTrending(data.results);
      setTrending((prestate) => [...prestate, ...data.results]);
      setPage(page + 1);
    } catch (error) {
      console.log(error);
    }
  };
  //   console.log(trending);
  useEffect(() => {
    getTreading();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="p-[3vw] w-screen h-screen overflow-hidden overflow-y-auto">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] mr-5 ri-arrow-left-line"
          ></i>
          Trending
        </h1>
        <div className="w-full flex items-center justify-between gap-24">
          <TopNav />
          <Dropdown
            title="Category"
            options={["tv", "movie", "all"]}
            fn={(e) => setCategory(e.target.value)}
          />
          <Dropdown
            title="Duration"
            options={["week", "day"]}
            fn={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={trending.length}
        next={getTreading}
        hasMore={true}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Trending;
