import React from "react";
import { Size } from "./scale";

export const Scale = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th className="min-w-16">Size</th>
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
                <td className="flex-row p-4 justifycontent-start alignitems-center">
                  <div
                    className="flex-row primary-gradient h-13 br-sm"
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
