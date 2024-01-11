import React from "react";
import { Element } from "./Element";
import { useVideoContext } from "@/context/video";

export const ElementsPanel = () => {
  const { editorElements } = useVideoContext();

  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="text-sm px-[16px] py-[7px] font-semibold">Elements</div>
      </div>
      <div className="flex flex-col">
        {editorElements.map((element) => {
          return <Element key={element.id} element={element} />;
        })}
      </div>
    </div>
  );
};
