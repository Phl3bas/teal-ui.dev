import { Link } from "gatsby";
import * as React from "react";

interface NavListItemProps {
  title: string;
  path: string;
}
const NavListItem = ({ title, path }: NavListItemProps) => {
  return (
    <li key={title}>
      <Link
        style={{
          textDecoration: "none",
          color: "var(--tl-cool-grey-600)",
        }}
        to={path}
      >
        {title}
      </Link>
    </li>
  );
};

interface NavListProps {
  list: NavItemObjectType[];
}

export const NavList = ({ list }: NavListProps) => {
  return (
    <ul style={{ listStyle: "none" }}>
      {list.map((item: NavItemObjectType) => (
        <NavListItem title={item.title} path={item.path} />
      ))}
    </ul>
  );
};
