import { Link } from "gatsby";
import * as React from "react";
import Logo from "../assets/svg/tealeaf-primary.svg";

function IndexPage() {
  return (
    <div className="h-screen m-auto flex-col justifycontent-center alignitems-center w-30">
      <Logo className="w-24 @lg:w-30" />
      <p className="text-grey-600 text-h5 m-7 mb-13">
        A Beautifully Modular UI Toolkit
      </p>
      <div className="flex-row">
        <a
          role="button"
          className="bg-grey-800 text-white-000 text-white-000:visited"
          href={"https://github.com/Phl3bas/Tealeaf"}
        >
          Github
        </a>
        <Link
          role="button"
          className="primary-gradient text-white-000 text-white-000:visited"
          to={"/docs"}
        >
          Docs
        </Link>
      </div>
    </div>
  );
}

export default IndexPage;
