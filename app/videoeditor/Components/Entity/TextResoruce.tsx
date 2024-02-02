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

export default TextResource;