import { Link } from "gatsby";
import React from "react";
import { AppContext } from "../../store";
import { NavActionTypes } from "../../actions";
import Github from "../../assets/svg/github.svg";
import TealLogo from "../../assets/svg/logo.svg";

export const Navbar = () => {
  const { state, dispatch } = React.useContext(AppContext);

  return (
    <nav
      className="flex-row sticky h-14 top-0 bg-white-000 alignitems-center  p-7"
      style={{
        top: 0,
        boxShadow: "0 4px 20px 1px rgba(200,200,200,0.15)",
        zIndex: 10000,
      }}
    >
      <div className="flex-row justifycontent-between @lg:alignitems-center w-full container mx-auto">
        <div
          className="@lg:none alignself-center w-14 pointer"
          onPointerDown={() => {
            dispatch({
              type: state.navState.isOpen
                ? NavActionTypes.Close
                : NavActionTypes.Open,
            });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="var(--tl-cool-grey-900)"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <div className="flex-row text-cool-grey-300">
          <Link to="/">
            <TealLogo width="200" />
          </Link>
          <p>docs</p>
        </div>

        <div className="flex-row alignitems-center justifycontent-between @lg:w-20">
          <a href="https://github.com/Phl3bas/TealUI">
            <Github height="40" width="40" />
          </a>
          <form className="none @lg:initial" action="">
            <select name="" id="" className="w-16">
              <option value="0.0.1">0.0.1</option>
            </select>
          </form>
        </div>
      </div>
    </nav>
  );
};
