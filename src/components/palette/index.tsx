import React from "react";
import { Colors } from "./colors";
import { capitalize } from "../../utils";

interface Props {
  colors: TealValueObject;
  shouldSort: boolean;
}

export const mainColors = {
  red: Colors["red"],
  pink: Colors["pink"],
  purple: Colors["purple"],
  indigo: Colors["indigo"],
  blue: Colors["blue"],
  teal: Colors["teal"],
  green: Colors["green"],
  yellow: Colors["yellow"],
  orange: Colors["orange"],
  grey: Colors["grey"],
  "cool-grey": Colors["cool-grey"],
  "warm-grey": Colors["warm-grey"],
  black: Colors["black"],
  white: Colors["white"],
};

export const semanticColors = {
  semantic: Colors["semantic"],
};

export const brandColors = {
  brand: Colors["brand"],
};

export const Palette = ({ colors, shouldSort = false }: Props) => {
  return (
    <div className="flex flex:col gap-8">
      {Object.keys(colors).map((hue) => (
        <div
          className="flex w-full flex:align-center flex:justify-center"
          key={hue}
        >
          <div className="flex flex:col w-17 flex:justify-around flex:align-end">
            <h6 className="m-0">{capitalize(hue)}</h6>
            <code className="text:cool-grey-600 m-0 text-9">--tl-{hue}</code>
          </div>
          <div className="flex gap-4 mx-10 flex:justify-even flex-1">
            {Object.keys(colors[hue])
              .sort(
                (a, b) =>
                  shouldSort &&
                  a.localeCompare(b, undefined, {
                    numeric: true,
                    sensitivity: "base",
                  })
                // number string keys dont come in order so need to sort them with localcompare to put them in numeric order.
              )
              .map((color) => (
                <div key={color} className="flex flex:col">
                  <div
                    className="r-md shadow-1 w-16 h-14"
                    style={{
                      background: colors[hue][color],
                    }}
                  ></div>
                  <p className="m-0 text-9">{color}</p>
                  <p className="m-0 text-9 text:cool-grey-500">
                    {colors[hue][color]}
                  </p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
