import * as React from "react";
import { Link } from "gatsby";
import FourZeroFour from "../assets/svg/fourzerofour.svg";

const NotFoundPage = () => {
  return (
    <main className="h-screen container mx-auto flex-col justifycontent-center alignitems-center">
      <FourZeroFour className="w-27 @lg:w-29" />
      <p className="text-grey-700 text-h6 m-7 mb-13">
        Sorry, the page you tried to navigate to doesn't exist
      </p>
      <Link role="button" className="primary-gradient text-white-000" to="/">
        Go home
      </Link>
    </main>
  );
};

export default NotFoundPage;
