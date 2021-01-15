import React from "react";
import { Size } from "./scale";

export const Scale = () => {
  return (
    <div style={{ padding: "0 var(--tl-size-12)" }}>
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
                <td
                  style={{
                    display: "flex",
                    padding: "var(--tl-size-4)",
                  }}
                >
                  <div
                    style={{
                      background: "var(--tl-teal-300)",
                      display: "flex",
                      height: "var(--tl-size-13)",
                      width: `var(--tl-size-${token})`,
                      borderRadius: "var(--tl-radius-sm)",
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
