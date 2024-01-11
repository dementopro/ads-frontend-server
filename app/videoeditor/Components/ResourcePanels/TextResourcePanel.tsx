import React, { useContext } from "react";
import { VideoContext } from '@/context/video';
import { MdAdd } from "react-icons/md";

type TextResourceProps = {
  fontSize: number;
  fontWeight: number;
  sampleText: string;
};

const TextResource = ({ fontSize, fontWeight, sampleText }: TextResourceProps) => {
  const { addText } = useContext(VideoContext);

  return (
    <div className="items-center bg-slate-800 m-[15px] flex flex-row">
      <div
        className="flex-1 text-white px-2 py-1"
        style={{
          fontSize: `${fontSize}px`,
          fontWeight: `${fontWeight}`,
        }}
      >
        {sampleText}
      </div>
      <button
        className="hover:bg-[#00a0f5] bg-[rgba(0,0,0,.25)] rounded z-10 text-white font-bold py-1"
        onClick={() =>
          addText({
            text: sampleText,
            fontSize: fontSize,
            fontWeight: fontWeight,
          })
        }
      >
        <MdAdd size="25" />
      </button>
    </div>
  );
};


export const TextResourcesPanel = () => {
  return (
    <div className="bg-slate-800 h-full">
      <div className="text-sm px-[16px] pt-[16px] pb-[8px] font-semibold text-white">
        Add Text
      </div>
      <TextResource sampleText="Title" fontSize={28} fontWeight={600} />
      <TextResource sampleText="Subtitle" fontSize={16} fontWeight={600} />
      <TextResource sampleText="Body" fontSize={14} fontWeight={400} />
      <TextResource sampleText="Caption" fontSize={12} fontWeight={400} />
      <TextResource sampleText="Heading 1" fontSize={24} fontWeight={800} />
      <TextResource sampleText="Heading 2" fontSize={20} fontWeight={800} />
      <TextResource sampleText="Heading 3" fontSize={18} fontWeight={800} />
      <TextResource sampleText="Heading 4" fontSize={16} fontWeight={800} />
      <TextResource sampleText="Heading 5" fontSize={14} fontWeight={800} />
      <TextResource sampleText="Heading 6" fontSize={12} fontWeight={800} />
    </div>
  );
};
