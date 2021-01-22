import { Link } from "gatsby";
import * as React from "react";
import Logo from "../assets/svg/logo.svg";

function IndexPage() {
  return (
    <div className="h-screen m-auto flex-col justifycontent-center alignitems-center container">
      <Logo width="700" />
      <p className="text-grey-600 text-h4">
        A Beautifully Modular Design System
      </p>
      <div className="f-row">
        <a
          role="button"
          className="bg-teal-500 text-white-000 text-white-000:visited"
          href={"https://github.com/Phl3bas/TealUI"}
        >
          Github
        </a>
        <Link
          role="button"
          className="bg-teal-800 text-white-000 text-white-000:visited"
          to={"/docs"}
        >
          Docs
        </Link>
      </div>
    </div>
  );
}

export default IndexPage;
