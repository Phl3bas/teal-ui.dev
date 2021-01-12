import { Link } from "gatsby";
import * as React from "react";

type NavItemObjectType = {
  title: string;
  path: string;
};

interface Props {
  list: NavItemObjectType[];
}

export const NavList = ({ list }: Props) => {
  return (
    <ul style={{ listStyle: "none" }}>
      {list.map((item: NavItemObjectType) => (
        <li key={item.title}>
          <Link to={item.path}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};
