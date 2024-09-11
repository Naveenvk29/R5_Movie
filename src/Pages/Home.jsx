// import React from "react";
import { useEffect, useState } from "react";
import SideNav from "../Components/SideNav";
import TopNav from "../Components/TopNav";
import axios from "../utils/Axios";
import Header from "../Components/Header";
import HorizontalCards from "../Components/HorizontalCards";
const Home = () => {
  const [banner, setbanner] = useState(null);
  const [trading, setTrading] = useState(null);

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
      const { data } = await axios.get(`/trending/all/day`);
      setTrading(data.results);
      // console.log(randomdata);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getHeaderbanner();
    getTreading();
  }, []);

  return banner && trading ? (
    <>
      <SideNav />

      <div className="w-[80%]  h-screen overflow-auto overflow-x-hidden">
        <TopNav />
        <Header data={banner} />
        <HorizontalCards data={trading} />
      </div>
    </>
  ) : (
    <h1>loading...</h1>
  );
};

export default Home;
