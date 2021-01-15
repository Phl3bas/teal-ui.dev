import React from "react";
import { Size } from "./scale";

export const Scale = () => {
  return (
    <div className="py-0 px-12">
      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Size</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(Size.size)
            .sort((a, b) =>
              a.localeCompare(b, undefined, {
                numeric: true,
                sensitivity: "base",
              })
            )
            .map((token) => (
              <tr>
                <td>
                  <code>--tl-size-{token}</code>
                </td>
                <td>
                  <code>{Size.size[token]}</code>
                </td>
                <td className="flex p-4">
                  <div
                    className="flex bg:teal-300 h-13 r-sm"
                    style={{
                      width: `var(--tl-size-${token})`,
                    }}
                  ></div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
