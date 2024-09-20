import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../utils/Axios";
import TopNav from "./Home/TopNav";
import Loader from "../Components/Loader";
import Cards from "../Components/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

const People = () => {
  const [category] = useState("popular");
  const [person, setPerson] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();
  document.title = "R5 person | People";

  const getPerson = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      if (data.results.length > 0) {
        setPerson((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRefresh = () => {
    if (person.length === 0) {
      getPerson();
    } else {
      setPage(1);
      setPerson([]);
      getPerson();
    }
  };

  useEffect(() => {
    handleRefresh();
  }, [category]);

  return person.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full flex items-center justify-between px-[5vw]">
        <h1 className="text-2xl w-[12vw] font-semibold text-zinc-400 ">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556cd] mr-5 ri-arrow-left-line"
          ></i>
          People
        </h1>
        <div className="w-full flex items-center justify-between gap-24">
          <TopNav />
        </div>
      </div>
      <InfiniteScroll
        dataLength={person.length}
        next={getPerson}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={person} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default People;
