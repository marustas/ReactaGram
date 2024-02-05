import {Outlet} from "react-router-dom";

import React from "react";
import TopBar from "../ui/TopBar";
import LeftBar from "../ui/LeftBar";
import BottomBar from "../ui/BottomBar";

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
