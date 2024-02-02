"use client";
import React from "react";
import { MdOutlineTextFields, MdMovie } from "react-icons/md";
import { EditorElement, useVideoContext } from "@/context/video";

export type ElementProps = {
  element: EditorElement;
};

export const Element = (props: ElementProps) => {
  const { element } = props;
  const { selectedElement, setSelectedElement1, refreshElements, removeEditorElement } = useVideoContext();
  const Icon = element.type === "video" ? MdMovie : MdOutlineTextFields;
  const isSelected = selectedElement?.id === element.id;
  const bgColor = isSelected ? "rgba(0, 160, 245, 0.1)" : "";
  return (
    <div
      style={{
        backgroundColor: bgColor,
      }}
      className={`flex mx-2 my-1 py-2 px-1 flex-row justify-start items-center ${bgColor} max-w-[200px]`}
      key={element.id}
      onClick={() => {
        setSelectedElement1(element);
      }}
    >
      <Icon size="20" color="gray"></Icon>
      <div className="truncate text-xs ml-2 flex-1 font-medium">
        {element.name}
      </div>
      <div>
        {element.type === "video" ? (
          <video
            className="opacity-0 max-w-[20px] max-h-[20px]"
            src={element.properties.src}
            onLoad={() => {
              refreshElements();
            }}
            onLoadedData={() => {
              refreshElements();
            }}
            height={20}
            width={20}
            id={element.properties.elementId}
          ></video>
        ) : null}
      </div>
      <button
        className="bg-red-500 hover:bg-red-700 text-white mx-2 text-xs py-0 px-1 rounded"
        onClick={(e) => {
          removeEditorElement(element.id);
          refreshElements();
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        X
      </button>
    </div>
  );
};
