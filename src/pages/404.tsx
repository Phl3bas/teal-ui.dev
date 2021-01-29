import * as React from "react";
import { Link } from "gatsby";
import FourZeroFour from "../assets/svg/fourzerofour.svg";

const NotFoundPage = () => {
  return (
    <main className="h-screen container mx-auto flex-col justifycontent-center alignitems-center">
      <FourZeroFour width="700" />
      <p className="text-grey-700 text-h6 m-7 mb-13">
        Sorry, the page you tried to navigate to doesn't exist
      </p>
      <Link role="button" className="bg-semantic-primary text-white-000" to="/">
        Go home
      </Link>
    </main>
  );
};

export default NotFoundPage;
