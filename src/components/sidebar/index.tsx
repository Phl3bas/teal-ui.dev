import React from "react";
import { useClickAway, useMedia } from "react-use";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { CloseNav, OpenNav } from "../../actions";
import { AppContext } from "../../store";

interface Props {
  children?: React.ReactNode;
}

export const Sidebar = ({ children }: Props) => {
  const { state, dispatch } = React.useContext(AppContext);
  const ref = React.useRef<HTMLDivElement | null>(null);

  useClickAway(ref, () => {
    if (state.navState.isOpen) {
      dispatch(CloseNav());
    }
  });

  const isWide = useMedia("(min-width: 1280px)");

  React.useEffect(() => {
    if (isWide) {
      dispatch(OpenNav());
    }
  }, [isWide]);

  return (
    <>
      <aside
        ref={ref}
        className={`${
          state.navState.isOpen ? "" : "hide-l"
        } @lg:show transition fixed @lg:static ontop flex-auto @lg:flex-col `}
      >
        <div className="flex-col h-full fixed w-25 shadow-sm @lg:shadow-none bg-white-000 @lg:bg-transparent">
          <SimpleBar
            style={{
              height: "90%",
              width: "101%",
              padding: "2px;",
            }}
            autoHide={true}
          >
            {children}
          </SimpleBar>
        </div>
      </aside>
      {state.navState.isOpen && (
        <div className="fixed h-screen w-screen bg-a-60"></div>
      )}
    </>
  );
};
