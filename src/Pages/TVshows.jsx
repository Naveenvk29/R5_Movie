import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../utils/Axios";
import TopNav from "./Home/TopNav";
import Loader from "../Components/Loader";
import Cards from "../Components/Cards";
import Dropdown from "../Components/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";

const TVshows = () => {
  const [category, setCategory] = useState("airing_today");
  const [tv, setTv] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();
  document.title = "R5 tv | tv " + " " + category.toUpperCase();

  const getTv = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
      if (data.results.length > 0) {
        setTv((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRefresh = () => {
    if (tv.length === 0) {
      getTv();
    } else {
      setPage(1);
      setTv([]);
      getTv();
    }
  };

  useEffect(() => {
    handleRefresh();
  }, [category]);

  return tv.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full flex items-center justify-between px-[5vw]">
        <h1 className="text-2xl w-[12vw] font-semibold text-zinc-400 ">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] mr-5 ri-arrow-left-line"
          ></i>
          TV-Shows
        </h1>
        <div className="w-full flex items-center justify-between gap-24">
          <TopNav />
          <Dropdown
            title="Category"
            options={["airing_today", "on_the_air", "popular", "top_rated"]}
            fn={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={tv.length}
        next={getTv}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={tv} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};
export default TVshows;
