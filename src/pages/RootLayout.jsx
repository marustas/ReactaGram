import {Outlet} from "react-router-dom";

import React from "react";
import TopBar from "./TopBar";
import LeftBar from "./LeftBar";
import BottomBar from "./BottomBar";

const RootLayout = () => {
  return <div className="w-full md:flex">
    <TopBar/>
    <LeftBar/>
    <section className="flex-1 h-full flex">
      <Outlet/>
    </section>
    <BottomBar/>
  </div>;
};

export default RootLayout;
