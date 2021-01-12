import { Link } from "gatsby";
import * as React from "react";
import Logo from "../assets/svg/logo.svg";

function IndexPage() {
  return (
    <div className="h-100vh container mx-auto flex flex:col flex:justify-center flex:align-center">
      <Logo width="700" />
      <p style={{ color: "var(--tl-grey-700)", fontSize: "var(--tl-size-12)" }}>
        A Beautifully Modular Design System
      </p>
      <div className="flex flex:row">
        <a
          role="button"
          className="bg:primary text:white"
          href={"https://github.com/Phl3bas/TealUI"}
        >
          Github
        </a>
        <Link role="button" className="bg:primary text:white" to={"/docs"}>
          Docs
        </Link>
      </div>
    </div>
  );
}

export default IndexPage;
