import React from "react";
import { useVideoContext } from "@/context/video";
import { SeekPlayer } from "./TimelineRelated/SeekPlayer";
import { TimeFrameView } from "./TimelineRelated/TimeFrameView";

export const TimeLine = () => {
  const { currentTimeInMs, maxTime, editorElements } = useVideoContext();

  const percentOfCurrentTime = (currentTimeInMs / maxTime) * 100;
  return (
    <>
      <SeekPlayer />
      <div className="relative height-auto">
        <div
          className="w-[2px] bg-red-400 absolute top-0 bottom-0 z-20"
          style={{
            left: `${percentOfCurrentTime}%`,
          }}
        ></div>
        {editorElements.map((element) => {
          return <TimeFrameView key={element.id} element={element} />;
        })}
      </div>
    </>
  );
};
