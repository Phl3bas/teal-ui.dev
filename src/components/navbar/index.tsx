import { Link } from "gatsby";
import React from "react";
import Github from "../../assets/svg/github.svg";
import TealLogo from "../../assets/svg/logo.svg";

export const Navbar = () => {
  return (
    <nav
      className="flex sticky h-14 top-0 bg:white-000 flex:align-center p-7"
      style={{
        boxShadow: "0 4px 20px 1px rgba(200,200,200,0.15)",
        zIndex: 10000,
      }}
    >
      <div className="flex flex:justify-between flex:align-center w-full container mx:auto">
        <div className="flex text:cool-grey-300">
          <Link to="/">
            <TealLogo width="200" />
          </Link>
          <p>docs</p>
        </div>

        <div className="flex flex:align-center flex:justify-between w-10">
          <a href="https://github.com/Phl3bas/TealUI">
            <Github height="40" width="40" />
          </a>
          <form action="">
            <select name="" id="" className="w-16">
              <option value="0.0.1">0.0.1</option>
            </select>
          </form>
        </div>
      </div>
    </nav>
  );
};
