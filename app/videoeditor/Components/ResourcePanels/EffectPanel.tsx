import React from "react";
import EffectResource from "../Entity/EffectResource";
import { useVideoContext } from '@/context/video';

export const EffectsPanel = (() => {
  const { selectedElement, isEditorVideoElement, isEditorImageElement } = useVideoContext();
  return (
    <>
      <div className="text-sm px-[16px] pt-[16px] pb-[8px] font-semibold">
        Effects
      </div>
      {selectedElement &&
        (isEditorImageElement(selectedElement) ||
          isEditorVideoElement(selectedElement)) ? (
        // @ts-ignore
        <EffectResource editorElement={selectedElement} />
      ) : null}
    </>
  );
});
