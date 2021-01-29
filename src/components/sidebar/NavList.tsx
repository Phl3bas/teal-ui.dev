import { Link } from "gatsby";
import * as React from "react";
import { AppContext } from "../../store";
import { NavActionTypes } from "../../actions";

interface NavListItemProps {
  title: string;
  path: string;
}
const NavListItem = ({ title, path }: NavListItemProps) => {
  const { dispatch } = React.useContext(AppContext);

  return (
    <li>
      <Link
        className="text-decoration-none text-h5 flex-col @lg:w-10/12 @lg:text-body text-cool-grey-600 text-cool-grey-600:visited text-cool-grey-400:hover bg-teal-100:hover br-md px-7"
        to={path}
        onClick={() => dispatch({ type: NavActionTypes.Close })}
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
    <ul className="list-none">
      {list.map((item: NavItemObjectType) => (
        <NavListItem key={item.title} title={item.title} path={item.path} />
      ))}
    </ul>
  );
};
