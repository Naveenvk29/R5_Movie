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
  const [hasmore, sethasmore] = useState(true);

  document.title = "R5 Movie | trending" + " " + category.toUpperCase();

  const getTreading = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );
      if (data.results.length > 0) {
        setTrending((prestate) => [...prestate, ...data.results]);
        setPage(page + 1);
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlerefresh = () => {
    if (trending.length === 0) {
      getTreading();
    } else {
      setPage(1);
      setTrending([]);
      getTreading();
    }
  };
  //   console.log(trending);
  useEffect(() => {
    handlerefresh();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className="w-full flex items-center justify-between px-[5vw]">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] mr-5 ri-arrow-left-line"
          ></i>
          Trending
        </h1>
        <div className="w-full flex items-center justify-between">
          <TopNav />
          <Dropdown
            title="Category"
            options={["tv", "movie", "all"]}
            fn={(e) => setCategory(e.target.value)}
          />
          <div className="w-[5vw]"></div>
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
        hasMore={hasmore}
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
