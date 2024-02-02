
import React, { useContext } from "react";
import { useVideoContext } from '@/context/video';
import { BlockPicker } from "react-color";

const professionalVideoColors = [
  "#000000", // Black
  "#FFFFFF", // White
  "#404040", // Dark Gray
  "#808080", // Gray
  "#C0C0C0", // Silver
  "#E0E0E0", // Light Gray
  "#003366", // Dark Blue
  "#336699", // Medium Blue
  "#6699CC", // Blue
  "#99CCFF", // Light Blue
  "#990000", // Dark Red
  "#CC3333", // Red
  "#FF6666", // Light Red
  "#663300", // Dark Brown
  "#996633", // Brown
  "#CC9966", // Light Brown
  "#006600", // Dark Green
  "#339933", // Green
  "#66CC99", // Light Green
  "#FFFF00", // Yellow
];

export const FillPanel = (() => {
  // Color Picker
  const { backgroundColor, setBackgroundColor1 } = useVideoContext()
  return (
    <>
      <div className="flex flex-col gap-2 items-cneter justify-center">
        <div className="text-sm py-4 font-semibold">
          Fill
        </div>
        <div>
          <BlockPicker
            colors={professionalVideoColors}
            color={backgroundColor}
            onChangeComplete={(color: any) => {
              console.log(color);
              setBackgroundColor1(color.hex);
            }}
          ></BlockPicker>
        </div>
      </div>
    </>
  );
});
