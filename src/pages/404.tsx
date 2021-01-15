import * as React from "react";
import { Link } from "gatsby";
import FourZeroFour from "../assets/svg/fourzerofour.svg";

const NotFoundPage = () => {
  return (
    <main className="h-100vh container mx:auto flex flex:col flex:justify-center flex:align-center">
      <FourZeroFour width="700" />
      <p className="text:grey-700 text-11">
        Sorry, the page you tried to navigate to doesnt exist
      </p>
      <Link role="button" className="bg:primary text:white" to="/">
        Go home
      </Link>
    </main>
  );
};

export default NotFoundPage;
