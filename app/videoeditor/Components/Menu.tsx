import React from "react";
import {
  MdDownload,
  MdVideoLibrary,
  MdImage,
  MdTransform,
  MdTitle,
  MdAudiotrack,
  MdOutlineFormatColorFill,
  MdMovieFilter,
} from "react-icons/md";

const Menu = ({ selectedMenuOption, setSelectedMenuOption }: {
  selectedMenuOption: any,
  setSelectedMenuOption: any
}) => {
  return (
    <>
      {MENU_OPTIONS.map((option) => {
        return (
          <button
            key={option.name}
            onClick={() => setSelectedMenuOption(option.name)}
            className="py-4 px-2 w-full flex flex-col items-center text-xs"
          >
            <option.icon
              className=""
              size="20"
              color={
                selectedMenuOption === option.name ? "#00a0f5" : "white"
              }
            />
            <div
              className={
                selectedMenuOption === option.name
                  ? "font-semibold text-[#00a0f5]"
                  : "font-light text-white"
              }
            >
              {option.name}
            </div>
          </button>
        );
      })}
    </>
  );
};

export default Menu

const MENU_OPTIONS = [
  // {
  //   name: "Video",
  //   icon: MdVideoLibrary,
  // },
  // {
  //   name: "Audio",
  //   icon: MdAudiotrack,
  // },
  // {
  //   name: "Image",
  //   icon: MdImage,
  // },
  {
    name: "Text",
    icon: MdTitle,
  },
  {
    name: "Animation",
    icon: MdTransform,
  },
  {
    name: "Effects",
    icon: MdMovieFilter,
  },
  {
    name: "Fill",
    icon: MdOutlineFormatColorFill,
  },
  {
    name: "Export",
    icon: MdDownload,
  },
];
