import React from "react";
import { Eases as easelist } from "./ease";

export const Eases = ({ ease }: { ease: string }) => {
  const EaseObject = easelist[ease];
  const [isPlaying, setIsPlaying] = React.useState<Boolean>(false);

  const onClick = () => {
    setIsPlaying(true);

    setTimeout(() => setIsPlaying(false), 2500);
  };

  return (
    <div>
      <h5 className="mb-10">{ease}</h5>
      {Object.keys(EaseObject).map((key) => (
        <dl key={key}>
          <dt>{key}</dt>
          <li
            className="list-none radius-xs"
            style={{
              border: "1px solid var(--tl-cool-grey-200)",
            }}
          >
            <div
              className={
                `${ease}-${key} ${isPlaying ? "play " : ""}` +
                "h-13 w-13 primary-gradient radius-md pointer"
              }
              onClick={onClick}
            ></div>
          </li>
        </dl>
      ))}
    </div>
  );
};
