import { Link } from "gatsby";
import * as React from "react";

function IndexPage() {
  return (
    <div>
      <Link to={"/docs"}>GoTo Docs</Link>
    </div>
  );
}

export default IndexPage;
