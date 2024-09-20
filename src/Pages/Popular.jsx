import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../utils/Axios";
import TopNav from "./Home/TopNav";
import Loader from "../Components/Loader";
import Cards from "../Components/Cards";
import Dropdown from "../Components/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";

const Popular = () => {
  const [category, setCategory] = useState("movie");
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();
  document.title = "R5 Movie | Popular " + " " + category.toUpperCase();

  const getPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);
      if (data.results.length > 0) {
        setPopular((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRefresh = () => {
    if (popular.length === 0) {
      getPopular();
    } else {
      setPage(1);
      setPopular([]);
      getPopular();
    }
  };

  useEffect(() => {
    handleRefresh();
  }, [category]);

  return popular.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full flex items-center justify-between px-[5vw]">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] mr-5 ri-arrow-left-line"
          ></i>
          Popular
        </h1>
        <div className="w-full flex items-center justify-between gap-24">
          <TopNav />
          <Dropdown
            title="Category"
            options={["tv", "movie"]}
            fn={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={popular.length}
        next={getPopular}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Popular;
