import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import Header from "../NavBar/Header.jsx";
import Employees from "./Employees/page.jsx";

const Page = () => {
  return (
    <div>
      <div className="w-full flex">
        <NavBar />
        <main className="w-11/12">
          <Header />
          <Employees />
        </main>
      </div>
    </div>
  );
};

export default Page;
