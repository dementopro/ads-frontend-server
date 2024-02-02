import React from "react";
import { AudioResource } from "../Entity/AudioResource";
import  UploadButton  from "../../UploadButton";
import { useVideoContext } from "@/context/video";

export const AudioResourcesPanel = (() => {
  const { addAudioResource, audios } = useVideoContext();
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    addAudioResource(URL.createObjectURL(file));
  };
  return (
    <>
      <div className="text-sm px-[16px] pt-[16px] pb-[8px] font-semibold">
        Add Audio
      </div>
      {audios.map((audio, index) => {
        return <AudioResource key={audio} audio={audio} index={index} />;
      })}
      <UploadButton
        accept="audio/mp3,audio/*"
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold text-center mx-2 py-2 px-4 rounded"
        onChange={handleFileChange}
      />
    </>
  );
});
