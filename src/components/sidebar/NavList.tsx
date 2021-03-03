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
        className="text-decoration-none text-h5 flex-col pl-14  @lg:w-11/12 @lg:text-body text-cool-grey-600 text-cool-grey-600:visited text-black-300:hover bg-teal-000:hover px-0 py-3"
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
    <ul className="bg-white-000 list-none mt-1 ml-0 w-full">
      {list.map((item: NavItemObjectType) => (
        <NavListItem key={item.title} title={item.title} path={item.path} />
      ))}
    </ul>
  );
};
