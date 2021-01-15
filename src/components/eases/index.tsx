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
      <h5 style={{ marginBlockEnd: "var(--tl-size-10)" }}>{ease}</h5>
      {Object.keys(EaseObject).map((key) => (
        <dl key={key}>
          <dt>{key}</dt>
          <li
            style={{
              listStyle: "none",
              border: "1px solid var(--tl-cool-grey-200)",
              borderRadius: "var(--tl-radius-sm)",
            }}
          >
            <div
              className={`${ease}-${key} ${isPlaying ? "play" : ""}`}
              onClick={onClick}
              style={{
                height: "var(--tl-size-13)",
                width: "var(--tl-size-13)",
                background: "var(--tl-teal-300)",
                borderRadius: "var(--tl-size-md)",
                cursor: "pointer",
              }}
            ></div>
          </li>
        </dl>
      ))}
    </div>
  );
};
