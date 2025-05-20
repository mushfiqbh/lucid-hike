import React, { ReactNode } from "react";

const FullScreenGrid = ({ children }: { children: ReactNode }) => {
  const gridSize = 96;

  return (
    <div
      className="min-h-screen"
      style={{
        zIndex: -10,
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent ${
            gridSize - 1
          }px, rgba(229, 231, 235, 0.9) ${
          gridSize - 1
        }px, rgba(229, 231, 235, 0.9) ${gridSize}px),
          repeating-linear-gradient(-90deg, transparent, transparent ${
            gridSize - 1
          }px, rgba(229, 231, 235, 0.9) ${
          gridSize - 1
        }px, rgba(229, 231, 235, 0.9) ${gridSize}px)
        `,
        backgroundColor: "#fff",
        ...(typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? {
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent ${
                  gridSize - 1
                }px, rgba(156, 163, 175, 0.9) ${
                gridSize - 1
              }px, rgba(156, 163, 175, 0.9) ${gridSize}px),
                repeating-linear-gradient(-90deg, transparent, transparent ${
                  gridSize - 1
                }px, rgba(156, 163, 175, 0.9) ${
                gridSize - 1
              }px, rgba(156, 163, 175, 0.9) ${gridSize}px)
              `,
              backgroundColor: "#1f2937",
            }
          : {}),
      }}
    >
      {children}
    </div>
  );
};

export default FullScreenGrid;
