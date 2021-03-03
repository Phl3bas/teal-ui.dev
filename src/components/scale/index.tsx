import React from "react";
import { Size } from "./scale";

export const Scale = () => {
  return (
    <div className="mx-auto w-6/12 @lg:w-full @lg:max-w-30 overflow-x-scroll">
      <table>
        <thead>
          <tr>
            <th className="min-w-21">Token</th>
            <th className="min-w-16">Size</th>
            <th className="none"></th>
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
                <td className="none @lg:flex-row p-4 justifycontent-start alignitems-center">
                  <div
                    className="none @lg:flex-row primary-gradient h-15 radius-sm"
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
