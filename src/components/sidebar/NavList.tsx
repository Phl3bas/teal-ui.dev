import { Link } from "gatsby";
import * as React from "react";

interface Props {
  list: NavItemObjectType[];
}

export const NavList = ({ list }: Props) => {
  return (
    <ul style={{ listStyle: "none" }}>
      {list.map((item: NavItemObjectType) => (
        <li key={item.title}>
          <Link
            style={{ textDecoration: "none", color: "var(--tl-cool-grey-600)" }}
            to={item.path}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
