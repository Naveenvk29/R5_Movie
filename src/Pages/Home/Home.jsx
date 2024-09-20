// import React from "react";
import { useEffect, useState } from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import axios from "../../utils/Axios";
import Header from "./Header";
import HorizontalCards from "./HorizontalCards";
import Loader from "../../Components/Loader";
import Dropdown from "../../Components/Dropdown";
const Home = () => {
  const [banner, setbanner] = useState(null);
  const [trading, setTrading] = useState(null);
  const [category, setCategory] = useState("all");

  document.title = "R5 Movie | Home";

  const getHeaderbanner = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setbanner(randomdata);
      // console.log(randomdata);
    } catch (error) {
      console.log(error);
    }
  };
  const getTreading = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrading(data.results);
      // console.log(randomdata);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getHeaderbanner();
    getTreading();
  }, [category]);

  return banner && trading ? (
    <>
      <SideNav />

      <div className="w-[80%]  h-screen overflow-auto overflow-x-hidden">
        <TopNav />
        <Header data={banner} />
        <div className="  flex justify-between items-center p-10 ">
          <h1 className="text-2xl font-semibold text-zinc-600">Trading</h1>
          <Dropdown
            title="Filter"
            options={["tv", "movie", "all"]}
            fn={(e) => setCategory(e.target.value)}
          />
        </div>
        <HorizontalCards data={trading} category={setCategory} />
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default Home;
