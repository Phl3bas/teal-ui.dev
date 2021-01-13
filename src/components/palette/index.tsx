import React from "react";
import { Colors } from "./colors";
import { capitalize } from "../../utils";

interface Props {
  colors: TealValueObject;
  shouldSort: boolean;
}

export const mainColors = {
  red: Colors.red,
  pink: Colors.pink,
  purple: Colors.purple,
  indigo: Colors.indigo,
  blue: Colors.blue,
  teal: Colors.teal,
  green: Colors.green,
  yellow: Colors.yellow,
  orange: Colors.orange,
  black: Colors.black,
  white: Colors.white,
};

export const semanticColors = {
  semantic: Colors.semantic,
};

export const brandColors = {
  brand: Colors.brand,
};

export const Palette = ({ colors, shouldSort = false }: Props) => {
  return (
    <div>
      {Object.keys(colors).map((hue) => (
        <div
          key={hue}
          style={{
            display: "flex",
            maxWidth: "100%",

            alignItems: "center",
            justifyContent: "center",
            marginBlockEnd: "var(--tl-size-10)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "var(--tl-size-17)",
              justifyContent: "space-around",
              alignItems: "flex-end",
            }}
          >
            <h6 style={{ margin: 0 }}>{capitalize(hue)}</h6>
            <code
              style={{
                color: "var(--tl-cool-grey-500)",
                margin: 0,
                fontSize: "var(--tl-size-9)",
              }}
            >
              --tl-{hue}
            </code>
          </div>
          <div
            style={{
              display: "flex",
              gap: "var(--tl-size-4)",

              marginInline: "var(--tl-size-10)",
              justifyContent: "space-evenly",

              flex: 1,
            }}
          >
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
                <div
                  key={color}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div
                    style={{
                      width: "70px",
                      height: "50px",
                      background: colors[hue][color],
                      borderRadius: "var(--tl-radius-md)",
                      boxShadow: "var(--tl-shadow-1)",
                    }}
                  ></div>
                  <p style={{ margin: 0, fontSize: "var(--tl-size-9)" }}>
                    {color}
                  </p>
                  <p
                    style={{
                      color: "var(--tl-cool-grey-500)",
                      margin: 0,
                      fontSize: "var(--tl-size-9)",
                    }}
                  >
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
