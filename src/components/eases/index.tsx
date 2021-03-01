import React from "react";
import { Eases as easelist } from "./ease";
import Play from "../../assets/svg/play.svg";

export const Eases = ({ ease }: { ease: string }) => {
  const EaseObject = easelist[ease];
  const [isPlaying, setIsPlaying] = React.useState<Boolean>(false);
  const [duration, setDuration] = React.useState<number>(2000);

  const onClick = () => {
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), duration + 200);
  };

  return (
    <div>
      <div className="flex-row w-full gap-16 my-13">
        <div>
          <label htmlFor="duration">Duration: {duration}ms </label>
          <input
            onChange={(e) => {
              setIsPlaying(false);
              setDuration(parseInt(e.target.value, 10));
            }}
            type="range"
            name="duration"
            min="100"
            max="10000"
            value={duration}
            step="100"
          />
        </div>
        <button
          className="p-0 w-14 h-14 primary-gradient radius-round"
          onClick={onClick}
        >
          <Play />
        </button>
      </div>

      {Object.keys(EaseObject).map((key) => (
        <dl key={key}>
          <dt className="text-grey-900 text-center">{key}</dt>
          <li
            className="list-none radius-round"
            style={{
              border: "1px solid var(--tl-cool-grey-200)",
            }}
          >
            <div
              style={{ "--duration": duration + "ms" } as React.CSSProperties}
              className={
                `${ease}-${key} ${isPlaying ? "play " : ""}` +
                "h-13 w-13 primary-gradient radius-round pointer "
              }
            ></div>
          </li>
        </dl>
      ))}
    </div>
  );
};
