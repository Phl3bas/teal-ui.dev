import React from "react";
import { useClickAway, useMedia } from "react-use";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { NavActionTypes } from "../../actions";
import { AppContext } from "../../store";

interface Props {
  children?: React.ReactNode;
}

export const Sidebar = ({ children }: Props) => {
  const { state, dispatch } = React.useContext(AppContext);
  const ref = React.useRef<HTMLDivElement | null>(null);

  useClickAway(ref, () => {
    if (state.navState.isOpen) {
      dispatch({ type: NavActionTypes.Close });
    }
  });

  const isWide = useMedia("(min-width: 1280px)");

  React.useEffect(() => {
    if (isWide) {
      dispatch({ type: NavActionTypes.Close });
    }
  }, [isWide]);

  return (
    <>
      <aside
        ref={ref}
        className={`${
          state.navState.isOpen ? "" : "hide-l"
        } @lg:show transition fixed @lg:static ontop px-12 min-w-21 @lg:w-3/12 @lg:flex-col`}
      >
        <div
          className="flex-col h-full fixed py-0 px-0 min-w-22 w-22  bg-white-000 shadow-sm @lg:shadow-none"
          style={{
            marginLeft: "-25px",
          }}
        >
          <SimpleBar style={{ height: "95%" }} autoHide={true}>
            {children}
          </SimpleBar>
        </div>
      </aside>
      {state.navState.isOpen && (
        <div className="fixed h-screen w-screen bg-a-50 bg-black-200"></div>
      )}
    </>
  );
};
