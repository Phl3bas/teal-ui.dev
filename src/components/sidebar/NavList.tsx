import { Link } from "gatsby";
import * as React from "react";

interface Props {
  list: string[];
}

export const NavList = ({ list }: Props) => {
  return (
    <ul style={{ listStyle: "none" }}>
      {list.map((item: any) => (
        <li key={item.slug}>
          <Link to={item.slug}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};
