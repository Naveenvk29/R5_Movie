// import React from "react";
import SideNav from "../Components/SideNav";
import TopNav from "../Components/TopNav";

const Home = () => {
  return (
    <>
      <SideNav />

      <div className="w-[80%]  h-screen">
        <TopNav />
      </div>
    </>
  );
};

export default Home;
