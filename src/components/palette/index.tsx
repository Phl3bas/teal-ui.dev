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
    <div className="flex-column">
      {Object.keys(colors).map((hue) => (
        <div
          className="flex-row gap-10 mb-10 justifycontent-between alignitems-center flex-wrap"
          key={hue}
        >
          <div className="flex-column min-w-17 justifycontent-around alignitems-end">
            <h6 className="m-0">{capitalize(hue)}</h6>
            <code className="text-cool-grey-600 m-0 text-sm">--tl-{hue}</code>
          </div>
          <div className="flex-row mx-10 justifycontent-even flex-1 flex-wrap">
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
                <div key={color} className="flex-column flex-auto mb-10">
                  <div
                    className="shadow-xs h-13 min-w-15 max-w-22"
                    style={{
                      background: colors[hue][color],
                    }}
                  ></div>
                  <p className="m-0 text-sm">{color}</p>
                  <p className="m-0 text-sm text-cool-grey-500">
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
