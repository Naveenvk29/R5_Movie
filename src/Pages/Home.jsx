// import React from "react";
import { useEffect, useState } from "react";
import SideNav from "../Components/SideNav";
import TopNav from "../Components/TopNav";
import axios from "../utils/Axios";
import Header from "../Components/Header";
const Home = () => {
  const [banner, setbanner] = useState();

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

  useEffect(() => {
    getHeaderbanner();
  }, []);

  return banner ? (
    <>
      <SideNav />

      <div className="w-[80%]  h-screen">
        <TopNav />
        <Header data={banner} />
      </div>
    </>
  ) : (
    <h1>loading...</h1>
  );
};

export default Home;
