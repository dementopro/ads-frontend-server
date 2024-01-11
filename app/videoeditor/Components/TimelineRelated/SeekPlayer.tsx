"use client";

import { useVideoContext } from "@/context/video";
import { formatTimeToMinSecMili } from "@/utils/video";
import { MdPlayArrow, MdPause } from "react-icons/md";

export const SeekPlayer = () => {
  const { playing, currentTimeInMs, maxTime, setPlaying, handleSeek } = useVideoContext();

  const Icon = playing ? MdPause : MdPlayArrow;
  const formattedTime = formatTimeToMinSecMili(currentTimeInMs);
  const formattedMaxTime = formatTimeToMinSecMili(maxTime);
  return (
    <div className="seek-player flex flex-col">
      <div className="flex flex-row items-center px-2">
        <button
          className="w-[80px] rounded  px-2 py-2"
          onClick={() => {
            setPlaying(!playing);
          }}
        >
          <Icon size="40"></Icon>
        </button>
        <span className="font-mono">{formattedTime}</span>
        <div className="w-[1px] h-[25px] bg-slate-300 mx-[10px]"></div>
        <span className="font-mono">{formattedMaxTime}</span>
      </div>
      <input
        className="flex-1"
        type="range"
        min={0}
        max={maxTime}
        value={currentTimeInMs}
        onChange={(event) => {
          handleSeek(parseInt(event.target.value));
        }}
      />
    </div>
  );
};
