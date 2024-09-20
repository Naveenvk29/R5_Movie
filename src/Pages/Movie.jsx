import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../utils/Axios";
import TopNav from "./Home/TopNav";
import Loader from "../Components/Loader";
import Cards from "../Components/Cards";
import Dropdown from "../Components/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";

const Movie = () => {
  const [category, setCategory] = useState("now_playing");
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();
  document.title = "R5 Movie | movie " + " " + category.toUpperCase();

  const getMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setMovie((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRefresh = () => {
    if (movie.length === 0) {
      getMovie();
    } else {
      setPage(1);
      setMovie([]);
      getMovie();
    }
  };

  useEffect(() => {
    handleRefresh();
  }, [category]);

  return movie.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full flex items-center justify-between px-[5vw]">
        <h1 className="text-2xl font-semibold text-zinc-400 ">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] mr-5 ri-arrow-left-line"
          ></i>
          Movie
        </h1>
        <div className="w-full flex items-center justify-between gap-24">
          <TopNav />
          <Dropdown
            title="Category"
            options={["now_playing", "popular", "top_rated", "upcoming"]}
            fn={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={movie.length}
        next={getMovie}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={movie} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Movie;
