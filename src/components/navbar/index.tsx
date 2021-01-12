import { Link } from "gatsby";
import React from "react";
import Github from "../../assets/svg/github.svg";
import TealLogo from "../../assets/svg/logo.svg";

export const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        position: "sticky",
        height: "3rem",
        top: 0,
        background: "white",
        boxShadow: "0 2px 20px 8px rgba(200,200,200,0.15)",
        alignItems: "center",
        zIndex: 10000,
        padding: "0.5rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "80em",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          className="flex"
          style={{
            color: "var(--tl-cool-grey-300)",
          }}
        >
          <Link to="/">
            <TealLogo width="200" />
          </Link>
          <p>docs</p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            minWidth: "10em",
            justifyContent: "space-between",
          }}
        >
          <a href="https://github.com/Phl3bas/TealUI">
            <Github height="40" width="40" />
          </a>
          <form action="">
            <select name="" id="" style={{ width: "5em" }}>
              <option value="0.0.1">0.0.1</option>
            </select>
          </form>
        </div>
      </div>
    </nav>
  );
};
